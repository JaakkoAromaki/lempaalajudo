'use client';
import React, { useEffect, useState } from "react";
import { Fredoka, Open_Sans } from 'next/font/google';
import { Kausi, kaudet as defaultKaudet } from "@/data/kalenteri"; 
import Kalenteri from "@/components/Kalenteri";

const fredoka = Fredoka({ weight: ['600', '700'], subsets: ['latin'] });
const openSans = Open_Sans({ weight: ['400', '600'], subsets: ['latin'] });

const KalenteriPage: React.FC = () => {
  const [data, setData] = useState<Kausi[]>(defaultKaudet);
  const [kausi, setKausi] = useState<Kausi | null>(null);

  useEffect(() => {
    // Ladataan tallennetut tiedot localStoragesta jos niitä on
    const saved = localStorage.getItem("kalenteriData");
    if (saved) {
      try {
        const parsed: Kausi[] = JSON.parse(saved);
        setData(parsed);
      } catch (e) {
        console.error("Virhe ladattaessa kalenteridataa:", e);
      }
    }
  }, []);

  useEffect(() => {
    // Valitaan nykyinen kausi
    const now = new Date();
    const current = data.find(k => now >= new Date(k.alku) && now <= new Date(k.loppu)) ?? data[0];
    setKausi(current);
  }, [data]);

  if (!kausi) return <p>Ladataan kalenteria...</p>;

  return (
    <div>
      <div className="grid grid-cols-10 gap-4 px-10 py-20 w-full text-center">
        <h1 className={`${fredoka.className} text-4xl md:text-3xl col-span-10 text-center pb-10`}>
          Harjoituskalenteri {kausi.nimi}
        </h1>

        {kausi.treenit.map((treeni, idx) => (
          <React.Fragment key={idx}>
            <h1
              className={`${fredoka.className} text-4xl text-[#EE0000] md:text-3xl col-span-10 text-center ${idx > 0 ? "pt-5" : ""}`}
            >
              {treeni.päivä}
            </h1>
            <p className={`${openSans.className} col-span-10 text-base md:text-lg leading-relaxed pl-5`}>
              {treeni.ajat.map((a, i) => (
                <span key={i}>
                  <b>{a.aika}</b> {a.nimi} <br />
                  {a.huom && <span className="text-red-700">{a.huom}</span>}
                </span>
              ))}
            </p>
          </React.Fragment>
        ))}
      </div>
      <Kalenteri />
    </div>
  );
};

export default KalenteriPage;
