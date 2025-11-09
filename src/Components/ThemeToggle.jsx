import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        fixed top-3 right-3 p-1
        
      "

    >
      {darkMode ? (
        <BsSun size={16}/>   // ☀️ smaller icon
      ) : (
        <BsMoon size={16}  />  // 🌙 smaller icon
      )}
    </button>
  );
}

export default ThemeToggle;
