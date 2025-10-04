import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import HeaderSwitcher from "@/components/HeaderSwitcher";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lempäälän Syokonkan Judo ry",
  description: "Lempäälän Syokonkan Judon nettisivut.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen bg-white`}
      >
        <HeaderSwitcher />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
