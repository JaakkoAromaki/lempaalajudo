import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });

export default function Lukkari() {
  const kaudet = { name: "John", age: 30, car: null };

  console.log(kaudet);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden min-h-[50vh] min-w-[200px] lg:w-7/10 md:w-9/10 sm:w-10/10 mx-auto p-4 mt-10">
      <h1 className={`${fredoka.className} text-2xl md:text-3xl mt-4`}>
        Syyskauden kalenteri
      </h1>
      <table className="w-full mt-4 border border-gray-200">
        <thead>
          <tr>
            <th className="text-red-500 border px-4 py-2">Maanantai</th>
            <th className="text-red-500 border px-4 py-2">Tiistai</th>
            <th className="text-red-500 border px-4 py-2">Keskiviikko</th>
            <th className="text-red-500 border px-4 py-2">Torstai</th>
            <th className="text-red-500 border px-4 py-2">Perjantai</th>
            <th className="text-red-500 border px-4 py-2">Lauantai</th>
            <th className="text-red-500 border px-4 py-2">Sunnuntai</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Data 1</td>
            <td className="border px-4 py-2">Data 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
