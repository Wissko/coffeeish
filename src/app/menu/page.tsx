"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuSection {
  category: string;
  accent: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    category: "Coffee",
    accent: "text-dusty-rose",
    items: [
      { name: "Espresso", price: "$4.50" },
      { name: "Flat White", price: "$5.50" },
      { name: "Latte", price: "$5.50" },
      { name: "Cappuccino", price: "$5.50" },
      { name: "Long Black", price: "$5.00" },
      { name: "Mocha", price: "$6.00" },
      { name: "Iced Latte", price: "$6.50" },
      { name: "Matcha Latte", price: "$6.50" },
    ],
  },
  {
    category: "Food",
    accent: "text-dore-caramel",
    items: [
      { name: "Bagels", description: "Sesame, assorted toppings" },
      {
        name: "Ham & Cheese Focaccia",
        price: "$12.50",
      },
      {
        name: "Ricotta & Spinach Sausage Roll",
        price: "$10.00",
      },
      {
        name: "Pork & Onion Sausage Roll",
        price: "$10.00",
      },
      {
        name: "Beef & Pork Lasagna",
        description: "Served with rocket salad",
      },
      {
        name: "Sourdough Sandwiches",
        description: "Ham & cheese, daily specials",
      },
    ],
  },
  {
    category: "Pastries",
    accent: "text-terracotta",
    items: [
      { name: "Kouign-amann" },
      { name: "Pistachio Croissant", description: "With rose petals" },
      { name: "Spanakopita" },
      { name: "Assorted Viennoiseries", description: "Daily selection" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {/* Header */}
          <FadeIn>
            <p className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-dusty-rose mb-4">
              What we serve
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-noir leading-[0.95] mb-6">
              The Menu
            </h1>
            <p className="font-sans text-base text-noir/50 max-w-lg mb-20">
              Specialty coffee roasted by Kasa Coffee. Food crafted in house, daily.
              Prices may vary with the seasons.
            </p>
          </FadeIn>

          {/* Menu sections */}
          {menuData.map((section, sectionIndex) => (
            <FadeIn key={section.category} delay={sectionIndex * 0.15}>
              <div className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-10">
                  <p
                    className={`text-xs font-sans font-medium tracking-[0.28em] uppercase ${section.accent}`}
                  >
                    {section.category}
                  </p>
                  <div className="flex-1 h-px bg-noir/10" />
                </div>

                <div className="space-y-0">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-baseline justify-between py-4 border-b border-noir/5 last:border-b-0"
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="font-serif text-xl md:text-2xl font-light text-noir group-hover:text-dusty-rose transition-colors duration-300">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="font-sans text-sm text-noir/40 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      {item.price && (
                        <span className="font-sans text-sm font-medium text-noir/60 tracking-wide">
                          {item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
