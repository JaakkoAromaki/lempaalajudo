import { Fredoka, Open_Sans } from 'next/font/google';
import Header from '@/components/Headernologo';
import Background from '@/components/Background';
import ScrollIndicator from '@/components/ScrollIndicator';

const fredoka = Fredoka({ weight: ['600', '700'], subsets: ['latin'] });
const openSans = Open_Sans({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Background />
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4 text-center">
        <h1 className={`${fredoka.className} text-4xl md:text-6xl`}>
          Lempäälän Syokonkan Judo ry
        </h1>
        <p className={`${openSans.className} text-2xl md:text-3xl mt-4`}>
          Aloita judo hyvässä seurassa!
        </p>
        <img src="logo.png" alt="Logo" className="mt-6 w-32 h-32" />
        <a
          href="/ohjeita"
          className={`${fredoka.className} text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg mt-5 text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`}
        >
          Aloita judo!
        </a>
        <ScrollIndicator />
      </div>

      <div className="grid grid-cols-10 grid-rows-3 gap-4 px-10 py-20 w-full text-center">
        <h1
          className={`${fredoka.className} text-4xl md:text-3xl col-start-2 col-end-10 row-start-1 pt-5`}
        >
          Mitä on judo?
        </h1>

        <p
          className={`${openSans.className} col-start-2 col-end-10 row-start-2 row-span-2 text-base md:text-lg leading-relaxed pl-5`}
        >
          Judo on maailman suosituin kamppailulaji. Se on enemmän kuin urheilua – laji, jonka tavoitteena ei ole pelkästään suuri hauis, vaan henkinen kasvu ja tasapaino. Kaikki tämä tapahtuu turvallisesti.

          Judon tärkein periaate, harjoituskumppaneiden kunnioittaminen, näkyy aina harjoituksissamme. Henkinen kehittyminen ilmenee keskittymisen, sisun, itsehillinnän ja paineensietokyvyn kasvuna. Fyysinen kehitys näkyy voiman, nopeuden, kestävyyden, tasapainon ja reaktiokyvyn parantumisena.

          Tervetuloa harrastamaan judoa hyvässä seurassa!
        </p>
        <h1
          className={`${fredoka.className} text-4xl md:text-3xl col-start-2 col-end-10 row-start-4 pt-12.5`}
        >
          Miten aloitan judon?
        </h1>
        <p
          className={`${openSans.className} col-start-2 col-end-10 row-start-4 pt-30 row-span-2 text-base md:text-lg leading-relaxed pl-5`}
        >
          Tule mukaan harjoituksiimme sinulle parhaiten sopivaan harjoitusryhmään.

          Kokeiluvarustukseksi käy t-paita ja pitkälahkeiset housut. Ennen treeniä leikkaa käsien ja varpaiden kynnet lyhyiksi. Kiinnitä pitkä tukka ponnarilla. Pese ja kuivaa jalat pukuhuoneessa. Tule sen jälkeen kamppailusaliin sandaalein.

          Muutamaksi ekaksi treenikerraksi saat lainajudopuvun.

          Ohjaajamme auttavat sinut alkuun!
        </p>
        <a
          href="/ohjeita"
          className={`${fredoka.className} col-start-5 mr-15 ml-15 col-end-7 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg mt-5 text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`}
        >
          Aloita judo!
        </a>
      </div>
    </>
  );
}
