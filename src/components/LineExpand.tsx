"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface LineExpandProps {
  className?: string;
  color?: string;
  delay?: number;
}

export default function LineExpand({
  className = "",
  color = "bg-noir/10",
  delay = 0,
}: LineExpandProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className={`h-px ${color}`}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
        }}
      />
    </div>
  );
}
