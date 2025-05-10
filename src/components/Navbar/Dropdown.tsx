"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "工作坊介紹", href: "#workshop-intro" },
  { label: "活動資訊", href: "#activity-info" },
  { label: "講座陣容", href: "#speaker-info" },
  { label: "往年作品成果", href: "#past-work" },
  { label: "FAQ", href: "#faq" },
  { label: "團隊夥伴", href: "#team-info" },
];

export default function Dropdown({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
            break;
          }
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    const targets = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    targets.forEach((el) => observer.observe(el));

    return () => targets.forEach((el) => observer.unobserve(el));
  }, []);

  const backdropClass = `fixed inset-0 bg-black/30 transition-opacity duration-300 md:duration-0 ${
    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`;

  const dropdownClass = `fixed z-50 text-white bg-black shadow-lg transition-transform duration-500 ease-in-out
    w-full top-0 left-1/2 -translate-x-1/2
    md:w-50 md:left-auto md:right-8 md:translate-x-0 md:duration-0
    ${
      open
        ? "translate-y-0 md:translate-y-[calc(var(--nav-height))]"
        : "-translate-y-full"
    }`;

  return (
    <>
      {/* 背景遮罩 */}
      <div className={backdropClass} onClick={() => setOpen(false)} />

      {/* Dropdown 主體 */}
      <div className={dropdownClass}>
        <div className="flex flex-col items-end md:items-start justify-center py-7 px-16 md:px-8 gap-6 h-[384px] md:h-[328px]">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`pl-4 border-l-2 border-l-black text-[16px] text-nowrap leading-[24px] transition-all ${
                activeHash === href ? "border-l-orange" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
