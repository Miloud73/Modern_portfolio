import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackgroud";
import Navbar from "@/components/main/Navbar";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miloud bendjedda's 💼",
  description: "Miloud bendjedda's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
