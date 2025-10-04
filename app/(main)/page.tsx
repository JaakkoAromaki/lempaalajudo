import { Fredoka, Open_Sans } from "next/font/google";
import Header from "@/components/Headernologo";
import Background from "@/components/Background";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Background />

      <div className="flex flex-col z-90 items-center justify-start pt-5 md:justify-end md:pt-80 min-h-2/5 relative px-4 text-center">
        <h1 className={`${fredoka.className} text-3xl md:text-6xl z-90`}>
          Lempäälän Syokonkan Judo ry
        </h1>
        <p className={`${openSans.className} text-base md:text-3xl mt-4`}>
          Aloita judo hyvässä seurassa!
        </p>
        <img
          src="logo.png"
          alt="Logo"
          className="mt-6 w-24 h-24 md:w-32 md:h-32"
        />
        <a
          href="/ohjeita"
          className={`${fredoka.className} text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg mt-5 text-lg md:text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`}
        >
          Aloita judo!
        </a>
      </div>

      <div className="relative z-10 px-6 md:px-10 py-10 md:py-20 w-full text-center flex flex-col items-center">
        <h1 className={`${fredoka.className} text-2xl md:text-3xl mt-5`}>
          Mitä on judo?
        </h1>

        <p
          className={`${openSans.className} text-base md:text-lg leading-relaxed text-left mt-5 max-w-3xl`}
        >
          Judo on maailman suosituin kamppailulaji. Se on enemmän kuin urheilua
          – laji, jonka tavoitteena ei ole pelkästään suuri hauis, vaan henkinen
          kasvu ja tasapaino. Kaikki tämä tapahtuu turvallisesti.
          <br />
          <br />
          Judon tärkein periaate, harjoituskumppaneiden kunnioittaminen, näkyy
          aina harjoituksissamme. Henkinen kehittyminen ilmenee keskittymisen,
          sisun, itsehillinnän ja paineensietokyvyn kasvuna. Fyysinen kehitys
          näkyy voiman, nopeuden, kestävyyden, tasapainon ja reaktiokyvyn
          parantumisena.
          <br />
          <br />
          Tervetuloa harrastamaan judoa hyvässä seurassa!
        </p>

        <h1 className={`${fredoka.className} text-2xl md:text-3xl mt-10`}>
          Miten aloitan judon?
        </h1>

        <p
          className={`${openSans.className} text-base md:text-lg leading-relaxed text-left mt-5 max-w-3xl`}
        >
          Tule mukaan harjoituksiimme sinulle parhaiten sopivaan
          harjoitusryhmään.
          <br />
          <br />
          Kokeiluvarustukseksi käy t-paita ja pitkälahkeiset housut. Ennen
          treeniä leikkaa käsien ja varpaiden kynnet lyhyiksi. Kiinnitä pitkä
          tukka ponnarilla. Pese ja kuivaa jalat pukuhuoneessa. Tule sen jälkeen
          kamppailusaliin sandaalein.
          <br />
          <br />
          Muutamaksi ekaksi treenikerraksi saat lainajudopuvun.
          <br />
          <br />
          Ohjaajamme auttavat sinut alkuun!
        </p>

        <a
          href="/ohjeita"
          className={`${fredoka.className} text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg mt-6 text-lg md:text-2xl px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`}
        >
          Aloita judo!
        </a>
      </div>
    </>
  );
}
