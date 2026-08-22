import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Touching Hope | Bringing Hope & Healing to Los Cabos, Mexico",
  description:
    "Touching Hope invests in the lives of women, children, and families in Los Cabos, Mexico through education, vocational training, work opportunities, nutrition, and empowerment — helping them become self-reliant, productive members of their community.",
  icons: {
    icon: "/images/logo-transparent.png",
    shortcut: "/images/logo-transparent.png",
    apple: "/images/logo-transparent.png",
  },
  keywords: [
    "Touching Hope",
    "Los Cabos nonprofit",
    "El Pescadero",
    "Baja California Sur charity",
    "vocational training Mexico",
    "women and children Mexico",
  ],
  openGraph: {
    title: "Touching Hope | Bringing Hope & Healing to Los Cabos, Mexico",
    description:
      "Investing in education, vocational training, work opportunities, nutrition, and empowerment for women and children in Los Cabos, Mexico.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
