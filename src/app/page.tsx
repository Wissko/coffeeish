"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import InfiniteCarousel from "@/components/InfiniteCarousel";

/* ── Parallax Section wrapper ── */
function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  priority?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 30, mass: 0.5 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY }} className="relative w-full h-[130%] -mt-[15%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}

/* ── Scroll-driven reveal ── */
function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 });
  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 25 });

  return (
    <motion.div ref={ref} style={{ opacity: smoothOpacity, y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Scale on scroll ── */
function ScrollScale({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 25 });

  return (
    <motion.div ref={ref} style={{ scale: smoothScale }} className={className}>
      {children}
    </motion.div>
  );
}

const galleryImages = [
  { src: "/images/latte-art.jpg", alt: "Latte art rosetta" },
  { src: "/images/kouign-amann.jpg", alt: "Kouign-amann pastry" },
  { src: "/images/matcha-latte.jpg", alt: "Iced matcha latte" },
  { src: "/images/pastry-display.jpg", alt: "Pastry display case" },
];

export default function Home() {
  /* Hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const heroBlur = useTransform(heroScroll, [0, 0.5, 1], [1.5, 2.5, 4]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const smoothHeroY = useSpring(heroY, { stiffness: 50, damping: 30 });

  /* Intro section parallax */
  const introRef = useRef(null);
  const { scrollYProgress: introScroll } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });
  const introTextY = useTransform(introScroll, [0, 1], [40, -40]);
  const introImgY = useTransform(introScroll, [0, 1], [60, -30]);
  const smoothIntroTextY = useSpring(introTextY, { stiffness: 60, damping: 25 });
  const smoothIntroImgY = useSpring(introImgY, { stiffness: 60, damping: 25 });

  /* Features parallax */
  const featuresRef = useRef(null);
  const { scrollYProgress: featuresScroll } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });
  const featuresY = useTransform(featuresScroll, [0, 1], [30, -30]);
  const smoothFeaturesY = useSpring(featuresY, { stiffness: 60, damping: 25 });

  return (
    <>
      <Navbar />

      {/* ═══ Hero ═══ */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        {/* Background with blur + parallax + scale */}
        <motion.div
          style={{
            y: smoothHeroY,
            scale: heroScale,
            filter: useTransform(heroBlur, (v) => `blur(${v}px)`),
          }}
          className="absolute inset-0 -inset-y-[10%]"
        >
          <Image
            src="/images/storefront.jpg"
            alt="CoffeeIsh storefront on Fish Lane, South Brisbane"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/35 to-noir/10" />

        {/* Hero content — fades on scroll */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full"
        >
          <FadeIn delay={0.3}>
            <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-cream/60 mb-4">
              ESTD 2025 : Fish Lane, South Brisbane
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[0.95] max-w-3xl">
              Pours perfection
              <br />
              <span className="italic text-dore-caramel">in every cup</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
              <p className="text-sm font-sans text-cream/70">
                Open daily, 6:30am to 3pm
              </p>
              <Link
                href="/menu"
                className="text-sm font-sans font-medium tracking-[0.14em] uppercase text-cream border border-cream/30 px-6 py-3 hover:bg-cream hover:text-noir transition-all duration-300"
              >
                View Menu
              </Link>
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* ═══ Intro section ═══ */}
      <section ref={introRef} className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div style={{ y: smoothIntroTextY }}>
              <ScrollReveal>
                <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-6">
                  The story
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-noir leading-[1.1] mb-8">
                  Strong, smooth and
                  <br />
                  <span className="italic">just the way you like it</span>
                </h2>
                <p className="font-sans text-base text-noir/60 leading-relaxed max-w-md">
                  Tucked into the heart of South Brisbane&apos;s buzzing Fish Lane,
                  this little spot delivers the goods. Specialty coffee from local
                  roasters, artisan pastries and food crafted with intention.
                </p>
                <p className="font-sans text-base text-noir/60 leading-relaxed max-w-md mt-4">
                  The first to open on this stretch of Fish Lane. A place where coffee
                  culture meets the energy of one of Brisbane&apos;s most creative precincts.
                </p>
              </ScrollReveal>
            </motion.div>
            <motion.div style={{ y: smoothIntroImgY }}>
              <ScrollScale>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/exterior-life.jpg"
                    alt="CoffeeIsh exterior with customers enjoying the Fish Lane atmosphere"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollScale>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Photo break — parallax ═══ */}
      <ParallaxImage
        src="/images/pistachio-croissant.jpg"
        alt="Pistachio croissant with rose petals"
        className="relative h-[50vh] md:h-[60vh]"
        speed={0.12}
      />

      {/* ═══ Features ═══ */}
      <section ref={featuresRef} className="py-24 md:py-32 bg-noir text-cream overflow-hidden">
        <motion.div style={{ y: smoothFeaturesY }} className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                label: "Coffee",
                labelColor: "text-dusty-rose",
                title: "Roasted by Kasa Coffee",
                text: "Every cup pulled with precision. Flat whites, lattes, espresso, and matcha for when you need something different.",
                delay: 0,
              },
              {
                label: "Food",
                labelColor: "text-dore-caramel",
                title: "Artisan, not pretentious",
                text: "From house focaccia and sausage rolls to lasagna with rocket salad. European craft meets Australian ease.",
                delay: 0.15,
              },
              {
                label: "Place",
                labelColor: "text-sage-green",
                title: "Fish Lane precinct",
                text: "Where food, art and community collide. Street art, sculpture, galleries and the energy of South Brisbane at your doorstep.",
                delay: 0.3,
              },
            ].map((item) => (
              <ScrollReveal key={item.label}>
                <div>
                  <p className={`text-xs font-sans font-medium tracking-[0.28em] uppercase ${item.labelColor} mb-4`}>
                    {item.label}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/50 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ Gallery — Infinite Carousel ═══ */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
          <ScrollReveal>
            <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-2">
              From the counter
            </p>
          </ScrollReveal>
        </div>
        <InfiniteCarousel images={galleryImages} />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28 bg-dusty-rose/10 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-noir leading-[1.1] mb-6">
              Come find us on
              <span className="italic"> Fish Lane</span>
            </h2>
            <p className="font-sans text-base text-noir/50 mb-8">
              51 Fish Lane, South Brisbane QLD 4101
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-sans font-medium tracking-[0.14em] uppercase text-noir border border-noir/30 px-8 py-4 hover:bg-noir hover:text-cream transition-all duration-300"
            >
              Get directions
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
