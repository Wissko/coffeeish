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
  const speedRef = useRef(0.5); // px per frame

  // Triple the images for seamless loop
  const tripled = [...images, ...images, ...images];
  const singleSetWidth = images.length * (itemWidth || 300);

  useEffect(() => {
    const updateWidth = () => {
      const vw = window.innerWidth;
      // On mobile: ~80vw per item, tablet: ~45vw, desktop: ~30vw
      if (vw < 640) setItemWidth(vw * 0.75);
      else if (vw < 1024) setItemWidth(vw * 0.4);
      else setItemWidth(Math.min(vw * 0.28, 420));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!itemWidth || !trackRef.current) return;

    const animate = () => {
      posRef.current -= speedRef.current;

      // Reset when we've scrolled past one full set
      if (Math.abs(posRef.current) >= singleSetWidth) {
        posRef.current += singleSetWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }

      // Update blur/scale for each item
      if (trackRef.current) {
        const children = trackRef.current.children;
        const containerCenter = window.innerWidth / 2;

        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const rect = child.getBoundingClientRect();
          const childCenter = rect.left + rect.width / 2;
          const distance = Math.abs(childCenter - containerCenter);
          const maxDist = window.innerWidth * 0.6;
          const normalized = Math.min(distance / maxDist, 1);

          // Blur: 0 at center, up to 4px at edges
          const blur = normalized * 4;
          // Scale: 1 at center, 0.88 at edges
          const scale = 1 - normalized * 0.12;
          // Opacity: 1 at center, 0.5 at edges
          const opacity = 1 - normalized * 0.5;

          const imgWrapper = child.querySelector("[data-carousel-img]") as HTMLElement;
          if (imgWrapper) {
            imgWrapper.style.filter = `blur(${blur}px)`;
            imgWrapper.style.transform = `scale(${scale})`;
            imgWrapper.style.opacity = `${opacity}`;
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [itemWidth, singleSetWidth]);

  if (!itemWidth) return <div className="h-[400px]" />;

  const gap = 12;

  return (
    <div className="relative overflow-hidden">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F5E6D3, transparent)" }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F5E6D3, transparent)" }}
      />

      <div
        ref={trackRef}
        className="flex will-change-transform"
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
              className="relative overflow-hidden transition-none"
              style={{ aspectRatio: "4/5" }}
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
