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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-cream/92 backdrop-blur-xl shadow-[0_1px_0_0_rgba(153,102,102,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-18 md:h-24">
          {/* Logo — larger, more distinctive */}
          <Link href="/" className="group relative">
            <div className="flex flex-col items-center leading-none py-2">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.12em] uppercase transition-colors duration-500 group-hover:text-dusty-rose"
                style={{ color: scrolled ? "#1A1A1A" : "#F5E6D3" }}
              >
                Coffee
              </span>
              <span className="font-serif text-xl md:text-2xl font-light italic transition-colors duration-500"
                style={{ color: scrolled ? "#996666" : "#C4954A" }}
              >
                Ish
              </span>
            </div>
          </Link>

          {/* Golden separator + Desktop links */}
          <div className="hidden md:flex items-center gap-0">
            {/* Separator doré */}
            <div
              className="w-px h-8 mr-10 transition-colors duration-500"
              style={{ backgroundColor: scrolled ? "rgba(196,149,74,0.4)" : "rgba(196,149,74,0.3)" }}
            />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-sans font-medium tracking-[0.18em] uppercase px-5 py-2 transition-colors duration-500 group"
                style={{ color: scrolled ? "rgba(26,26,26,0.7)" : "rgba(245,230,211,0.8)" }}
              >
                <span className="relative z-10 group-hover:text-dusty-rose transition-colors duration-300">
                  {link.label}
                </span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-dore-caramel group-hover:w-3/4 transition-all duration-500 ease-out" />
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 relative z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen
                ? { rotate: 45, y: 7, backgroundColor: "#1A1A1A" }
                : { rotate: 0, y: 0, backgroundColor: scrolled ? "#1A1A1A" : "#F5E6D3" }
              }
              transition={{ duration: 0.3 }}
              className="block w-7 h-[1.5px] origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-7 h-[1.5px]"
              style={{ backgroundColor: scrolled ? "#1A1A1A" : "#F5E6D3" }}
            />
            <motion.span
              animate={mobileOpen
                ? { rotate: -45, y: -7, backgroundColor: "#1A1A1A" }
                : { rotate: 0, y: 0, backgroundColor: scrolled ? "#1A1A1A" : "#F5E6D3" }
              }
              transition={{ duration: 0.3 }}
              className="block w-7 h-[1.5px] origin-center"
            />
          </button>
        </div>

        {/* Dusty rose accent line when scrolled */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(153,102,102,0.3) 20%, rgba(196,149,74,0.2) 50%, rgba(153,102,102,0.3) 80%, transparent)",
          }}
        />
      </nav>

      {/* Mobile menu — fullscreen spectacular */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#F5E6D3" }}
          >
            {/* Decorative background elements */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.04 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
              style={{ backgroundColor: "#996666" }}
            />

            {/* Top decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-28 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-dore-caramel"
            />

            {/* Logo in mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute top-6 left-6"
            >
              <div className="flex flex-col items-center leading-none py-2">
                <span className="font-serif text-2xl font-bold tracking-[0.12em] uppercase text-noir">
                  Coffee
                </span>
                <span className="font-serif text-xl font-light italic text-dusty-rose">
                  Ish
                </span>
              </div>
            </motion.div>

            {/* Navigation links */}
            <div className="flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1 + 0.15,
                    ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group relative font-serif text-5xl font-light text-noir py-3 block"
                  >
                    <span className="relative z-10 group-active:text-dusty-rose transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-dore-caramel/30 scale-x-0 group-active:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute bottom-12 flex flex-col items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-dore-caramel/40" />
              <p className="text-xs font-sans text-noir/30 tracking-[0.3em] uppercase">
                Fish Lane, South Brisbane
              </p>
              <p className="text-xs font-sans text-noir/25 tracking-[0.2em] uppercase">
                ESTD 2025
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
