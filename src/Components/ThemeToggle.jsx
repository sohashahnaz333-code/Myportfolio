import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        fixed top-0 right-3
        p-1 transition-all duration-300
        ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}
        hover:scale-105
      `}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <BsSun size={16} />   // ☀️ icon when dark mode
      ) : (
        <BsMoon size={16} />  // 🌙 icon when light mode
      )}
    </button>
  );
}

export default ThemeToggle;
