import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CoffeeIsh",
  description:
    "The story behind CoffeeIsh: specialty coffee and artisan food on Fish Lane, South Brisbane's creative precinct. ESTD 2025.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
