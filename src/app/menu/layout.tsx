import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | CoffeeIsh",
  description:
    "Specialty coffee, artisan pastries, and handcrafted food at CoffeeIsh, Fish Lane, South Brisbane.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
