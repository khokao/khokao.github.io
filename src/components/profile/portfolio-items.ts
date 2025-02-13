export interface PortfolioItem {
  title: string;
  date: Date;
  description: string;
  url: string | null;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Synergetica",
    date: new Date("2025-02-16"),
    description: "A modern, end-to-end genetic circuit design desktop app.",
    url: "https://github.com/khokao/synergetica",
  },
];
