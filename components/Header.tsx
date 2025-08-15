import { Fredoka, Open_Sans } from 'next/font/google';

const fredoka = Fredoka({ weight: ['600', '700'], subsets: ['latin'] });
const openSans = Open_Sans({ weight: ['400', '600'], subsets: ['latin'] });

export default function Header() {
  return (
    <header className="relative bg-white border-gray-200 py-2.5 h-20 z-100">
        <div className="flex justify-center items-center gap-8 h-full drop-shadow-lg">
            <a className={`${fredoka.className} text-3xl`} href="/">Koti</a>
            <a className={`${fredoka.className} text-3xl`} href="/ryhmat">Ryhmät</a>
            <a className={`${fredoka.className} text-3xl`}href="/kalenteri">Kalenteri</a>
        </div>
        <img
            src="/logo.jpg"
            alt="Logo"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-16"
        />
    </header>
  );
}
