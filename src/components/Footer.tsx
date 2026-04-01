"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Wavy SVG separator — cream to noir transition */}
      <div className="relative -mb-px">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[100px] lg:h-[120px] block"
          fill="none"
        >
          <path
            d="M0,120 L0,60 C120,100 240,20 360,50 C480,80 600,10 720,40 C840,70 960,15 1080,45 C1200,75 1320,25 1440,55 L1440,120 Z"
            fill="#1A1A1A"
          />
          <path
            d="M0,120 L0,75 C160,105 320,35 480,65 C640,95 800,30 960,55 C1120,80 1280,40 1440,70 L1440,120 Z"
            fill="#222222"
          />
          <path
            d="M0,120 L0,90 C200,110 400,70 600,85 C800,100 1000,65 1200,80 C1320,88 1400,78 1440,85 L1440,120 Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-noir text-cream/60 pt-16 pb-20 md:pt-20 md:pb-28 relative overflow-hidden">
        {/* Giant watermark logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <div className="flex flex-col items-center leading-none opacity-[0.025]">
            <span className="font-serif text-[22vw] font-bold tracking-[0.08em] uppercase text-cream">
              Coffee
            </span>
            <span className="font-serif text-[18vw] font-light italic text-cream -mt-[4vw]">
              Ish
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
            {/* Brand */}
            <FadeIn>
              <div>
                <div className="flex items-baseline gap-0.5 mb-6">
                  <span className="font-serif text-2xl font-bold tracking-[0.08em] text-cream uppercase">
                    Coffee
                  </span>
                  <span className="font-serif text-xl font-light italic text-dusty-rose">
                    Ish
                  </span>
                </div>
                <p className="text-[13px] leading-[1.8] text-cream/25 max-w-xs">
                  Tucked into the heart of South Brisbane&apos;s buzzing Fish Lane.
                  Strong, smooth and just the way you like it.
                </p>
                {/* Social icons placeholder */}
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href="https://instagram.com/coffeeish__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center hover:border-dore-caramel hover:text-dore-caramel transition-all duration-300 text-cream/30"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:ish@coffeeish.com.au"
                    className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center hover:border-dore-caramel hover:text-dore-caramel transition-all duration-300 text-cream/30"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Links */}
            <FadeIn delay={0.1}>
              <div>
                <h4 className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-cream/15 mb-6">
                  Navigate
                </h4>
                <div className="flex flex-col gap-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/menu", label: "Menu" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[13px] text-cream/35 hover:text-dore-caramel transition-colors duration-300 w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Contact */}
            <FadeIn delay={0.2}>
              <div>
                <h4 className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-cream/15 mb-6">
                  Visit us
                </h4>
                <div className="space-y-2.5 text-[13px]">
                  <p className="text-cream/35">51 Fish Lane</p>
                  <p className="text-cream/35">South Brisbane QLD 4101</p>
                  <div className="w-5 h-px bg-cream/10 my-4" />
                  <p className="text-cream/25">Open daily</p>
                  <p className="text-cream/35">6:30am to 3pm</p>
                  <div className="w-5 h-px bg-cream/10 my-4" />
                  <a
                    href="mailto:ish@coffeeish.com.au"
                    className="block text-dore-caramel/60 hover:text-dore-caramel transition-colors duration-300"
                  >
                    ish@coffeeish.com.au
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 pt-8 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-cream/12 tracking-[0.2em] uppercase">
              ESTD 2025 : Fish Lane, South Brisbane
            </p>
            <p className="text-[11px] text-cream/8">
              Built by AIGA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
