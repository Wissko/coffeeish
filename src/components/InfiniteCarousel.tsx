"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

interface InfiniteCarouselProps {
  images: CarouselImage[];
}

export default function InfiniteCarousel({ images }: InfiniteCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);

  // Triple images for seamless loop
  const tripled = [...images, ...images, ...images];
  const gap = 14;

  useEffect(() => {
    const updateWidth = () => {
      const vw = window.innerWidth;
      // Smaller items so ~2 are fully visible before blur zone
      if (vw < 640) setItemWidth(vw * 0.42);
      else if (vw < 1024) setItemWidth(vw * 0.26);
      else setItemWidth(Math.min(vw * 0.18, 260));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const singleSetWidth = images.length * ((itemWidth || 200) + gap);

  useEffect(() => {
    if (!itemWidth || !trackRef.current) return;

    const animate = () => {
      posRef.current -= 0.4; // Slow, elegant speed

      if (Math.abs(posRef.current) >= singleSetWidth) {
        posRef.current += singleSetWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;

        const children = trackRef.current.children;
        const containerCenter = window.innerWidth / 2;

        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const rect = child.getBoundingClientRect();
          const childCenter = rect.left + rect.width / 2;
          const distance = Math.abs(childCenter - containerCenter);

          // Arc applies to ALL items based on distance from center (no clear zone for the arc)
          const maxDist = window.innerWidth * 0.55;
          const arcNorm = Math.min(distance / maxDist, 1);

          // Clear zone only for blur/opacity
          const clearZone = itemWidth * 1.6;
          const blurNorm = Math.max(0, (distance - clearZone) / (window.innerWidth * 0.3));
          const blurClamped = Math.min(blurNorm, 1);

          // Blur: 0 in clear zone → 7px at edges
          const blur = blurClamped * 7;
          // Scale: 1 at center → 0.78 at edges
          const scale = 1 - arcNorm * 0.22;
          // Opacity: 1 → 0.2 at edges
          const opacity = 1 - blurClamped * 0.8;
          // Y offset: visible arc on ALL items — quadratic curve, up to 90px
          const yOffset = arcNorm * arcNorm * 90;
          // Rotation: pronounced perspective tilt, up to 35°
          const rotateY = arcNorm * 35 * (childCenter < containerCenter ? 1 : -1);

          const imgWrapper = child.querySelector("[data-carousel-img]") as HTMLElement;
          if (imgWrapper) {
            imgWrapper.style.filter = `blur(${blur}px)`;
            imgWrapper.style.transform = `scale(${scale}) translateY(${yOffset}px) perspective(800px) rotateY(${rotateY}deg)`;
            imgWrapper.style.opacity = `${opacity}`;
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [itemWidth, singleSetWidth]);

  if (!itemWidth) return <div className="h-[300px]" />;

  return (
    <div className="relative overflow-hidden py-8">
      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F5E6D3, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F5E6D3, transparent)" }}
      />

      <div
        ref={trackRef}
        className="flex will-change-transform items-center"
        style={{ gap: `${gap}px` }}
      >
        {tripled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="flex-shrink-0"
            style={{ width: `${itemWidth}px` }}
          >
            <div
              data-carousel-img
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "3/4", transformOrigin: "center bottom" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={`${Math.round(itemWidth)}px`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
