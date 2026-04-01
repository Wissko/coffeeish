import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CoffeeIsh",
  description:
    "Find CoffeeIsh at 51 Fish Lane, South Brisbane QLD 4101. Open daily 6:30am to 3pm. Get directions and get in touch.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
