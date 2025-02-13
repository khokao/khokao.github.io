export interface ExperienceItem {
	title: string;
	from: Date;
	to: Date | null;
	employmentType: string;
	description: string;
}

export const experienceItems: ExperienceItem[] = [
	{
		title: "Preferred Networks, Inc.",
		from: new Date("2024-07-10"),
		to: new Date("2024-12-25"),
		employmentType: "Internship",
		description: "ML Engineer. Worked on R&D with PFN 3D/4D Scan team.",
	},
	{
		title: "IPA: Information-technology Promotion Agency, Japan",
		from: new Date("2024-06-24"),
		to: null, // '2025-03-07'
		employmentType: "Contract",
		description: "MITOU Creator. Created Synergetica, a desktop app for gene circuit design.",
	},
	{
		title: "Merpay, Inc.",
		from: new Date("2023-09-01"),
		to: new Date("2023-11-30"),
		employmentType: "Internship",
		description: "ML Engineer. Built an anomaly detection model.",
	},
	{
		title: "Sansan, Inc.",
		from: new Date("2023-08-01"),
		to: new Date("2023-08-31"),
		employmentType: "Internship",
		description: "DevOps Engineer. Implemented ML pipelines, CI/CD, and k8s workflows.",
	},
	{
		title: "PKSHA Technology, Inc.",
		from: new Date("2023-01-01"),
		to: new Date("2023-02-28"),
		employmentType: "Internship",
		description: "ML Engineer. Developed a change detection model.",
	},
	{
		title: "M3, Inc.",
		from: new Date("2022-10-01"),
		to: new Date("2022-10-14"),
		employmentType: "Internship",
		description: "ML Engineer. Designed a recommendation model.",
	},
	{
		title: "ACES, Inc.",
		from: new Date("2022-11-01"),
		to: new Date("2023-07-31"),
		employmentType: "Permanent",
		description: "Project Manager / Engineer. Delivered DX solutions for clients and built an in-house ML library.",
	},
	{
		title: "ACES, Inc.",
		from: new Date("2022-05-01"),
		to: new Date("2022-10-31"),
		employmentType: "Internship",
		description: "ML Engineer. Developed DX solutions for clients.",
	},
	{
		title: "LPIXEL, Inc.",
		from: new Date("2022-02-01"),
		to: new Date("2022-08-31"),
		employmentType: "Internship",
		description: "ML Engineer. Created a model to detect chest nodules in X-ray images.",
	},
	{
		title: "Gruff, Inc.",
		from: new Date("2021-11-01"),
		to: new Date("2022-01-31"),
		employmentType: "Internship",
		description: "Data Scientist. Built automated pipelines for tabular data analysis.",
	},
];
