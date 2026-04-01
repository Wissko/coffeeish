"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SVG_NS = "http://www.w3.org/2000/svg";
const BLIND_COUNT = 20;

interface SlideData {
  image: string;
  label?: string;
  title: string;
  subtitle?: string;
}

interface ScrollStageProps {
  slides: SlideData[];
}

export default function ScrollStage({ slides }: ScrollStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const masterRef = useRef<gsap.core.Timeline | null>(null);

  const createBlinds = useCallback((group: SVGGElement, vbHeight: number) => {
    group.innerHTML = "";
    const h = vbHeight / BLIND_COUNT;
    const blinds: { top: SVGRectElement; bottom: SVGRectElement; y: number; h: number }[] = [];
    let currentY = 0;

    for (let i = 0; i < BLIND_COUNT; i++) {
      const centerY = vbHeight - (currentY + h / 2);

      const rectTop = document.createElementNS(SVG_NS, "rect");
      const rectBottom = document.createElementNS(SVG_NS, "rect");

      [rectTop, rectBottom].forEach((r) => {
        r.setAttribute("x", "0");
        r.setAttribute("width", "100");
        r.setAttribute("height", "0");
        r.setAttribute("fill", "white");
        r.setAttribute("shape-rendering", "crispEdges");
      });

      rectTop.setAttribute("y", String(centerY));
      rectBottom.setAttribute("y", String(centerY));

      group.appendChild(rectTop);
      group.appendChild(rectBottom);

      blinds.push({ top: rectTop, bottom: rectBottom, y: centerY, h: h / 2 });
      currentY += h;
    }
    return blinds;
  }, []);

  useEffect(() => {
    if (!stageRef.current || !layersRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const vbHeight = (height / width) * 100;

    const svgs = layersRef.current.querySelectorAll<SVGSVGElement>(".scroll-layer");
    const blindsSets: ReturnType<typeof createBlinds>[] = [];

    svgs.forEach((svg) => {
      svg.setAttribute("viewBox", `0 0 100 ${vbHeight}`);

      const maskRect = svg.querySelector("mask rect");
      if (maskRect) {
        maskRect.setAttribute("width", "100");
        maskRect.setAttribute("height", String(vbHeight));
      }

      const img = svg.querySelector("image");
      if (img) {
        img.setAttribute("width", "100");
        img.setAttribute("height", String(vbHeight));
      }

      const group = svg.querySelector<SVGGElement>("g[data-blinds]");
      if (group) {
        blindsSets.push(createBlinds(group, vbHeight));
      }
    });

    // Build master timeline
    const texts = gsap.utils.toArray<HTMLElement>(".scroll-text");
    const fills = gsap.utils.toArray<HTMLElement>(".progress-fill");

    if (masterRef.current) masterRef.current.kill();

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: stageRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          fills.forEach((fill, i) => {
            let p = (progress - i / fills.length) * fills.length;
            p = Math.max(0, Math.min(1, p));
            fill.style.width = `${p * 100}%`;
          });
        },
      },
    });

    blindsSets.forEach((blinds, i) => {
      // Open blinds
      master.add(
        gsap.timeline().to(
          blinds.flatMap((b) => [b.top, b.bottom]),
          {
            attr: {
              y: (idx: number) => {
                const b = blinds[Math.floor(idx / 2)];
                return idx % 2 === 0 ? b.y - b.h : b.y;
              },
              height: (idx: number) => {
                const b = blinds[Math.floor(idx / 2)];
                return b.h + 0.01;
              },
            },
            ease: "power3.out",
            stagger: { each: 0.02, from: "start" },
          }
        )
      );

      // Text in
      if (texts[i]) {
        master.add(
          gsap.to(texts[i], {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1.5,
            ease: "expo.out",
          }),
          "-=0.3"
        );
        // Text out
        master.add(
          gsap.to(texts[i], {
            clipPath: "inset(0% 0% 100% 0%)",
            y: -30,
            duration: 1.2,
            ease: "power2.inOut",
          }),
          "+=0.8"
        );
      }
    });

    masterRef.current = master;

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 250);
    };
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (masterRef.current) masterRef.current.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [slides, createBlinds]);

  return (
    <div ref={stageRef} className="relative" style={{ height: `${(slides.length + 1) * 150}vh` }}>
      <div ref={layersRef} className="sticky top-0 w-screen h-screen overflow-hidden">
        {slides.map((slide, i) => (
          <svg
            key={i}
            className="scroll-layer absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id={`mask-${i}`} maskUnits="userSpaceOnUse">
                <rect x="0" y="0" width="100" height="100" fill="black" />
                <g data-blinds />
              </mask>
            </defs>
            <image
              href={slide.image}
              x="0"
              y="0"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid slice"
              mask={`url(#mask-${i})`}
              style={{ filter: "brightness(0.75)" }}
            />
          </svg>
        ))}

        {/* Overlay texts */}
        <div className="absolute inset-0 pointer-events-none p-6 md:p-12">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="scroll-text absolute inset-0 flex flex-col justify-end pb-28 md:pb-32 px-6 md:px-12"
              style={{
                clipPath: "inset(100% 0 0 0)",
                transform: "translateY(40px)",
              }}
            >
              {slide.label && (
                <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-cream/50 mb-4">
                  {slide.label}
                </p>
              )}
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[0.9] max-w-2xl">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="font-sans text-sm md:text-base text-cream/50 mt-4 max-w-md leading-relaxed">
                  {slide.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 w-full px-6 md:px-12 pb-8 flex gap-2 z-20">
          {slides.map((_, i) => (
            <div key={i} className="flex-1 h-[2px] bg-cream/15 overflow-hidden relative">
              <div className="progress-fill absolute top-0 left-0 h-full bg-cream/70" style={{ width: "0%" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
