"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import HomeHeader from "@/components/Headernologo";

export default function HeaderSwitcher() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return isHome ? <HomeHeader /> : <Header />;
}