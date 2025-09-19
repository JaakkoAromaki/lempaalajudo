'use client';
import React, { useEffect, useState } from 'react';
import { kaudet, Kausi } from '@/data/kalenteri';

type Group = {
  name: string;
  description: string;
  videoEmbedUrl: string;
};

const AdminPanel: React.FC = () => {
  const [data, setData] = useState<Kausi[]>(kaudet);
  const [groups, setGroups] = useState<Group[]>([]);

  // Load saved data
  useEffect(() => {
    const savedKalenteri = localStorage.getItem('kalenteriData');
    if (savedKalenteri) setData(JSON.parse(savedKalenteri));

    const savedGroups = localStorage.getItem('groupsData');
    if (savedGroups) setGroups(JSON.parse(savedGroups));
  }, []);

  const saveData = () => {
    localStorage.setItem('kalenteriData', JSON.stringify(data));
    localStorage.setItem('groupsData', JSON.stringify(groups));
    alert('Tiedot tallennettu!');
  };

  // --- GROUP FUNCTIONS ---
  const addGroup = () => {
    const uusi: Group = {
      name: 'Uusi ryhmä',
      description: '',
      videoEmbedUrl: '',
    };
    setGroups([...groups, uusi]);
  };

  const updateGroup = (index: number, key: keyof Group, value: string) => {
    const newGroups = [...groups];
    newGroups[index][key] = value;
    setGroups(newGroups);
  };

  const deleteGroup = (index: number) => {
    const newGroups = groups.filter((_, i) => i !== index);
    setGroups(newGroups);
  };

  // --- KAUSI FUNCTIONS ---
  const addKausi = () => {
    const uusi = {
      nimi: 'Uusi kausi',
      alku: new Date(),
      loppu: new Date(),
      treenit: [],
    };
    setData([...data, uusi]);
  };

  const addViikonpaiva = (kausiIndex: number) => {
    const uusi = { päivä: 'Uusi päivä', ajat: [] };
    const newData = [...data];
    newData[kausiIndex].treenit.push(uusi);
    setData(newData);
  };

  const addTreeni = (kausiIndex: number, päiväIndex: number) => {
    const uusi = { aika: '00:00-01:00', nimi: 'Uusi treeni', huom: '' };
    const newData = [...data];
    newData[kausiIndex].treenit[päiväIndex].ajat.push(uusi);
    setData(newData);
  };

  const deleteTreeni = (kausiIndex: number, päiväIndex: number, treeniIndex: number) => {
    const newData = [...data];
    newData[kausiIndex].treenit[päiväIndex].ajat = newData[kausiIndex].treenit[päiväIndex].ajat.filter(
      (_, i) => i !== treeniIndex
    );
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* --- GROUPS SECTION --- */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Ryhmä hallinta</h2>
        {groups.map((group, gi) => (
          <div
            key={gi}
            className="mb-4 border p-4 rounded bg-white shadow space-y-2"
          >
            <input
              className="text-xl font-semibold border-b w-full"
              value={group.name}
              onChange={(e) => updateGroup(gi, 'name', e.target.value)}
              placeholder="Ryhmän nimi"
            />
            <textarea
              className="w-full border p-2"
              value={group.description}
              onChange={(e) => updateGroup(gi, 'description', e.target.value)}
              placeholder="Kuvaus"
            />
            <input
              className="w-full border p-2"
              value={group.videoEmbedUrl}
              onChange={(e) => updateGroup(gi, 'videoEmbedUrl', e.target.value)}
              placeholder="YouTube-URL tai videolinkki"
            />

            <button
              onClick={() => deleteGroup(gi)}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Poista ryhmä
            </button>
          </div>
        ))}

        <button
          onClick={addGroup}
          className="bg-[#17447D] text-white px-4 py-2 rounded"
        >
          Lisää ryhmä
        </button>
      </section>

      {/* --- KAUSI SECTION --- */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Kalenterin hallinta</h2>
        {data.map((kausi, ki) => (
          <div
            key={ki}
            className="mb-6 border p-4 rounded bg-white shadow space-y-2"
          >
            <input
              className="text-xl font-semibold border-b w-full mb-2"
              value={kausi.nimi}
              onChange={(e) => {
                const newData = [...data];
                newData[ki].nimi = e.target.value;
                setData(newData);
              }}
            />

            <div className="flex gap-4 mb-4">
              <label>
                Alku:{' '}
                <input
                  type="date"
                  value={new Date(kausi.alku).toISOString().split('T')[0]}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[ki].alku = new Date(e.target.value);
                    setData(newData);
                  }}
                />
              </label>
              <label>
                Loppu:{' '}
                <input
                  type="date"
                  value={new Date(kausi.loppu).toISOString().split('T')[0]}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[ki].loppu = new Date(e.target.value);
                    setData(newData);
                  }}
                />
              </label>
            </div>

            {kausi.treenit.map((treeni, ti) => (
              <div
                key={ti}
                className="pl-4 mb-4 border-l-2 border-gray-300 space-y-2"
              >
                <input
                  className="font-bold border-b mb-2"
                  value={treeni.päivä}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[ki].treenit[ti].päivä = e.target.value;
                    setData(newData);
                  }}
                />

                {treeni.ajat.map((a, ai) => (
                  <div key={ai} className="flex gap-2 mb-2 items-center">
                    <input
                      className="border px-2 py-1"
                      value={a.aika}
                      onChange={(e) => {
                        const newData = [...data];
                        newData[ki].treenit[ti].ajat[ai].aika = e.target.value;
                        setData(newData);
                      }}
                    />
                    <input
                      className="border px-2 py-1 flex-1"
                      value={a.nimi}
                      onChange={(e) => {
                        const newData = [...data];
                        newData[ki].treenit[ti].ajat[ai].nimi = e.target.value;
                        setData(newData);
                      }}
                    />
                    <input
                      className="border px-2 py-1 flex-1"
                      placeholder="Huomautus (valinnainen)"
                      value={a.huom || ''}
                      onChange={(e) => {
                        const newData = [...data];
                        newData[ki].treenit[ti].ajat[ai].huom = e.target.value;
                        setData(newData);
                      }}
                    />
                    <button
                      onClick={() => deleteTreeni(ki, ti, ai)}
                      className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                    >
                      Poista
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => addTreeni(ki, ti)}
                  className="bg-[#17447D] text-white px-3 py-1 rounded text-sm"
                >
                  Lisää treeni
                </button>
              </div>
            ))}

            <button
              onClick={() => addViikonpaiva(ki)}
              className="bg-[#17447D] text-white px-3 py-1 rounded text-sm mt-2"
            >
              Lisää viikonpäivä
            </button>
          </div>
        ))}

        <button
          onClick={addKausi}
          className="bg-[#17447D] text-white px-4 py-2 rounded mr-4"
        >
          Lisää kausi
        </button>
      </section>

      {/* --- SAVE --- */}
      <button
        onClick={saveData}
        className="bg-[#ED0000] text-white px-4 py-2 rounded"
      >
        Tallenna muutokset
      </button>
    </div>
  );
};

export default AdminPanel;
