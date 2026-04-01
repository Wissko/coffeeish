"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 md:pt-40">
        {/* Header */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
              <FadeIn>
                <div>
                  <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-4">
                    About
                  </p>
                  <h1 className="font-serif text-5xl md:text-7xl font-light text-noir leading-[0.95] mb-8">
                    Coffee, <span className="italic">ish</span>
                  </h1>
                  <p className="font-sans text-base text-noir/60 leading-relaxed max-w-md">
                    The name says it all. Yes, we take coffee seriously. The beans, the
                    roast, the pour. But the &quot;ish&quot; is what makes us, us. A nod
                    to not taking ourselves too seriously. To the idea that great coffee
                    should feel easy, not earned.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="font-serif text-2xl md:text-3xl font-light text-noir/80 leading-snug italic">
                  &quot;Specialty coffee that&apos;s approachable. The -ish
                  desamorces the elitism.&quot;
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Full width image */}
        <section className="relative h-[50vh] md:h-[65vh] overflow-hidden">
          <Image
            src="/images/blade-sign.jpg"
            alt="CoffeeIsh illuminated blade sign, ESTD 2025"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-noir/10" />
        </section>

        {/* Story */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <FadeIn>
                <div>
                  <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dore-caramel mb-6">
                    Fish Lane
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-noir leading-[1.1] mb-8">
                    First on the lane
                  </h2>
                  <p className="font-sans text-base text-noir/60 leading-relaxed mb-4">
                    CoffeeIsh was the first to open at 51 Fish Lane, part of a new
                    development by Stockwell Property Group in what has become one of
                    Brisbane&apos;s most dynamic precincts.
                  </p>
                  <p className="font-sans text-base text-noir/60 leading-relaxed mb-4">
                    Fish Lane is where food, art and community collide. Street murals,
                    galleries, independent restaurants and a constant hum of creative
                    energy. It&apos;s steps from QPAC, South Bank and some of the
                    city&apos;s best galleries.
                  </p>
                  <p className="font-sans text-base text-noir/60 leading-relaxed">
                    Right outside our door stands &quot;Raphael the Traveller&quot;, a
                    sculpture by French artist Bruno Catalano installed in 2024. A figure
                    mid-stride, part of him missing. It captures something about this
                    place: always in motion, never quite complete, perfectly imperfect.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/food-cabinet.jpg"
                    alt="CoffeeIsh food display cabinet with artisan offerings"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 bg-noir text-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeIn>
              <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-6">
                ESTD 2025
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] mb-16">
                What we believe in
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-16">
              {[
                {
                  title: "Coffee with intention",
                  text: "Every cup is pulled with care. We work with Kasa Coffee because they share our commitment to quality without the gatekeeping.",
                },
                {
                  title: "Food crafted, not assembled",
                  text: "From laminated pastries to house-baked focaccia. European technique, Australian ingredients, and a fusion sensibility that keeps things interesting.",
                },
                {
                  title: "A space, not just a shop",
                  text: "Concrete, wood, warm light. A place designed to slow you down, even if just for the length of a flat white.",
                },
                {
                  title: "Part of the lane",
                  text: "Fish Lane is a community. We are part of it, not just located on it. The art, the people, the energy: it shapes what we do.",
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-light mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream/50 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
