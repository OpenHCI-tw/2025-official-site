"use client";

import { useEffect, useState } from "react";
import teamMembersJson from "@/data/teamMembers.json";
import DepartmentTag from "./DepartmentTag";
import NewMemberCard from "./NewMemberCard";

type Member = {
  name: string;
  school: string;
  expertise: string;
  photo: string;
};

type TeamMembers = {
  [department: string]: Member[];
};

export default function MemberSection() {
  const teamMembers = teamMembersJson as TeamMembers;

  const departments: string[] = Object.keys(teamMembers);
  const [current, setCurrent] = useState<number>(0);
  const team: string = departments[current];
  const [members, setMembers] = useState<Member[]>(teamMembers[team]);

  // ✅ 預先載入所有圖片
  useEffect(() => {
    Object.entries(teamMembers).forEach(([department, members]) => {
      members.forEach((member) => {
        const img = new Image();
        img.src = `/幹部照片/${department}部/${department} ${member.name}.png`;
      });
    });
  }, []);

  const handleSelect = (index: number): (() => void) => {
    return () => {
      setCurrent(index);
      setMembers(teamMembers[departments[index]]);
    };
  };

  return (
    <div className="grid gap-11 w-full px-8 md:px-30">
      {/* 部門切換 */}
      <div className="departments flex flex-wrap justify-center gap-3 pb-8">
        {departments.map((name, index) => {
          const isActive = index === current;
          return (
            <DepartmentTag
              key={name}
              name={name}
              active={isActive}
              handleSelect={handleSelect(index)}
            />
          );
        })}
      </div>

      {/* 成員卡片區 */}
      <div
        key={current}
        className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_250px))] gap-[19px] w-full justify-center"
      >
        {members.map((member, i) => (
          <NewMemberCard
            key={member.name}
            member={member}
            department={team}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
