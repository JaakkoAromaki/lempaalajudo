// data/kalenteri.ts
export type Treeni = {
  päivä: string;
  ajat: { aika: string; nimi: string; huom?: string }[];
};

export type Kausi = {
  nimi: string;
  alku: Date;
  loppu: Date;
  treenit: Treeni[];
};

export const kaudet: Kausi[] = [
  {
    nimi: "Kevätkausi 2025",
    alku: new Date("2025-01-01"),
    loppu: new Date("2025-06-30"),
    treenit: [
      {
        päivä: "Maanantai",
        ajat: [
          { aika: "17:30-18:30", nimi: "Lasten peruskurssi" },
          { aika: "18:30-20:00", nimi: "Juniorit & Kuntojudo" }
        ]
      },
      {
        päivä: "Tiistai",
        ajat: [
          { aika: "17:45-19:15", nimi: "Lempitekniikka yhteistreeni" },
          { aika: "19:15-20:30", nimi: "FitJudo" }
        ]
      }
    ]
  },
  {
    nimi: "Syyskausi 2025",
    alku: new Date("2025-08-01"),
    loppu: new Date("2025-12-31"),
    treenit: [
      {
        päivä: "Torstai",
        ajat: [
          { aika: "17:30-18:30", nimi: "Lasten peruskurssi" },
          { aika: "18:30-20:00", nimi: "Juniorit & Kuntojudo" }
        ]
      }
    ]
  }
];
