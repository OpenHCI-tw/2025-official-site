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
  className?: string;
  index: number; // ← new prop
};

export default function NewMemberCard({
  member,
  department,
  className,
  index,
}: MemberCardProps) {
  const photo_url = `${department}部/${department} ${member.name}.png`;

  const delay = `${(index * 0.2).toFixed(2)}s`; // e.g., 0s, 0.2s, 0.4s...

  return (
    <div
      className={`relative w-[240px] aspect-[2/3] overflow-hidden tracking-[0.1em] ${
        index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight"
      } md:animate-fadeIn opacity-0 ${className}`}
      style={{
        animationDelay: delay,
        animationDuration: "0.8s",
        animationFillMode: "forwards",
        animationTimingFunction: "ease-out",
      }}
    >
      <Image
        src={`/幹部照片/${photo_url}`}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
  );
}
