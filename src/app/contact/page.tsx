"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import LineExpand from "@/components/LineExpand";

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

      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-end px-6 md:px-10 pt-24 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-dusty-rose mb-8">
              Find us
            </p>
          </FadeIn>
          <TextReveal
            as="h1"
            className="font-serif text-[clamp(2.5rem,6vw,6rem)] font-light text-noir leading-[0.9] tracking-[-0.02em]"
            delay={0.2}
          >
            {"Come say\nhello."}
          </TextReveal>
          <FadeIn delay={0.5}>
            <p className="font-sans text-[15px] text-noir/40 max-w-md mt-8 leading-[1.8]">
              We are on Fish Lane, in the heart of South Brisbane&apos;s creative
              precinct. Walk-ins only, no reservations needed.
            </p>
          </FadeIn>
        </div>
      </section>

      <LineExpand className="max-w-7xl mx-auto px-6 md:px-10" />

      {/* Info + Map */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: info */}
            <div className="space-y-14">
              {/* Address */}
              <FadeIn>
                <div>
                  <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-noir/25 mb-5">
                    Address
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-light text-noir leading-snug">
                    51 Fish Lane
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-light text-noir leading-snug">
                    South Brisbane
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-light text-noir/50 leading-snug">
                    QLD 4101
                  </p>
                </div>
              </FadeIn>

              <LineExpand />

              {/* Hours */}
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-noir/25 mb-6">
                    Opening hours
                  </p>
                  <div className="space-y-3">
                    {hours.map((h, i) => (
                      <FadeIn key={h.day} delay={0.15 + i * 0.04}>
                        <div className="flex items-baseline justify-between max-w-xs">
                          <span className="font-sans text-[14px] text-noir/55">
                            {h.day}
                          </span>
                          <span className="font-sans text-[14px] text-noir/35">
                            {h.time}
                          </span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <LineExpand />

              {/* Contact links */}
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-noir/25 mb-6">
                    Get in touch
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:ish@coffeeish.com.au"
                      className="block font-sans text-[15px] text-noir hover:text-dusty-rose transition-colors duration-300"
                    >
                      ish@coffeeish.com.au
                    </a>
                    <a
                      href="https://instagram.com/coffeeish__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-[15px] text-noir hover:text-dusty-rose transition-colors duration-300"
                    >
                      @coffeeish__ on Instagram
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Map */}
            <FadeIn delay={0.15}>
              <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden rounded-2xl bg-beige-rose">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1!2d153.0194!3d-27.4755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1d56a0a0a7%3A0x0!2s51+Fish+Ln%2C+South+Brisbane+QLD+4101!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CoffeeIsh location on Fish Lane"
                  className="absolute inset-0 w-full h-full grayscale-[40%] contrast-[1.05]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom statement */}
      <section className="py-16 md:py-24 bg-noir">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <TextReveal
              as="h2"
              className="font-serif text-2xl md:text-3xl font-light text-cream leading-[1.3] italic"
            >
              {"Walk in, slow down,\nstay a while."}
            </TextReveal>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
