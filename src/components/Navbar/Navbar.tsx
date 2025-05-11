"use client";

import Image from "next/image";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full text-white pt-10 pb-5 px-10 flex items-center justify-between bg-black h-[var(--nav-height)]">
      {/* Navbar */}

      {/* <Image
        src="/Navbar圖片/OpenHCI’25.svg"
        width={118}
        height={18}
        alt="OpenHCI'25"
      /> */}
      <a href="#" className="text-3xl">
        OpenHCI&apos;25
      </a>
      <a
        href="#"
        className="hidden md:block absolute left-[50%] translate-x-[-50%]"
      >
        <Image src="/Navbar圖片/LOGO.png" width={182} height={55} alt="logo" />
      </a>
      <div className="relative">
        <Image
          src="/Navbar圖片/menu-icon.svg"
          width={60}
          height={55}
          alt="menu-icon"
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <Dropdown open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}
