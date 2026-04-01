"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-noir text-cream/70 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start leading-none mb-6">
              <span className="font-serif text-2xl font-bold tracking-[0.08em] text-cream uppercase">
                Coffee
              </span>
              <span className="font-serif text-xl font-light italic text-dusty-rose -mt-1">
                Ish
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/50 max-w-xs">
              Tucked into the heart of South Brisbane&apos;s buzzing Fish Lane.
              Strong, smooth and just the way you like it.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/40 mb-6">
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
                  className="text-sm text-cream/60 hover:text-dore-caramel transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/40 mb-6">
              Visit us
            </h4>
            <div className="space-y-3 text-sm">
              <p>51 Fish Lane</p>
              <p>South Brisbane QLD 4101</p>
              <p className="mt-4">Open daily, 6:30am to 3pm</p>
              <a
                href="mailto:ish@coffeeish.com.au"
                className="block mt-4 text-dore-caramel hover:text-cream transition-colors"
              >
                ish@coffeeish.com.au
              </a>
              <a
                href="https://instagram.com/coffeeish__"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dore-caramel hover:text-cream transition-colors"
              >
                @coffeeish__
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30 tracking-wide">
            ESTD 2025 : Fish Lane, South Brisbane
          </p>
          <p className="text-xs text-cream/20">
            Built by AIGA
          </p>
        </div>
      </div>
    </footer>
  );
}
