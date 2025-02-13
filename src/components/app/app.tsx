import { Header } from "@/components/header/header";
import { Profile } from "@/components/profile/profile";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const App = () => {
	return (
		<ThemeProvider>
			<div className="flex justify-center bg-white dark:bg-black text-neutral-900 dark:text-neutral-50 transition-colors duration-500">
				<div className="w-full max-w-3xl">
					<Header />
					<Profile />
				</div>
			</div>
		</ThemeProvider>
	);
};
