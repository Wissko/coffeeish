"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-noir text-cream/60 py-20 md:py-28 relative overflow-hidden">
      {/* Giant watermark logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="flex flex-col items-center leading-none opacity-[0.03]">
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
              <div className="flex flex-col items-start leading-none mb-6">
                <span className="font-serif text-2xl font-bold tracking-[0.08em] text-cream uppercase">
                  Coffee
                </span>
                <span className="font-serif text-xl font-light italic text-dusty-rose -mt-1">
                  Ish
                </span>
              </div>
              <p className="text-[13px] leading-[1.8] text-cream/30 max-w-xs">
                Tucked into the heart of South Brisbane&apos;s buzzing Fish Lane.
                Strong, smooth and just the way you like it.
              </p>
            </div>
          </FadeIn>

          {/* Links */}
          <FadeIn delay={0.1}>
            <div>
              <h4 className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-cream/20 mb-6">
                Navigate
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { href: "/menu", label: "Menu" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-cream/40 hover:text-dore-caramel transition-colors duration-300"
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
              <h4 className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-cream/20 mb-6">
                Visit us
              </h4>
              <div className="space-y-2.5 text-[13px]">
                <p className="text-cream/40">51 Fish Lane</p>
                <p className="text-cream/40">South Brisbane QLD 4101</p>
                <p className="text-cream/30 mt-4">Open daily, 6:30am to 3pm</p>
                <a
                  href="mailto:ish@coffeeish.com.au"
                  className="block mt-4 text-dore-caramel/70 hover:text-dore-caramel transition-colors duration-300"
                >
                  ish@coffeeish.com.au
                </a>
                <a
                  href="https://instagram.com/coffeeish__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-dore-caramel/70 hover:text-dore-caramel transition-colors duration-300"
                >
                  @coffeeish__
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream/15 tracking-[0.2em] uppercase">
            ESTD 2025 : Fish Lane, South Brisbane
          </p>
          <p className="text-[11px] text-cream/10">
            Built by AIGA
          </p>
        </div>
      </div>
    </footer>
  );
}
