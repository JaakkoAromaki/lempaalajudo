import { Fredoka, Open_Sans } from 'next/font/google';
import Header from '@/components/Headernologo';

const fredoka = Fredoka({ weight: ['600', '700'], subsets: ['latin'] });
const openSans = Open_Sans({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${openSans.className} bg-white text-gray-800`}>
      <h1>ohjeet</h1>
    </main>
  );
}
