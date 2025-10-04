import { Fredoka, Open_Sans } from "next/font/google";
import Header from "@/components/Headernologo";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 px-4 py-8 sm:px-6 sm:py-10">
      <div className="w-full sm:w-[300px] bg-white rounded-2xl flex flex-col items-center">
        <h1 className={`${fredoka.className} text-3xl sm:text-4xl text-center text-black pt-8`}>
          Miten aloitan?
        </h1>
        <p className={`${openSans.className} pt-6 text-base sm:text-lg leading-relaxed px-4 sm:px-5 pb-8`}>
          Tule mukaan harjoituksiimme sinulle parhaiten sopivaan harjoitusryhmään.{" "}
          <a href="/kalenteri" className="text-[#144279] underline">
            Katso täältä treenilukkari.
          </a>{" "}
          Kokeiluvarustukseksi käy t-paita ja pitkälahkeiset housut. Ennen treeniä leikkaa
          käsien ja varpaiden kynnet lyhyiksi. Kiinnitä pitkä tukka ponnarilla. Pese ja kuivaa jalat
          pukuhuoneessa. Tule sen jälkeen kamppailusaliin sandaalein. Muutamaksi ekaksi
          treenikerraksi saat lainajudopuvun. Ohjaajamme auttavat sinut alkuun!
        </p>
        <img
          src="Syokonkan_Judopolku.jpg"
          className="w-full max-w-full h-auto object-contain sm:object-cover rounded-lg mb-8"
          alt="Judopolku"
        />
        <h1 className={`${fredoka.className} text-3xl sm:text-4xl text-center text-black pt-6`}>
          Miten jatkan?
        </h1>
        <p className={`${openSans.className} pt-6 text-base sm:text-lg leading-relaxed px-4 sm:px-5 pb-8`}>
          <a href="https://info.suomisport.fi/" className="text-[#144279] underline">
            Rekistöröidy SuomiSporttiin
          </a>{" "}
          ja osta kurssi. Kurssin löydät klikkaamalla "Löydä uusi harrastus" ja
          sitten klikkaamalla "Kokeile Sporttihakua & löydä harrastus!". Sitten hakemalla laji
          "Judo" ja paikkakunta "Lempäälä" löydät kurssit. Tämän jälkeen osta "Lasten
          (alakouluikäisten) judon peruskurssi". <br /> Sitten tarvitset lisenssin. Lisenssin
          pystyt ostamaan{" "}
          <a href="https://www.suomisport.fi/purchase" className="text-[#144279] underline">
            täältä.
          </a>
        </p>
      </div>
    </div>
  );
}
