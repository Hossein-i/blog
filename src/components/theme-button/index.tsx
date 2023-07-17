import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const ThemeButtonComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    switch (theme) {
      case "system":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("system");
        break;
    }
  };

  return (
    <button className="p-4 bg-slate-200 dark:bg-slate-700 rounded-lg" onClick={handleClick}>
      {(theme === "system" && <ComputerDesktopIcon className="w-5 h-5" />) ||
        (theme === "light" && <SunIcon className="w-5 h-5" />) ||
        (theme === "dark" && <MoonIcon className="w-5 h-5" />)}
    </button>
  );
};

export default ThemeButtonComponent;
