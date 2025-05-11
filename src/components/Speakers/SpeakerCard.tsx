import Image from "next/image";
import React from "react";

export type Speaker = {
  name: string;
  education: string;
  field: string;
  photo: string;
};

export type SpeakerCardProps = {
  speaker: Speaker;
};

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="w-full aspect-[0.75] grid grid-rows-[3fr_1fr] z-20">
      <div className="relative w-full aspect-square overflow-hidden tracking-[0.1em]">
        <Image
          src={`/speakers/${speaker.photo}`}
          alt={speaker.name}
          fill
          className="object-cover object-center"
        />
        <div className="name absolute bg-orange right-0 bottom-0 p-1.5 text-xl text-white">
          {speaker.name}
        </div>
      </div>
      <div className="pl-3 pt-4 text-[16px] bg-grey tracking-[0.1em] text-white">
        <p>{speaker.education}</p>
        <p>{speaker.field}</p>
      </div>
    </div>
  );
}
