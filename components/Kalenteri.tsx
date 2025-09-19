'use client'

import React, { useState, useEffect } from "react";
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({ weight: ['600', '700'], subsets: ['latin'] });

const kuukausienNimet = [
  "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu",
  "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
];

const viikonPaivat = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];

const treenipäivät: string[] = ["Ma", "Ke", "Pe"];

const Kalenteri: React.FC = () => {
  const tänään = new Date();
  const [nykyVuosi, setNykyVuosi] = useState(tänään.getFullYear());
  const [nykyKuukausi, setNykyKuukausi] = useState(tänään.getMonth());
  const [valittuPäivä, setValittuPäivä] = useState<Date | null>(null);
  const [päivät, setPäivät] = useState<(number | null)[]>([]);

  useEffect(() => {
    luoKalenteri(nykyVuosi, nykyKuukausi);
  }, [nykyVuosi, nykyKuukausi]);

  const luoKalenteri = (vuosi: number, kuukausi: number) => {
    const kuukaudenEnsimmäinen = new Date(vuosi, kuukausi, 1);
    const päivienLkm = new Date(vuosi, kuukausi + 1, 0).getDate();
    const viikonPäiväEnsimmäiselle = kuukaudenEnsimmäinen.getDay();

    const kalenteripäivät: (number | null)[] = [];

    for (let i = 0; i < viikonPäiväEnsimmäiselle; i++) {
      kalenteripäivät.push(null);
    }

    for (let päivä = 1; päivä <= päivienLkm; päivä++) {
      kalenteripäivät.push(päivä);
    }

    setPäivät(kalenteripäivät);
  };

  const edellinenKuukausi = () => {
    setNykyKuukausi(prev => {
      if (prev === 0) {
        setNykyVuosi(v => v - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const seuraavaKuukausi = () => {
    setNykyKuukausi(prev => {
      if (prev === 11) {
        setNykyVuosi(v => v + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const valitsePaiva = (päivä: number | null) => {
    if (päivä === null) return;
    setValittuPäivä(new Date(nykyVuosi, nykyKuukausi, päivä));
  };

  const onTreenipäivä = (päivä: number | null): boolean => {
    if (päivä === null) return false;
    const date = new Date(nykyVuosi, nykyKuukausi, päivä);
    const viikonPaivaLyhyt = date.toLocaleDateString("fi-FI", { weekday: "short" });
    return treenipäivät.includes(viikonPaivaLyhyt);
  };

  const suljeModal = () => setValittuPäivä(null);

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <div className="flex items-center justify-center pt-8">
        <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <h1 className={`${fredoka.className} text-3xl p-3 text-black text-center pb-5`}>
              Koko kuukausi
            </h1>
            <div className="flex items-center justify-between px-6 py-3 bg-white relative">
              <h2 className={`${fredoka.className} text-2xl text-[#EE0000] absolute left-1/2 transform -translate-x-1/2 pb-3`}>
                {kuukausienNimet[nykyKuukausi]} {nykyVuosi}
              </h2>
            </div>
            <div className="grid grid-cols-7 gap-2 p-4">
              {viikonPaivat.map(päivä => (
                <div key={päivä} className="weekday text-center font-semibold">
                  {päivä}
                </div>
              ))}
              {päivät.map((päivä, index) => {
                if (päivä === null) return <div key={index}></div>;

                const date = new Date(nykyVuosi, nykyKuukausi, päivä);

                const onTänään =
                  tänään.getFullYear() === nykyVuosi &&
                  tänään.getMonth() === nykyKuukausi &&
                  tänään.getDate() === päivä;

                const treeni = onTreenipäivä(päivä);

                let bgClass = "";
                if (onTänään) bgClass = "bg-[#0d243f] text-white";
                else if (treeni) bgClass = "bg-[#31598a] text-white";

                return (
                  <div
                    key={index}
                    className={`text-center py-2 border cursor-pointer ${bgClass}`}
                    onClick={() => valitsePaiva(päivä)}
                  >
                    {päivä}
                  </div>
                );
              })}
            </div>
            {valittuPäivä && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-50" onClick={suljeModal}></div>
                <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg h-50 z-50 overflow-y-auto">
                  <div className="py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                      <p className="text-2xl font-bold">Valittu päivä</p>
                      <button
                        onClick={suljeModal}
                        className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-[17.5px] text-gray-500 font-semibold absolute pb-40 mb-20">
                      {valittuPäivä.toLocaleDateString("fi-FI", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalenteri;
