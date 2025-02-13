import { Github, Linkedin, NotebookPen, Twitter } from "lucide-react";

export interface SocialItem {
	tooltip: string;
	url: string;
	// @ts-ignore
	icon: () => JSX.Element;
}

export const socialItems: SocialItem[] = [
	{
		tooltip: "GitHub",
		url: "https://github.com/khokao",
		icon: () => <Github />,
	},
	{
		tooltip: "LinkedIn",
		url: "https://www.linkedin.com/in/khokao/",
		icon: () => <Linkedin />,
	},
	{
		tooltip: "X",
		url: "https://x.com/khokawo",
		icon: () => <Twitter />,
	},
	{
		tooltip: "sizu.me",
		url: "https://sizu.me/khokao",
		icon: () => <NotebookPen />,
	},
];
