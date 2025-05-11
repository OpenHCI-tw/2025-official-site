"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Props type definition
type StonesProps = {
  stoneCount?: number;
  imageUrls?: string[];
  minVelocity?: number;
  maxVelocity?: number;
  margin?: number;
  stoneSize?: [number, number];
  bounceDelta?: number;
  jitterDelta?: number;
};

// Stone object type
type Stone = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  imageUrl: string;
  isInteracting: boolean;
};

type ContainerSize = {
  width: number;
  height: number;
};

export default function Stones({
  stoneCount = 10,
  imageUrls = [],
  minVelocity = 0.25,
  maxVelocity = 1,
  margin = 20,
  stoneSize = [30, 100],
  bounceDelta = 1.2,
  jitterDelta = 0.5,
}: StonesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stones, setStones] = useState<Stone[]>([]);
  const stonesRef = useRef<Stone[]>([]);
  const animationRef = useRef<number | null>(null);
  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 0,
    height: 0,
  });
  const isInitializedRef = useRef<boolean>(false);

  const defaultImages = [
    "/石頭/石頭1.png",
    "/石頭/石頭2.png",
    "/石頭/石頭3.png",
    "/石頭/石頭4.png",
    "/石頭/石頭5.png",
  ];
  const stoneImages =
    imageUrls.length >= stoneCount ? imageUrls : defaultImages;

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => {
      window.removeEventListener("resize", updateContainerSize);
      if (animationRef.current !== null)
        cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    if (
      containerSize.width &&
      containerSize.height &&
      !isInitializedRef.current
    ) {
      const newStones: Stone[] = [];
      for (let i = 0; i < stoneCount; i++) {
        const size =
          Math.random() * (stoneSize[1] - stoneSize[0]) + stoneSize[0];
        let vx = Math.random() * 2 - 1;
        let vy = Math.random() * 2 - 1;
        const magnitude = Math.sqrt(vx * vx + vy * vy) || 1;
        const velocity =
          Math.random() * (maxVelocity - minVelocity) + minVelocity;
        vx = (vx / magnitude) * velocity;
        vy = (vy / magnitude) * velocity;

        newStones.push({
          id: i,
          x: Math.random() * containerSize.width,
          y: Math.random() * containerSize.height,
          vx,
          vy,
          size,
          imageUrl: stoneImages[i % stoneImages.length],
          isInteracting: false,
        });
      }
      setStones(newStones);
      stonesRef.current = newStones;
      isInitializedRef.current = true;
    }
  }, [
    containerSize,
    stoneCount,
    stoneImages,
    maxVelocity,
    minVelocity,
    stoneSize,
  ]);

  useEffect(() => {
    if (
      !isInitializedRef.current ||
      !containerSize.width ||
      !containerSize.height
    )
      return;

    const animate = () => {
      const width = containerSize.width;
      const height = containerSize.height;

      stonesRef.current = stonesRef.current.map((stone) => {
        let newX = stone.x + stone.vx;
        let newY = stone.y + stone.vy;

        if (newX < -stone.size) newX = width + stone.size;
        if (newX > width + stone.size) newX = -stone.size;
        if (newY < -stone.size) newY = height + stone.size;
        if (newY > height + stone.size) newY = -stone.size;

        return { ...stone, x: newX, y: newY };
      });

      setStones([...stonesRef.current]);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null)
        cancelAnimationFrame(animationRef.current);
    };
  }, [containerSize]);

  const handlePointerMove = (x: number, y: number) => {
    if (!containerRef.current || !isInitializedRef.current) return;

    let hasInteraction = false;

    const updatedStones = stonesRef.current.map((stone, index) => {
      const dx = x - stone.x;
      const dy = y - stone.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < stone.size / 2 + margin && !stone.isInteracting) {
        hasInteraction = true;

        const nx = dx / distance;
        const ny = dy / distance;

        const jitter = Math.random() - jitterDelta;

        const bounceStrength =
          Math.random() * (maxVelocity - minVelocity) + bounceDelta;

        const newVx = -nx * bounceStrength + jitter;
        const newVy = -ny * bounceStrength + jitter;

        const velocity = Math.sqrt(newVx ** 2 + newVy ** 2) || 1;
        const unitX = newVx / velocity;
        const unitY = newVy / velocity;

        let finalVx = newVx;
        let finalVy = newVy;
        if (velocity < minVelocity) {
          finalVx = unitX * minVelocity;
          finalVy = unitY * minVelocity;
        } else if (velocity > maxVelocity) {
          finalVx = unitX * maxVelocity;
          finalVy = unitY * maxVelocity;
        }

        setTimeout(() => {
          if (stonesRef.current[index]) {
            stonesRef.current[index].isInteracting = false;
          }
        }, 500);

        return { ...stone, vx: finalVx, vy: finalVy, isInteracting: true };
      }
      return stone;
    });

    if (hasInteraction) {
      stonesRef.current = updatedStones;
      setStones([...updatedStones]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current!.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    handlePointerMove(mouseX, mouseY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = containerRef.current!.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      handlePointerMove(touchX, touchY);
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-transparent pointer-events-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      // style={{ touchAction: "none" }}
    >
      {stones.map((stone) => (
        <div
          key={stone.id}
          className="absolute"
          style={{
            left: `${stone.x}px`,
            top: `${stone.y}px`,
            transform: stone.isInteracting
              ? "translate(-50%, -50%) scale(1.1)"
              : "translate(-50%, -50%) scale(1)",
            width: `${stone.size}px`,
            height: `${stone.size}px`,
            transition: "transform 0.3s ease",
            pointerEvents: "auto",
          }}
        >
          <Image
            src={stone.imageUrl}
            alt={`Stone ${stone.id}`}
            className="object-cover select-none"
            fill
            style={{
              transition: "filter 0.1s ease",
              filter: stone.isInteracting
                ? "brightness(0.8) hue-rotate(30deg)"
                : "brightness(1)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
