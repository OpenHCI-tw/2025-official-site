"use client";

import { useRef, useState, useEffect } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  id?: string;
  threshold?: number;
  className?: string;
  animationClass?: string; // 套用在可見時的動畫
  baseClass?: string; // 初始狀態
  once?: boolean; // ✅ 新增：是否只觸發一次
  rootMargin?: string;
};

export default function AnimatedSection({
  children,
  id,
  threshold = 0.1,
  className = "",
  animationClass = "fade-in-end",
  baseClass = "fade-in-start",
  once = false, // ✅ 預設只觸發一次
  rootMargin = "",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      id={id}
      className={` ${baseClass} ${visible ? animationClass : ""} ${className}`}
    >
      {children}
    </div>
  );
}
