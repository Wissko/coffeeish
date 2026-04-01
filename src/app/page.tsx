"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import InfiniteCarousel from "@/components/InfiniteCarousel";

const ScrollStage = dynamic(() => import("@/components/ScrollStage"), { ssr: false });

const stageSlides = [
  {
    image: "/images/exterior-life.jpg",
    label: "The story",
    title: "Strong, smooth and just the way you like it",
    subtitle:
      "Tucked into the heart of South Brisbane\u2019s buzzing Fish Lane. Specialty coffee from local roasters, artisan pastries and food crafted with intention.",
  },
  {
    image: "/images/pistachio-croissant.jpg",
    label: "The craft",
    title: "European technique, Australian soul",
    subtitle:
      "From laminated pastries to house-baked focaccia. Every item crafted in-house, daily.",
  },
  {
    image: "/images/food-cabinet.jpg",
    label: "The place",
    title: "First on Fish Lane",
    subtitle:
      "Where food, art and community collide. Street art, sculpture, galleries and the creative energy of South Brisbane.",
  },
];

const galleryImages = [
  { src: "/images/latte-art.jpg", alt: "Latte art rosetta" },
  { src: "/images/kouign-amann.jpg", alt: "Kouign-amann pastry" },
  { src: "/images/matcha-latte.jpg", alt: "Iced matcha latte" },
  { src: "/images/pastry-display.jpg", alt: "Pastry display case" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══ Hero — blurred wallpaper ═══ */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0 scale-[1.03]">
          <Image
            src="/images/storefront.jpg"
            alt="CoffeeIsh storefront on Fish Lane, South Brisbane"
            fill
            className="object-cover blur-[2px]"
            priority
            quality={95}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-noir/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <FadeIn delay={0.3}>
            <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-cream/50 mb-4">
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
              <p className="text-sm font-sans text-cream/60">
                Open daily, 6:30am to 3pm
              </p>
              <Link
                href="/menu"
                className="text-sm font-sans font-medium tracking-[0.14em] uppercase text-cream border border-cream/20 px-6 py-3 hover:bg-cream hover:text-noir transition-all duration-500"
              >
                View Menu
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SVG Mask Scroll Transitions ═══ */}
      <ScrollStage slides={stageSlides} />

      {/* ═══ Features ═══ */}
      <section className="py-24 md:py-36 bg-noir text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                label: "Coffee",
                labelColor: "text-dusty-rose",
                title: "Roasted by Kasa Coffee",
                text: "Every cup pulled with precision. Flat whites, lattes, espresso, and matcha for when you need something different.",
              },
              {
                label: "Food",
                labelColor: "text-dore-caramel",
                title: "Artisan, not pretentious",
                text: "From house focaccia and sausage rolls to lasagna with rocket salad. European craft meets Australian ease.",
              },
              {
                label: "Place",
                labelColor: "text-sage-green",
                title: "Fish Lane precinct",
                text: "Where food, art and community collide. Street art, sculpture, galleries and the energy of South Brisbane at your doorstep.",
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.15}>
                <div>
                  <p className={`text-xs font-sans font-medium tracking-[0.28em] uppercase ${item.labelColor} mb-4`}>
                    {item.label}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/45 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Gallery — Infinite Carousel ═══ */}
      <section className="py-24 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
          <FadeIn>
            <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose">
              From the counter
            </p>
          </FadeIn>
        </div>
        <InfiniteCarousel images={galleryImages} />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 bg-dusty-rose/8">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-noir leading-[1.1] mb-6">
              Come find us on
              <span className="italic"> Fish Lane</span>
            </h2>
            <p className="font-sans text-base text-noir/45 mb-10">
              51 Fish Lane, South Brisbane QLD 4101
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-sans font-medium tracking-[0.14em] uppercase text-noir border border-noir/20 px-8 py-4 hover:bg-noir hover:text-cream transition-all duration-500"
            >
              Get directions
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
