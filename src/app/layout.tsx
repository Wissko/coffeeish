import type { Metadata } from "next";
import { Cormorant, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CoffeeIsh | Specialty Coffee & Artisan Food | Fish Lane, South Brisbane",
  description:
    "Tucked into the heart of South Brisbane's buzzing Fish Lane, CoffeeIsh pours perfection in every cup. Specialty coffee, artisan pastries and food. Open daily 6:30am to 3pm.",
  keywords: [
    "coffee shop",
    "specialty coffee",
    "Fish Lane",
    "South Brisbane",
    "artisan food",
    "pastries",
  ],
  openGraph: {
    title: "CoffeeIsh | Fish Lane, South Brisbane",
    description: "Specialty coffee & artisan food. Pours perfection in every cup.",
    type: "website",
    locale: "en_AU",
    url: "https://coffeeish.vercel.app",
    siteName: "CoffeeIsh",
    images: [
      {
        url: "/images/storefront.jpg",
        width: 1200,
        height: 630,
        alt: "CoffeeIsh storefront on Fish Lane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoffeeIsh | Fish Lane, South Brisbane",
    description: "Specialty coffee & artisan food. Pours perfection in every cup.",
    images: ["/images/storefront.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-cream text-noir antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
