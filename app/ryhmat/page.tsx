'use client';
import { useEffect, useState } from 'react';
import { Fredoka, Open_Sans } from 'next/font/google';
import Header from '@/components/Headernologo';

const fredoka = Fredoka({ weight: ['600', '700'], subsets: ['latin'] });
const openSans = Open_Sans({ weight: ['400', '600'], subsets: ['latin'] });

type Group = {
  id: number;
  name: string;
  description: string;
  videoEmbedUrl: string;
};

export default function Home() {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('groupsData');
    if (saved) {
      setGroups(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 px-6 py-10">
      <h1 className={`${fredoka.className} text-4xl text-center text-black`}>
        Ryhmät
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {groups.map((group, index) => (
          <div
            key={group.id || index}
            className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center shadow-md"
          >
            <h2
              className={`${fredoka.className} text-2xl text-black mb-3 text-center`}
            >
              {group.name}
            </h2>
            <p
              className={`${openSans.className} text-base text-gray-700 mb-4 text-center`}
            >
              {group.description}
            </p>
            {group.videoEmbedUrl && (
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
                <iframe
                  src={group.videoEmbedUrl}
                  title={`YouTube video for ${group.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        ))}

        {groups.length === 0 && (
          <p className="text-gray-500 text-center">
            Ei ryhmiä vielä. Lisää ryhmiä admin-paneelista.
          </p>
        )}
      </div>
    </div>
  );
}
