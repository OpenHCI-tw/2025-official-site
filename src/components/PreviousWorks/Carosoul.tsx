"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import slides from "@/data/pastWorks.json";

type Slide = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  contain?: boolean;
};

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalSlide, setModalSlide] = useState<Slide | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const slideWidth = useRef<number>(0);
  const autoScrollTimerRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const isManualScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    slides.forEach((obj) => {
      const img = new window.Image();
      img.src = obj.imageSrc;
    });
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      slideWidth.current = containerWidth;
      scrollToSlide(currentIndex, false);
    }
  }, []);

  useEffect(() => {
    if (modalOpen) return;

    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }

    autoScrollTimerRef.current = setInterval(() => {
      if (!isManualScrollingRef.current) {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
        scrollToSlide(nextIndex);
      }
    }, 3000);

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [currentIndex, modalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      isManualScrollingRef.current = true;

      // ✅ 暫停自動輪播
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }

      // ✅ 若已有等待定時器，先清掉
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollingRef.current = false;

        const scrollPosition = scrollContainerRef.current!.scrollLeft;
        const containerWidth = scrollContainerRef.current!.offsetWidth;
        const centerPosition = scrollPosition + containerWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;
        const offset = 1;

        for (let i = 0; i < slides.length; i++) {
          const slideElement = scrollContainerRef.current!.children[
            i + offset
          ] as HTMLDivElement;
          if (!slideElement) continue;

          const slideCenter =
            slideElement.offsetLeft + slideElement.offsetWidth / 2;
          const distance = Math.abs(centerPosition - slideCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }

        if (closestIndex !== currentIndex) {
          setCurrentIndex(closestIndex);
          scrollToSlide(closestIndex);
        }

        // ✅ 滑動結束後，重啟輪播
        if (!autoScrollTimerRef.current && !modalOpen) {
          autoScrollTimerRef.current = setInterval(() => {
            const nextIndex = (closestIndex + 1) % slides.length;
            setCurrentIndex(nextIndex);
            scrollToSlide(nextIndex);
          }, 3000);
        }
      }, 150);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentIndex, modalOpen]);

  const scrollToSlide = (index: number, smooth = true) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const slideElement = container.children[index + 1] as HTMLElement;
    if (!slideElement) return;

    const containerCenter = container.offsetWidth / 2;
    const targetScrollPosition =
      slideElement.offsetLeft - containerCenter + slideElement.offsetWidth / 2;

    container.scrollTo({
      left: targetScrollPosition,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const openModal = (slide: Slide) => {
    setModalSlide(slide);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full relative flex flex-col gap-3 items-center">
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-x-auto snap-x snap-mandatory scrollbar-hidden flex gap-5"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex-shrink-0 w-1/2" aria-hidden="true"></div>

          {slides.map((slide) => (
            <div
              key={slide.imageSrc}
              className="flex-shrink-0 w-[calc(100%-64px)] md:max-w-200 aspect-[80/35] cursor-pointer"
              style={{ scrollSnapAlign: "center" }}
              onClick={() => openModal(slide)}
            >
              <div className="relative w-full h-full bg-white">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  loading="eager"
                  className={slide?.contain ? "object-contain" : "object-cover"}
                />
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-1/2" aria-hidden="true"></div>
        </div>
      </div>

      <div className="h-1 w-full max-w-200 px-8 md:px-0">
        <div className="bg-white w-full h-full"></div>
      </div>

      {modalOpen && modalSlide && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="relative bg-[rgba(153,153,153,1)] max-w-[310px] md:max-w-3xl max-h-screen text-white px-5 py-10 md:px-10 m-10 drop-shadow-[12px_12px_0_black]">
            <div className="absolute right-4 top-4">
              <button
                onClick={closeModal}
                className="w-6 aspect-square text-black cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">{modalSlide.title}</h2>

              <div className="relative w-full aspect-[80/35]">
                <Image
                  src={modalSlide.imageSrc}
                  alt={modalSlide.title}
                  fill
                  loading="eager"
                  className={
                    modalSlide?.contain ? "object-contain" : "object-cover"
                  }
                />
              </div>

              <p>{modalSlide.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
