import { Fredoka, Open_Sans } from "next/font/google";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] rounded-lg shadow-sm dark:[#F8F9FA]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <a href="/" className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-10 md:h-8" alt="Logo" />
            <span className={`${fredoka.className} text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-black`}>Lempäälän Syokonkan Judo ry</span>
          </a>

          <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline">
                Koti
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li>
              <a href="/yhteistiedot" className="hover:underline">
                Ota yhteyttä
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="/" className="hover:underline">
            Lempäälän Syokonkan Judo ry
          </a>
          . Kaikki Oikeudet Pidätetään.
        </span>
      </div>
    </footer>
  );
}
