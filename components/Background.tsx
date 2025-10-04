"use client";

import { Fredoka, Open_Sans } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "600"], subsets: ["latin"] });

type BackgroundProps = {
  children?: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div
        className={`${openSans.className} relative w-full flex flex-col px-4 sm:px-6`}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={`${openSans.className} min-h-screen w-full z-0 absolute`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-auto min-h-screen"
      >
        <rect width="100%" height="100%" fill="#f8f9fa" />
        <circle cx="7%" cy="12%" r="8%" fill="#EE0000" />
        <circle cx="93%" cy="16%" r="11%" fill="#1A4280" />
        <circle cx="10%" cy="56%" r="7%" fill="#1A4280" />
        <circle cx="89%" cy="53%" r="8%" fill="#EE0000" />
        <circle cx="22%" cy="23%" r="4%" fill="#1A4280" />
        <circle cx="80%" cy="32%" r="5%" fill="#EE0000" />
        <circle cx="22%" cy="65%" r="5%" fill="#EE0000" />
        <circle cx="78%" cy="62%" r="4%" fill="#1A4280" />
        <circle cx="35%" cy="15%" r="2.5%" fill="#EE0000" />
        <circle cx="65%" cy="20%" r="3%" fill="#1A4280" />
      </svg>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}
