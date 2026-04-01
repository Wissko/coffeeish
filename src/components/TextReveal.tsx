"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Split into lines by <br> or newlines
  const lines = children.split(/\n|\\n/).filter(Boolean);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.1,
              ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
