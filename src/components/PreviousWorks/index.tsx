"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const images = [
  "/PreviousWorks/01.png",
  "/PreviousWorks/02.png",
  "/PreviousWorks/03.jpg",
  "/PreviousWorks/04.png",
  "/PreviousWorks/05.png",
  "/PreviousWorks/06.png",
  "/PreviousWorks/07.png",
  "/PreviousWorks/ALARM.png"
];

export default function PreviousWorks() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current + images.length - 1) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true
  });

  return (
    <section className="relative text-white mx-auto w-[1280px] py-20 px-4 overflow-hidden">
      <div
        {...handlers}
        className="mx-auto w-[803px] h-[350px] overflow-hidden relative touch-pan-y"
      >
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-cover select-none"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        >
          Next
        </button>
      </div>
    </section>
  );
}
