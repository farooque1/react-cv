import { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 text-white bg-gray-800 dark:bg-white dark:text-black rounded-md"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggleButton;
