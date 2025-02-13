import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-end p-4">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 [&_svg:not([class*='size-'])]:size-6 cursor-pointer"
        onClick={handleToggleTheme}
      >
        <div className="relative w-6 h-6">
          <Sun
            className={`absolute transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
          />
          <Moon
            className={`absolute transition-opacity duration-500 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
          />
        </div>
      </Button>
    </header>
  );
};
