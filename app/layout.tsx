import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackgroud";
import Navbar from "@/components/main/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miloud.online"), 
  title: {
    default: "Miloud Bendjedda | Portfolio 💼",
    template: "%s | Miloud Bendjedda",
  },
  description: "Portfolio de Miloud Bendjedda : développeur web Fullstack spécialisé Next.js, React et Node.js.",
  keywords: ["Miloud Bendjedda", "Portfolio", "Next.js", "React", "Fullstack"],
  alternates: {
    canonical: "https://miloud.online",
  },
  openGraph: {
    title: "Miloud Bendjedda | Portfolio 💼",
    description: "Découvre mes projets, compétences et mon parcours en développement web.",
    url: "https://miloud.online",
    siteName: "Miloud Bendjedda Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miloud Bendjedda Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miloud Bendjedda | Portfolio 💼",
    description: "Portfolio de Miloud Bendjedda (Next.js, React, Node.js)",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
