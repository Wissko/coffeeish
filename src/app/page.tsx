"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/storefront.jpg"
          alt="CoffeeIsh storefront on Fish Lane, South Brisbane"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
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
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div>
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
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/exterior-life.jpg"
                  alt="CoffeeIsh exterior with customers enjoying the Fish Lane atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/pistachio-croissant.jpg"
          alt="Pistachio croissant with rose petals"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-noir/10" />
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-noir text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <FadeIn>
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-4">
                  Coffee
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                  Roasted by Kasa Coffee
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  Every cup pulled with precision. Flat whites, lattes, espresso,
                  and matcha for when you need something different.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dore-caramel mb-4">
                  Food
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                  Artisan, not pretentious
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  From house focaccia and sausage rolls to lasagna with rocket salad.
                  European craft meets Australian ease.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div>
                <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-sage-green mb-4">
                  Place
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                  Fish Lane precinct
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  Where food, art and community collide. Street art, sculpture, galleries
                  and the energy of South Brisbane at your doorstep.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-8">
              From the counter
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              { src: "/images/latte-art.jpg", alt: "Latte art rosetta" },
              { src: "/images/kouign-amann.jpg", alt: "Kouign-amann pastry" },
              { src: "/images/matcha-latte.jpg", alt: "Iced matcha latte" },
              { src: "/images/pastry-display.jpg", alt: "Pastry display case" },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i * 0.1}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dusty-rose/10">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
