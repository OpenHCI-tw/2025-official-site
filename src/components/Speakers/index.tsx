"use client";
import { useState } from "react";
import speakersJson from "@/data/speakers.json";
import GroupTag from "./GroupTag";
import NewSpeakerCard from "./NewSpeakerCard";
import type { Speaker } from "./NewSpeakerCard";

type Speakers = {
  [group: string]: Speaker[];
};

export default function Speakers() {
  const speakersData = speakersJson as Speakers;

  const groups: string[] = Object.keys(speakersData);
  const [current, setCurrent] = useState<number>(0);
  const group: string = groups[current];

  const [speakers, setSpeakers] = useState<Speaker[]>(speakersData[group]);

  const handleSelect = (index: number): (() => void) => {
    return () => {
      setCurrent(index);
      setSpeakers(speakersData[groups[index]]);
    };
  };

  return (
    <div className="grid gap-11 w-full px-8">
      <div className="departments flex flex-wrap justify-center gap-3 pb-8">
        {groups.map((name, index) => {
          const isActive = index === current;
          return (
            <GroupTag
              key={name}
              name={name}
              active={isActive}
              handleSelect={handleSelect(index)}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_250px))] gap-[19px] w-full justify-center">
        {speakers.map((speaker, i) => (
          <NewSpeakerCard
            key={`${speaker.name}-${i}`}
            group={group}
            speaker={speaker}
          />
        ))}
      </div>
    </div>
  );
}
