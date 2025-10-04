"use client";

import { Fredoka } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "Koti", href: "/" },
    { label: "Ryhmät", href: "/ryhmat" },
    { label: "Kalenteri", href: "/kalenteri" },
    { label: "Ohjeita", href: "/ohjeita" },
    { label: "Yhteistiedot", href: "/yhteistiedot" },
  ];

  return (
    <header className="sticky top-0 bg-[#FFF0] h-20 z-50">
      <div className="relative flex items-center justify-end h-full px-6 drop-shadow-xs md:mt-5">
        <div className="flex justify-between items-center invisible md:visible absolute inset-0 mx-auto bg-[#ffffffce] h-20 w-220 rounded-4xl -z-10">
          <img onClick={() => router.push("/")} src="/logo.png"  className="sticky h-12 p-1 sm:h-16 cursor-pointer"alt="Logo"/>
          <nav className="hidden md:flex flex-1 justify-center gap-8 pr-20">
            {links.map((link) => (
              <Link key={link.href}  className={`${fredoka.className} text-xl lg:text-3xl`} href={link.href}>{link.label}</Link>
            ))}
          </nav>
        </div>
        <div id="header" className={`flex justify-between visible md:invisible items-center rounded-4xl bg-[#ffffffcb] w-75 mr-auto px-4 transition-all duration-300 ease-out overflow-hidden ${mobileOpen ? "h-150 bg-white" : "h-20 bg-[#ffffffcb]"}`}>
          <img onClick={() => router.push("/")} src="/logo.png"  className="sticky h-12 p-1 sm:h-16 cursor-pointer"alt="Logo"/>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="relative w-6 h-5 flex flex-col justify-between items-center md:hidden focus:outline-none">
            <span className={`block h-0.5 w-full bg-black rounded transition-transform duration-300 ease-in-out ${mobileOpen ? "rotate-45 translate-y-2.25" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-black rounded transition-opacity duration-300 ease-in-out ${mobileOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block h-0.5 w-full bg-black rounded transition-transform duration-300 ease-in-out ${mobileOpen ? "-rotate-45 -translate-y-2.25" : ""}`}></span>
          </button>
        </div>
      </div>
      <div className={`md:hidden flex flex-col items-center transition-all duration-300 ease-out transform origin-top ${mobileOpen ? "opacity-100 scale-y-100 mt-4" : "opacity-0 scale-y-0 h-0 overflow-hidden"}`}>
        {links.map((link) => (
          <Link key={link.href} onClick={() => setMobileOpen(false)}  className={`${fredoka.className} block text-xl py-2 px-4 w-full text-center text-black hover:text-gray-900`} href={link.href}>{link.label}</Link>
        ))}
      </div>
    </header>
  );
}
