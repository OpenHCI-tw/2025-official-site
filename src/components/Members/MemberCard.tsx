import Image from "next/image";
import React from "react";

type Member = {
  name: string;
  school: string;
  expertise: string;
  photo: string;
};

type MemberCardProps = {
  member: Member;
  department: string;
};

export default function MemberCard({ member, department }: MemberCardProps) {
  const photo_url = `${department} ${member.name}.JPG`;
  return (
    <div className="w-full aspect-[0.75] grid grid-rows-[3fr_1fr] z-30">
      <div className="relative w-full aspect-[1/1] overflow-hidden tracking-[0.1em]">
        <Image
          src={`/幹部照片/${photo_url}`}
          alt={member.name}
          fill
          className="object-cover object-[50%_10%]"
        />
        <div className="name absolute bg-orange right-0 bottom-0 p-1.5 text-xl text-white">
          {member.name}
        </div>
      </div>
      <div className="pl-3 pt-4 text-[16px] bg-grey tracking-[0.1em] text-white">
        <p>{member.school}</p>
        <p>{member.expertise}</p>
      </div>
    </div>
  );
}
