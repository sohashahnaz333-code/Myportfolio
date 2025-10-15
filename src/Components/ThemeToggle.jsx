import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-0 right-0 text-lg
       text-gray-600 dark:text-gray-300 
       hover:text-yellow-400 dark:hover:text-yellow-300 transition"

    >
      
      {darkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeToggle;
