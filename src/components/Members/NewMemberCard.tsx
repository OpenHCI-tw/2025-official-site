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

export default function NewMemberCard({ member, department }: MemberCardProps) {
  const photo_url = `${department}部/${department} ${member.name}.png`;
  return (
    <div className="relative w-[240] aspect-[2/3] overflow-hidden tracking-[0.1em]">
      <Image
        src={`/幹部照片/${photo_url}`}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
  );
}
