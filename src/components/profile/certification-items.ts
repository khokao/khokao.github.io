export interface CertificationItem {
  title: string;
  date: Date;
  url: string | null;
}

export const certificationItems: CertificationItem[] = [
  {
    title: "TOEIC : 970 / 990",
    date: new Date("2021-04-01"),
    url: null,
  },
  {
    title: "MITOU Super Creator",
    date: new Date("2025-05-29"),
    url: "https://www.ipa.go.jp/jinzai/mitou/koubo/career/2024/2024-supercreator-04.html",
  },
];
