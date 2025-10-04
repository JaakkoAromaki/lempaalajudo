"use client";

import { useEffect, useState } from "react";
import { Fredoka, Open_Sans } from "next/font/google";
import Header from "@/components/Headernologo";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "600"], subsets: ["latin"] });

type ContactInfo = {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  website: string;
};

type JohtoryhmaJasen = {
  role: string;
  name: string;
};

type JohtoryhmaVuosi = {
  vuosi: string;
};

const defaultContact: ContactInfo = {
  title: "Yhteystiedot",
  description:
    "Lempäälän Syokonkan Judo ry on itsenäinen judoseura, joka perustettiin 1.1.2019. Seuran nimi juontaa juurensa sanoista Syokon (sisukkuus, voittamisen halu) ja kan (joukko), eli olemme Sisukas joukko.",
  email: "syokonkanjudo@gmail.com",
  phone: "040 123 4567",
  address: "Ideaparkinkatu 4, 37570 Lempäälä",
  website: "https://www.syokonkan.fi",
};

export default function Yhteystiedot() {
  const [contact, setContact] = useState<ContactInfo>(defaultContact);
  const [leaders, setLeaders] = useState<JohtoryhmaJasen[]>([]);
  const [johtovuosi, setJohtovuosi] = useState<JohtoryhmaVuosi[]>([]);

  useEffect(() => {
    const savedContact = localStorage.getItem("contactInfo");
    if (savedContact) setContact(JSON.parse(savedContact));

    const savedLeaders = localStorage.getItem("leadersData");
    if (savedLeaders) setLeaders(JSON.parse(savedLeaders));

    const savedJohtovuosi = localStorage.getItem("johtajavuosiData");
    if (savedJohtovuosi) setJohtovuosi(JSON.parse(savedJohtovuosi));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-10 px-4 py-8 sm:px-6 sm:py-10">
        <div className="w-full sm:w-[300px] bg-white rounded-2xl flex flex-col items-center">
          {/* Otsikko */}
          <h1 className={`${fredoka.className} text-3xl sm:text-4xl text-center text-black pt-8`}>
            {contact.title}
          </h1>

          {/* Kuvaus */}
          <p className={`${openSans.className} pt-6 text-base sm:text-lg leading-relaxed px-4 sm:px-5 pb-4`}>
            {contact.description}
          </p>

          {/* Yhteystiedot */}
          <div className={`${openSans.className} text-base sm:text-lg px-4 sm:px-5 pb-8 w-full`}>
            <p className="py-2">
              <strong>Sähköposti:</strong>{" "}
              <a href={`mailto:${contact.email}`} className="text-[#144279] underline">
                {contact.email}
              </a>
            </p>
            <p className="py-2"><strong>Puhelin:</strong> {contact.phone}</p>
            <p className="py-2"><strong>Osoite:</strong> {contact.address}</p>
            <p className="py-2">
              <strong>Kotisivu:</strong>{" "}
              <a href={contact.website} className="text-[#144279] underline">
                {contact.website}
              </a>
            </p>
            <p className="py-2"><strong>Facebook:</strong> Lempäälän Judokat Syokonkan</p>
            <p className="py-2"><strong>Instagram:</strong> @syokonkanjudo</p>
            <p className="py-2"><strong>Y-tunnus:</strong> 3083196-4</p>
            <p className="py-2"><strong>Tilinumero:</strong> FI30 4108 0011 3563 11</p>
            <p className="py-2"><strong>BIC:</strong> ITELFIHH</p>
            <p className="py-2">
              <strong>Laskutus:</strong>{" "}
              <a href="mailto:syokonkan.rahastonhoitaja@gmail.com" className="text-[#144279] underline">
                syokonkan.rahastonhoitaja@gmail.com
              </a>
            </p>
          </div>

          {/* Johtoryhmä */}
          <h2 className={`${fredoka.className} text-2xl sm:text-3xl text-center text-black pt-4`}>
            Johtoryhmä {johtovuosi[0]?.vuosi || "—"}
          </h2>
          <div className={`${openSans.className} text-base sm:text-lg px-4 sm:px-5 pb-8 w-full`}>
            {leaders.length > 0 ? (
              leaders.map((leader, index) => (
                <p key={index} className="py-2">
                  <strong>{leader.role}:</strong> {leader.name}
                </p>
              ))
            ) : (
              <p className="py-2 text-gray-500">Johtoryhmän tiedot eivät ole saatavilla.</p>
            )}
          </div>

          {/* Harjoitustoiminta */}
          <h2 className={`${fredoka.className} text-2xl sm:text-3xl text-center text-black pt-4`}>
            Harjoitustoiminta
          </h2>
          <p className={`${openSans.className} pt-4 text-base sm:text-lg leading-relaxed px-4 sm:px-5 pb-8`}>
            Seurassa harjoittelee noin 100 judokaa kuudessa eri ryhmässä. Harjoitukset pidetään Ideaparkin Bläk Boks -areenan kamppailusalissa. Seuran logossa yhdistyvät Japanin punainen aurinko ja Suomen sininen kehä, ja siinä kuvataan Harai-Goshi heitto.
          </p>
        </div>
      </div>
    </>
  );
}
