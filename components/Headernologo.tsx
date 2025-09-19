"use client";

import { Fredoka, Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [{ label: "Koti", href: "/" }, { label: "Ryhmät", href: "/ryhmat" }, { label: "Kalenteri", href: "/kalenteri" }, { label: "Ohjeita", href: "/ohjeita" }, { label: "Uutiset", href: "/uutiset" }];

  return (
    <header className="sticky top-0 bg-[#F8F9FA] border-b border-gray-200 h-20 z-100">
      <div className="flex items-center justify-between h-full px-6 drop-shadow-lg">
        <nav className="hidden md:flex flex-1 justify-center gap-8">{links.map(link => <Link key={link.href} className={`${fredoka.className} text-xl lg:text-3xl`} href={link.href}>{link.label}</Link>)}</nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded focus:outline-none">{mobileOpen ? <X size={28} /> : <Menu size={28} />}</button>
      </div>
      {mobileOpen && <div className="md:hidden bg-[#F8F9FA] border-t border-gray-200 flex flex-col items-center">{links.map(link => <Link key={link.href} onClick={() => setMobileOpen(false)} className={`${fredoka.className} block text-xl py-2 px-4 w-full text-center border-b border-gray-300`} href={link.href}>{link.label}</Link>)}</div>}
    </header>
  );
}
