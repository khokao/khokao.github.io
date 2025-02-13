export interface PublicationItem {
	title: string;
	date: Date;
	description: string;
	url: string | null;
}

export const publicationItems: PublicationItem[] = [
	{
		title: "Bioinformatics approaches for unveiling virus-host interactions",
		date: new Date("2023-02-27"),
		description: "Computational and Structural Biotechnology Journal",
		url: "https://doi.org/10.1016/j.csbj.2023.02.044",
	},
];
