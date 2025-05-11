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
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="w-full aspect-[0.75] grid grid-rows-[3fr_1fr] z-10">
      <div className="relative w-full aspect-square overflow-hidden tracking-[0.1em]">
        <Image
          src={`/幹部照片/${member.photo}`}
          alt={member.name}
          fill
          className="object-cover object-center"
        />
        <div className="name absolute bg-orange right-0 bottom-0 p-1.5 text-xl">
          {member.name}
        </div>
      </div>
      <div className="pl-3 pt-4 text-[16px] bg-grey tracking-[0.1em]">
        <p>{member.school}</p>
        <p>{member.expertise}</p>
      </div>
    </div>
  );
}
