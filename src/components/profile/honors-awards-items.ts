export interface HonorsAwardsItem {
  title: string;
  date: Date;
  url: string | null;
}

export const honorsAwardsItems: HonorsAwardsItem[] = [
  {
    title: "MITOU Super Creator",
    date: new Date("2025-05-29"),
    url: "https://www.ipa.go.jp/jinzai/mitou/koubo/career/2024/2024-supercreator-04.html",
  },
];
