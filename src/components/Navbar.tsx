"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Fixed top bar: logo left + pill nav center-right */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 pt-5 flex items-start justify-between pointer-events-none">
        {/* Logo — outside the pill, left aligned */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
          className="pointer-events-auto"
        >
          <Link href="/" className="group flex items-baseline gap-0.5">
            <span
              className="font-serif text-xl md:text-2xl font-semibold tracking-[0.08em] uppercase transition-colors duration-500"
              style={{ color: scrolled ? "#1A1A1A" : "#F5E6D3" }}
            >
              Coffee
            </span>
            <span
              className="font-serif text-lg md:text-xl font-light italic transition-colors duration-500"
              style={{ color: scrolled ? "#996666" : "#C4954A" }}
            >
              Ish
            </span>
          </Link>
        </motion.div>

        {/* Nav pill — only page links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
          className={`
            pointer-events-auto
            hidden md:flex items-center
            px-2 h-11
            rounded-full
            border transition-all duration-700
            ${scrolled
              ? "bg-cream/80 border-dusty-rose/12 shadow-[0_4px_24px_rgba(26,26,26,0.06)]"
              : "bg-noir/15 border-cream/8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
            }
            backdrop-blur-2xl backdrop-saturate-150
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[12px] font-sans font-medium tracking-[0.16em] uppercase px-5 py-2 rounded-full transition-all duration-300 group"
              style={{ color: scrolled ? "rgba(26,26,26,0.6)" : "rgba(245,230,211,0.7)" }}
            >
              <span className="relative z-10 group-hover:text-dusty-rose transition-colors duration-300">
                {link.label}
              </span>
              <span className={`absolute inset-0 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${
                scrolled ? "bg-dusty-rose/8" : "bg-cream/10"
              }`} />
            </Link>
          ))}
        </motion.nav>

        {/* Mobile hamburger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 pointer-events-auto relative z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen
              ? { rotate: 45, y: 7, backgroundColor: "#1A1A1A" }
              : { rotate: 0, y: 0, backgroundColor: scrolled ? "#1A1A1A" : "#F5E6D3" }
            }
            transition={{ duration: 0.3 }}
            className="block w-6 h-[1.5px] origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[1.5px]"
            style={{ backgroundColor: scrolled ? "#1A1A1A" : "#F5E6D3" }}
          />
          <motion.span
            animate={mobileOpen
              ? { rotate: -45, y: -7, backgroundColor: "#1A1A1A" }
              : { rotate: 0, y: 0, backgroundColor: scrolled ? "#1A1A1A" : "#F5E6D3" }
            }
            transition={{ duration: 0.3 }}
            className="block w-6 h-[1.5px] origin-center"
          />
        </motion.button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "#F5E6D3" }}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.03 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-dusty-rose"
            />

            <div className="flex flex-col items-center gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.1, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-5xl font-light text-noir py-3 block active:text-dusty-rose transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-14 flex flex-col items-center gap-2"
            >
              <div className="w-8 h-px bg-dore-caramel/30" />
              <p className="text-[11px] font-sans text-noir/25 tracking-[0.25em] uppercase">
                Fish Lane, South Brisbane
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
