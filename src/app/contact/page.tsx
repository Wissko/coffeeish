"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const hours = [
  { day: "Monday", time: "6:30am - 3:00pm" },
  { day: "Tuesday", time: "6:30am - 3:00pm" },
  { day: "Wednesday", time: "6:30am - 3:00pm" },
  { day: "Thursday", time: "6:30am - 3:00pm" },
  { day: "Friday", time: "6:30am - 3:00pm" },
  { day: "Saturday", time: "6:30am - 3:00pm" },
  { day: "Sunday", time: "6:30am - 3:00pm" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <FadeIn>
            <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-4">
              Find us
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-noir leading-[0.95] mb-6">
              Come say hello
            </h1>
            <p className="font-sans text-base text-noir/50 max-w-lg mb-16 md:mb-20">
              We are on Fish Lane, in the heart of South Brisbane&apos;s creative
              precinct. Walk-ins only, no reservations needed.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: info */}
            <div className="space-y-16">
              {/* Address */}
              <FadeIn>
                <div>
                  <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-noir/40 mb-4">
                    Address
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-light text-noir leading-snug">
                    51 Fish Lane
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-light text-noir leading-snug">
                    South Brisbane
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-light text-noir/60 leading-snug">
                    QLD 4101
                  </p>
                </div>
              </FadeIn>

              {/* Hours */}
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-noir/40 mb-6">
                    Opening hours
                  </p>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-baseline justify-between max-w-xs"
                      >
                        <span className="font-sans text-sm text-noir/70">
                          {h.day}
                        </span>
                        <span className="font-sans text-sm text-noir/50">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Contact links */}
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-noir/40 mb-6">
                    Get in touch
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:ish@coffeeish.com.au"
                      className="block font-sans text-base text-noir hover:text-dusty-rose transition-colors"
                    >
                      ish@coffeeish.com.au
                    </a>
                    <a
                      href="https://instagram.com/coffeeish__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-sans text-base text-noir hover:text-dusty-rose transition-colors"
                    >
                      @coffeeish__ on Instagram
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Map */}
            <FadeIn delay={0.15}>
              <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden bg-beige-rose">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1!2d153.0194!3d-27.4755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1d56a0a0a7%3A0x0!2s51+Fish+Ln%2C+South+Brisbane+QLD+4101!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CoffeeIsh location on Fish Lane, South Brisbane"
                  className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.05]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
