"use client";
import React, { useEffect, useState } from "react";
import { kaudet, Kausi } from "@/data/kalenteri";

type Ryhma = {
  name: string;
  description: string;
  videoEmbedUrl: string;
};

type JohtoryhmaJasen = {
  role: string;
  name: string;
};

type JohtoryhmaVuosi = {
  vuosi: string;
};

type ContactInfo = {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  website: string;
};

const defaultContact: ContactInfo = {
  title: "Yhteystiedot",
  description: "Lempäälän Syokonkan Judo ry on itsenäinen judoseura...",
  email: "syokonkanjudo@gmail.com",
  phone: "040 123 4567",
  address: "Ideaparkinkatu 4, 37570 Lempäälä",
  website: "https://www.syokonkan.fi",
};

const AdminPanel: React.FC = () => {
  const [data, setData] = useState<Kausi[]>(kaudet);
  const [groups, setGroups] = useState<Ryhma[]>([]);
  const [contact, setContact] = useState<ContactInfo>(defaultContact);
  const [leaders, setLeaders] = useState<JohtoryhmaJasen[]>([]);
  const [johtovuosi, setJohtovuosi] = useState<JohtoryhmaVuosi[]>([]);

  useEffect(() => {
    const savedKalenteri = localStorage.getItem("kalenteriData");
    if (savedKalenteri) setData(JSON.parse(savedKalenteri));

    const savedGroups = localStorage.getItem("groupsData");
    if (savedGroups) setGroups(JSON.parse(savedGroups));

    const savedContact = localStorage.getItem("contactInfo");
    if (savedContact) setContact(JSON.parse(savedContact));

    const savedLeaders = localStorage.getItem("leadersData");
    if (savedLeaders) setLeaders(JSON.parse(savedLeaders));

    const savedJohtajavuosi = localStorage.getItem("johtajavuosiData");
    if (savedJohtajavuosi) setJohtovuosi(JSON.parse(savedJohtajavuosi));
  }, []);

  const saveData = () => {
    localStorage.setItem("kalenteriData", JSON.stringify(data));
    localStorage.setItem("groupsData", JSON.stringify(groups));
    localStorage.setItem("contactInfo", JSON.stringify(contact));
    localStorage.setItem("leadersData", JSON.stringify(leaders));
    localStorage.setItem("johtajavuosiData", JSON.stringify(johtovuosi));
    alert("Tiedot tallennettu!");
  };

  const addGroup = () => {
    setGroups([...groups, { name: "Uusi ryhmä", description: "", videoEmbedUrl: "" }]);
  };

  const updateGroup = (index: number, key: keyof Ryhma, value: string) => {
    const newGroups = [...groups];
    newGroups[index][key] = value;
    setGroups(newGroups);
  };

  const deleteGroup = (index: number) => {
    setGroups(groups.filter((_, i) => i !== index));
  };

  const addKausi = () => {
    setData([...data, { nimi: "Uusi kausi", alku: new Date(), loppu: new Date(), treenit: [] }]);
  };

  const addViikonpaiva = (kausiIndex: number) => {
    const newData = [...data];
    newData[kausiIndex].treenit.push({ päivä: "Uusi päivä", ajat: [] });
    setData(newData);
  };

  const addTreeni = (kausiIndex: number, päiväIndex: number) => {
    const newData = [...data];
    newData[kausiIndex].treenit[päiväIndex].ajat.push({ aika: "00:00-01:00", nimi: "Uusi treeni", huom: "" });
    setData(newData);
  };

  const deleteTreeni = (kausiIndex: number, päiväIndex: number, treeniIndex: number) => {
    const newData = [...data];
    newData[kausiIndex].treenit[päiväIndex].ajat = newData[kausiIndex].treenit[päiväIndex].ajat.filter((_, i) => i !== treeniIndex);
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ryhmä hallinta</h2>
        {groups.map((group, gi) => (
          <div key={gi} className="mb-4 border p-4 rounded bg-white shadow space-y-2">
            <input
              className="text-xl font-semibold border-b w-full"
              value={group.name}
              onChange={(e) => updateGroup(gi, "name", e.target.value)}
              placeholder="Ryhmän nimi"
            />
            <textarea
              className="w-full border p-2"
              value={group.description}
              onChange={(e) => updateGroup(gi, "description", e.target.value)}
              placeholder="Kuvaus"
            />
            <input
              className="w-full border p-2"
              value={group.videoEmbedUrl}
              onChange={(e) => updateGroup(gi, "videoEmbedUrl", e.target.value)}
              placeholder="Videolinkki"
            />
            <button
              onClick={() => deleteGroup(gi)}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Poista ryhmä
            </button>
          </div>
        ))}
        <button onClick={addGroup} className="bg-[#17447D] text-white px-4 py-2 rounded">
          Lisää ryhmä
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Kalenterin hallinta</h2>
        {data.map((kausi, ki) => (
          <div key={ki} className="mb-6 border p-4 rounded bg-white shadow space-y-2">
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
                Alku:{" "}
                <input
                  type="date"
                  value={new Date(kausi.alku).toISOString().split("T")[0]}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[ki].alku = new Date(e.target.value);
                    setData(newData);
                  }}
                />
              </label>
              <label>
                Loppu:{" "}
                <input
                  type="date"
                  value={new Date(kausi.loppu).toISOString().split("T")[0]}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[ki].loppu = new Date(e.target.value);
                    setData(newData);
                  }}
                />
              </label>
            </div>

            {kausi.treenit.map((treeni, ti) => (
              <div key={ti} className="pl-4 mb-4 border-l-2 border-gray-300 space-y-2">
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
                      placeholder="Huomautus"
                      value={a.huom || ""}
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

      <section>
        <h2 className="text-2xl font-semibold mb-4">Yhteystiedot</h2>
        <div className="space-y-4 bg-white p-4 rounded shadow">
          <input
            className="w-full border p-2 font-bold text-xl"
            value={contact.title}
            onChange={(e) => setContact({ ...contact, title: e.target.value })}
            placeholder="Otsikko"
          />
          <textarea
            className="w-full border p-2"
            value={contact.description}
            onChange={(e) => setContact({ ...contact, description: e.target.value })}
            placeholder="Kuvaus"
          />
          <input
            className="w-full border p-2"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            placeholder="Sähköposti"
          />
          <input
            className="w-full border p-2"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            placeholder="Puhelin"
          />
          <input
            className="w-full border p-2"
            value={contact.address}
            onChange={(e) => setContact({ ...contact, address: e.target.value })}
            placeholder="Osoite"
          />
          <input
            className="w-full border p-2"
            value={contact.website}
            onChange={(e) => setContact({ ...contact, website: e.target.value })}
            placeholder="Kotisivu"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Johtoryhmän hallinta</h2>
        {johtovuosi.map((vuosiObj, index) => (
          <input
            key={index}
            className="w-full border p-2 mb-2"
            value={vuosiObj.vuosi}
            onChange={(e) => {
              const newJohtovuosi = [...johtovuosi];
              newJohtovuosi[index].vuosi = e.target.value;
              setJohtovuosi(newJohtovuosi);
            }}
            placeholder="Johtoryhmän vuosi"
          />
        ))}
        <button
          onClick={() => setJohtovuosi([...johtovuosi, { vuosi: "" }])}
          className="bg-[#17447D] text-white px-4 py-2 rounded mb-4"
        >
          Lisää vuosi
        </button>
        {leaders.map((leader, index) => (
          <div key={index} className="mb-2 bg-white p-4 rounded shadow space-y-2">
            <input
              className="w-full border p-2"
              value={leader.role}
              onChange={(e) => {
                const newLeaders = [...leaders];
                newLeaders[index].role = e.target.value;
                setLeaders(newLeaders);
              }}
              placeholder="Rooli (esim. Puheenjohtaja)"
            />
            <input
              className="w-full border p-2"
              value={leader.name}
              onChange={(e) => {
                const newLeaders = [...leaders];
                newLeaders[index].name = e.target.value;
                setLeaders(newLeaders);
              }}
              placeholder="Nimi"
            />
            <button
              onClick={() => setLeaders(leaders.filter((_, i) => i !== index))}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Poista
            </button>
          </div>
        ))}
        <button
          onClick={() => setLeaders([...leaders, { role: "", name: "" }])}
          className="bg-[#17447D] text-white px-4 py-2 rounded"
        >
          Lisää henkilö
        </button>
      </section>

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
