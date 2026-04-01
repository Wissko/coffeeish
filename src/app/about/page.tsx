"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import LineExpand from "@/components/LineExpand";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-end px-6 md:px-10 pt-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose mb-8">
              About
            </p>
          </FadeIn>
          <TextReveal
            as="h1"
            className="font-serif text-[clamp(2.5rem,6vw,6rem)] font-light text-noir leading-[0.9] tracking-[-0.02em]"
            delay={0.2}
          >
            {"Coffee, ish.\nThe name says\nit all."}
          </TextReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl">
                <Image
                  src="/images/blade-sign.jpg"
                  alt="CoffeeIsh blade sign, ESTD 2025"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
            </FadeIn>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dore-caramel mb-6">
                  The philosophy
                </p>
              </FadeIn>
              <TextReveal
                as="h2"
                className="font-serif text-3xl md:text-4xl font-light text-noir leading-[1.15]"
                delay={0.1}
              >
                {"Yes, we take coffee\nseriously. But the -ish is\nwhat makes us, us."}
              </TextReveal>
              <FadeIn delay={0.3}>
                <p className="font-sans text-[15px] text-noir/40 leading-[1.85] max-w-md mt-8">
                  A nod to not taking ourselves too seriously. To the idea that great
                  coffee should feel easy, not earned. We pour with precision and serve
                  with warmth.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <LineExpand className="max-w-7xl mx-auto px-6 md:px-10" />

      {/* Fish Lane */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <FadeIn>
                <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-sage-green mb-6">
                  The place
                </p>
              </FadeIn>
              <TextReveal
                as="h2"
                className="font-serif text-3xl md:text-4xl font-light text-noir leading-[1.15]"
                delay={0.1}
              >
                {"First on\nFish Lane"}
              </TextReveal>
              <FadeIn delay={0.2}>
                <p className="font-sans text-[15px] text-noir/40 leading-[1.85] max-w-md mt-8">
                  CoffeeIsh was the first to open at 51 Fish Lane, part of a new
                  development in what has become one of Brisbane&apos;s most dynamic
                  precincts. Where food, art and community collide.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="font-sans text-[15px] text-noir/40 leading-[1.85] max-w-md mt-4">
                  Right outside our door stands &quot;Raphael the Traveller&quot;, a
                  sculpture by French artist Bruno Catalano. A figure mid-stride, part
                  of him missing. Perfectly imperfect, like us.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.15} className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl">
                <Image
                  src="/images/exterior-life.jpg"
                  alt="Fish Lane precinct, South Brisbane"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-28 bg-noir">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <div className="w-8 h-px bg-dore-caramel mx-auto mb-10" />
          </FadeIn>
          <TextReveal
            as="h2"
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-cream leading-[1.35] italic"
          >
            {"Specialty coffee that's\napproachable. That's the\nwhole point."}
          </TextReveal>
          <FadeIn delay={0.4}>
            <div className="w-8 h-px bg-dore-caramel mx-auto mt-10" />
          </FadeIn>
        </div>
      </section>

      <LineExpand className="max-w-7xl mx-auto px-6 md:px-10" />

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose mb-16">
              What we believe in
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-16">
            {[
              {
                title: "Coffee with intention",
                text: "Every cup is pulled with care. We work with Kasa Coffee because they share our commitment to quality without the gatekeeping.",
              },
              {
                title: "Food crafted, not assembled",
                text: "From laminated pastries to house-baked focaccia. European technique, Australian ingredients, and a fusion sensibility.",
              },
              {
                title: "A space, not just a shop",
                text: "Concrete, wood, warm light. A place designed to slow you down, even if just for the length of a flat white.",
              },
              {
                title: "Part of the lane",
                text: "Fish Lane is a community. We are part of it, not just located on it. The art, the people, the energy shapes what we do.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-noir mb-4">
                    {item.title}
                  </h3>
                  <LineExpand delay={0.1} className="mb-4" />
                  <p className="text-[14px] font-sans text-noir/38 leading-[1.85]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image pair */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-3xl mx-auto">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/food-cabinet.jpg"
                  alt="CoffeeIsh food display"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mt-10 md:mt-16">
                <Image
                  src="/images/storefront.jpg"
                  alt="CoffeeIsh storefront"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
