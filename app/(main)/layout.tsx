import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


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

import Headernologo from "@/components/Headernologo";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">

        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}


