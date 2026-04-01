"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <AnimatePresence mode="wait">
        <PageTransition>
          {children}
        </PageTransition>
      </AnimatePresence>
    </>
  );
}
