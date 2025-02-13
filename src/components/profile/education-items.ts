export interface EducationItem {
	title: string;
	from: Date;
	to: Date | null;
	description: string;
}

export const educationItems: EducationItem[] = [
	{
		title: "Waseda Univ.",
		from: new Date("2023-04-01"),
		to: null,
		description: "MEng, Electrical Engineering and Bioscience",
	},
	{
		title: "Waseda Univ.",
		from: new Date("2019-04-01"),
		to: new Date("2023-03-31"),
		description: "BE, Electrical Engineering and Bioscience",
	},
];
