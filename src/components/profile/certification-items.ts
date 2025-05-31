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
];
