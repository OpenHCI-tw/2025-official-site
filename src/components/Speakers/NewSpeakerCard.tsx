import Image from "next/image";
import React from "react";

export type Speaker = {
  name: string;
};

export type SpeakerCardProps = {
  speaker: Speaker;
  group: string;
};

export default function NewSpeakerCard({ speaker, group }: SpeakerCardProps) {
  const photo_url = `${group}/${group} ${speaker.name}.png`;
  return (
    <div className="relative w-[240] aspect-[2/3] overflow-hidden tracking-[0.1em] animate-fadeIn">
      <Image
        src={`/老師照片/${photo_url}`}
        alt={speaker.name}
        fill
        className="object-cover"
      />
    </div>
  );
}
