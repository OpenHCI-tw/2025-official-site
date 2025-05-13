"use client";
import React from "react";
import Image from "next/image";

export default function PreviousWorks() {
  return (
    <section
      className="
        relative
        text-white
        mx-auto
        w-[1280px]
        h-auto
        py-20
        px-4
        overflow-hidden
        left-[2px]
      "
    >

      <div className="mx-auto w-[803px] h-auto overflow-hidden">
        <Image
          src="/PreviousWorks/image.png"
          alt=""
          width={803}
          height={350}
          className="object-cover"
        />
      </div>
    </section>
  );
}
