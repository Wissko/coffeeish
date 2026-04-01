"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
          className="fixed inset-0 z-[100] bg-noir flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            {/* SVG Logo draw animation */}
            <svg
              viewBox="0 0 300 80"
              className="w-48 md:w-64"
              fill="none"
            >
              {/* COFFEE text path */}
              <motion.text
                x="10"
                y="38"
                className="font-serif"
                fontSize="36"
                fontWeight="600"
                letterSpacing="4"
                fill="none"
                stroke="#F5E6D3"
                strokeWidth="0.8"
                initial={{ strokeDasharray: 600, strokeDashoffset: 600 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              >
                COFFEE
              </motion.text>

              {/* Ish text — appears after COFFEE draws */}
              <motion.text
                x="195"
                y="42"
                className="font-serif"
                fontSize="32"
                fontWeight="300"
                fontStyle="italic"
                fill="none"
                stroke="#996666"
                strokeWidth="0.8"
                initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              >
                Ish
              </motion.text>

              {/* Fill in after stroke completes */}
              <motion.text
                x="10"
                y="38"
                className="font-serif"
                fontSize="36"
                fontWeight="600"
                letterSpacing="4"
                fill="#F5E6D3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                COFFEE
              </motion.text>
              <motion.text
                x="195"
                y="42"
                className="font-serif"
                fontSize="32"
                fontWeight="300"
                fontStyle="italic"
                fill="#996666"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                Ish
              </motion.text>
            </svg>

            {/* Subtle line under logo */}
            <motion.div
              className="h-px bg-dore-caramel/40 mt-5"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            />

            {/* Tagline */}
            <motion.p
              className="text-[10px] font-sans tracking-[0.4em] uppercase text-cream/20 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Fish Lane, South Brisbane
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
