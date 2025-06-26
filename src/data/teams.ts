export interface Team {
  name: string;
  link: string;
}

export interface TeamCategory {
  name: string;
  teams: Team[];
}

export const teamData: TeamCategory[] = [
  {
    name: "A-lag",
    teams: [
      { name: "Dam/utv", link: "https://www.laget.se/HHK-dam-utv" },
      { name: "A-lag Herrar", link: "https://www.laget.se/HarnosandsHFHerr" },
    ],
  },
  {
    name: "Ungdomslag",
    teams: [
      {
        name: "Fritids-Teknikskola",
        link: "https://www.laget.se/HarnosandsHK-Fritids-Teknikskola",
      },
      {
        name: "Flickor 16 (F08/09)",
        link: "https://www.laget.se/HHK-Flickor16",
      },
      { name: "F-10", link: "https://www.laget.se/HHK-F10" },
      { name: "F-11", link: "https://www.laget.se/HHK-F11" },
      { name: "F-12", link: "https://www.laget.se/HHK-F12" },
      { name: "F-13", link: "https://www.laget.se/HHF-F13" },
      { name: "F-14", link: "https://www.laget.se/HarnosandsHK-F-14" },
      { name: "F-15", link: "https://www.laget.se/HarnosandsHK-F-15" },
      { name: "F-16", link: "https://www.laget.se/HarnosandsHK-F-16" },
      { name: "F-17", link: "https://www.laget.se/HarnosandsHK-F-17" },
      { name: "F-18", link: "https://www.laget.se/HarnosandsHF-F-18" },
      {
        name: "Pojkar 16 (P08/09)",
        link: "https://www.laget.se/HarnosandsHFP09",
      },
      { name: "P16 (09/10)", link: "https://www.laget.se/HarnosandsHFP16" },
      { name: "P-11", link: "https://www.laget.se/HHFP11" },
      { name: "P-12", link: "https://www.laget.se/HarnosandsHFP2012" },
      { name: "P-13", link: "https://www.laget.se/HHF2013" },
      { name: "P-14", link: "https://www.laget.se/HarnosandsHK-P-14" },
      { name: "P-15", link: "https://www.laget.se/HarnosandsHFP2015" },
      { name: "P-16", link: "https://www.laget.se/HarnosandsHFP2016" },
      { name: "P-17", link: "https://www.laget.se/HarnosandsHFP2017" },
      { name: "P-18", link: "https://www.laget.se/HarnosandsHF-P-18" },
    ],
  },
];
