"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import InfiniteCarousel from "@/components/InfiniteCarousel";

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

      {/* ═══ Hero — typographic, no fullscreen image ═══ */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn delay={0.2}>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose mb-8">
              Specialty coffee & artisan food
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="font-serif text-[clamp(3rem,8vw,8rem)] font-light text-noir leading-[0.88] tracking-[-0.02em]">
              Pours
              <br />
              perfection
              <br />
              <span className="italic text-dusty-rose">in every cup</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-dore-caramel" />
                <p className="text-[13px] font-sans text-noir/40 tracking-wide">
                  Fish Lane, South Brisbane
                </p>
              </div>
              <p className="text-[13px] font-sans text-noir/40 tracking-wide">
                Open daily, 6:30am to 3pm
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="mt-16">
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 text-[13px] font-sans font-medium tracking-[0.16em] uppercase text-noir group"
              >
                <span className="border-b border-noir/20 pb-1 group-hover:border-dusty-rose group-hover:text-dusty-rose transition-all duration-500">
                  Explore the menu
                </span>
                <span className="text-dore-caramel group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Small contained image + intro ═══ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Image — contained, not fullscreen */}
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

            {/* Text */}
            <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7">
              <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dore-caramel mb-6">
                The story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-noir leading-[1.15] mb-8">
                Tucked into the heart of
                <br className="hidden md:block" />
                South Brisbane&apos;s buzzing
                <br className="hidden md:block" />
                <span className="italic">Fish Lane</span>
              </h2>
              <p className="font-sans text-[15px] text-noir/45 leading-[1.8] max-w-md">
                This little spot delivers the goods. Specialty coffee from local
                roasters, artisan pastries and food crafted with intention.
                The first to open on this stretch of Fish Lane.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-noir/8" />
      </div>

      {/* ═══ Three pillars — editorial grid ═══ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose mb-16">
              What defines us
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
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
                  <span className={`text-[11px] font-sans font-medium tracking-[0.2em] ${item.accent}`}>
                    {item.num}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-noir mt-3 mb-5">
                    {item.title}
                  </h3>
                  <div className="w-6 h-px bg-noir/15 mb-5 group-hover:w-12 transition-all duration-500" />
                  <p className="text-[14px] font-sans text-noir/40 leading-[1.8]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Small image pair ═══ */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/pistachio-croissant.jpg"
                  alt="Pistachio croissant with rose petals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden mt-8">
                <Image
                  src="/images/blade-sign.jpg"
                  alt="CoffeeIsh blade sign, ESTD 2025"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ Quote / Statement ═══ */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <div className="w-8 h-px bg-dore-caramel mx-auto mb-10" />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-noir leading-[1.3] italic">
              &ldquo;The -ish is what makes us, us. A nod to not taking
              ourselves too seriously.&rdquo;
            </blockquote>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-noir/25 mt-10">
              ESTD 2025
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-noir/8" />
      </div>

      {/* ═══ Gallery — Infinite Carousel ═══ */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose">
              From the counter
            </p>
          </FadeIn>
        </div>
        <InfiniteCarousel images={galleryImages} />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28 bg-noir">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dore-caramel mb-8">
              Visit
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-cream leading-[1.1] mb-4">
              Come find us on
              <span className="italic"> Fish Lane</span>
            </h2>
            <p className="font-sans text-[14px] text-cream/35 mb-10">
              51 Fish Lane, South Brisbane QLD 4101
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[13px] font-sans font-medium tracking-[0.16em] uppercase text-cream group"
            >
              <span className="border-b border-cream/20 pb-1 group-hover:border-dore-caramel group-hover:text-dore-caramel transition-all duration-500">
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
