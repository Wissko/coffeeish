"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import LineExpand from "@/components/LineExpand";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import SmoothScroll from "@/components/SmoothScroll";

const galleryImages = [
  { src: "/images/latte-art.jpg", alt: "Latte art rosetta" },
  { src: "/images/kouign-amann.jpg", alt: "Kouign-amann pastry" },
  { src: "/images/matcha-latte.jpg", alt: "Iced matcha latte" },
  { src: "/images/pastry-display.jpg", alt: "Pastry display case" },
];

const instaImages = [
  { src: "/images/pistachio-croissant.jpg", alt: "Pistachio croissant", span: "row-span-2" },
  { src: "/images/latte-art.jpg", alt: "Latte art", span: "" },
  { src: "/images/blade-sign.jpg", alt: "Blade sign ESTD 2025", span: "" },
  { src: "/images/kouign-amann.jpg", alt: "Kouign-amann", span: "row-span-2" },
  { src: "/images/food-cabinet.jpg", alt: "Food cabinet", span: "" },
  { src: "/images/storefront.jpg", alt: "Storefront", span: "" },
];

/* ── Counter number component ── */
function CounterNum({ num, delay = 0 }: { num: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
        }}
      >
        {num}
      </motion.span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />

      {/* ═══ Hero — video background ═══ */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback to static image */}
        </video>
        {/* Fallback image behind video */}
        <Image
          src="/images/storefront.jpg"
          alt="CoffeeIsh storefront"
          fill
          className="object-cover -z-10"
          priority
          quality={90}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-noir/10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <FadeIn delay={0.3}>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-cream/45 mb-6">
              Specialty coffee & artisan food
            </p>
          </FadeIn>

          <TextReveal
            as="h1"
            className="font-serif text-[clamp(2.8rem,7vw,7rem)] font-light text-cream leading-[0.9] tracking-[-0.02em] max-w-4xl"
            delay={0.4}
          >
            {"Pours perfection\nin every cup"}
          </TextReveal>

          <FadeIn delay={0.9}>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-dore-caramel" />
                <p className="text-[12px] font-sans text-cream/40">
                  Fish Lane, South Brisbane
                </p>
              </div>
              <p className="text-[12px] font-sans text-cream/40">
                Open daily, 6:30am to 3pm
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={1.1}>
            <div className="mt-12">
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 text-[12px] font-sans font-medium tracking-[0.18em] uppercase text-cream group"
              >
                <span className="border-b border-cream/15 pb-1 group-hover:border-dore-caramel transition-all duration-500">
                  Explore the menu
                </span>
                <span className="text-dore-caramel group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={1.4}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
            <motion.div
              className="w-px h-8 bg-cream/20"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>
        </FadeIn>
      </section>

      {/* ═══ Intro ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden">
                <Image
                  src="/images/exterior-life.jpg"
                  alt="CoffeeIsh exterior on Fish Lane"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
            </FadeIn>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dore-caramel mb-6">
                  The story
                </p>
              </FadeIn>
              <TextReveal
                as="h2"
                className="font-serif text-3xl md:text-4xl font-light text-noir leading-[1.15]"
                delay={0.1}
              >
                {"Tucked into the heart of\nSouth Brisbane's buzzing\nFish Lane"}
              </TextReveal>
              <FadeIn delay={0.3}>
                <p className="font-sans text-[15px] text-noir/40 leading-[1.85] max-w-md mt-8">
                  This little spot delivers the goods. Specialty coffee from local
                  roasters, artisan pastries and food crafted with intention.
                  The first to open on this stretch of Fish Lane.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <LineExpand className="max-w-7xl mx-auto px-6 md:px-10" />

      {/* ═══ Three pillars ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose mb-16 md:mb-20">
              What defines us
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
            {[
              {
                num: "01",
                title: "Coffee",
                accent: "text-dusty-rose",
                text: "Every cup pulled with precision. Roasted by Kasa Coffee. Flat whites, lattes, espresso, and matcha for when you need something different.",
              },
              {
                num: "02",
                title: "Food",
                accent: "text-dore-caramel",
                text: "From house focaccia and sausage rolls to lasagna with rocket salad. European technique meets Australian ease.",
              },
              {
                num: "03",
                title: "Place",
                accent: "text-sage-green",
                text: "Where food, art and community collide. Street art, sculpture, galleries and the energy of South Brisbane at your doorstep.",
              },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.12}>
                <div className="group">
                  <CounterNum num={item.num} delay={i * 0.15} />
                  <span className={`text-[11px] font-sans font-medium tracking-[0.2em] ${item.accent} ml-3`}>
                    /{item.title.toLowerCase()}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-noir mt-4 mb-5">
                    {item.title}
                  </h3>
                  <LineExpand delay={0.2 + i * 0.1} className="mb-5" />
                  <p className="text-[14px] font-sans text-noir/38 leading-[1.85]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Image pair — offset ═══ */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-3xl mx-auto">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/pistachio-croissant.jpg"
                  alt="Pistachio croissant"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden mt-10 md:mt-16">
                <Image
                  src="/images/blade-sign.jpg"
                  alt="CoffeeIsh blade sign"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ Quote ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <div className="w-8 h-px bg-dore-caramel mx-auto mb-10" />
          </FadeIn>
          <TextReveal
            as="h2"
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-noir leading-[1.35] italic"
            delay={0.1}
          >
            {"The -ish is what makes us, us.\nA nod to not taking\nourselves too seriously."}
          </TextReveal>
          <FadeIn delay={0.5}>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-noir/20 mt-10">
              ESTD 2025
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <LineExpand className="max-w-7xl mx-auto px-6 md:px-10" />

      {/* ═══ Carousel ═══ */}
      <section className="py-24 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose">
              From the counter
            </p>
          </FadeIn>
        </div>
        <InfiniteCarousel images={galleryImages} />
      </section>

      {/* ═══ Instagram grid ═══ */}
      <section className="py-24 md:py-36 bg-noir">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-cream/30">
                @coffeeish__
              </p>
              <a
                href="https://instagram.com/coffeeish__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-sans font-medium tracking-[0.16em] uppercase text-dore-caramel hover:text-cream transition-colors duration-300"
              >
                Follow
              </a>
            </div>
          </FadeIn>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5 md:gap-2 auto-rows-[140px] md:auto-rows-[180px]">
            {instaImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 0.06}>
                <div className={`relative overflow-hidden group ${img.span} h-full`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28 md:py-40 bg-cream relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-serif text-[18vw] font-light text-noir/[0.025] leading-none tracking-[-0.03em]">
            CoffeeIsh
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dore-caramel mb-8">
              Visit
            </p>
          </FadeIn>
          <TextReveal
            as="h2"
            className="font-serif text-3xl md:text-5xl font-light text-noir leading-[1.1]"
          >
            {"Come find us on\nFish Lane"}
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="font-sans text-[14px] text-noir/35 mt-6 mb-10">
              51 Fish Lane, South Brisbane QLD 4101
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[12px] font-sans font-medium tracking-[0.18em] uppercase text-noir group"
            >
              <span className="border-b border-noir/15 pb-1 group-hover:border-dusty-rose group-hover:text-dusty-rose transition-all duration-500">
                Get directions
              </span>
              <span className="text-dore-caramel group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
