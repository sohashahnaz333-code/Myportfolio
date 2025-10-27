import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { PiCalendarDots } from "react-icons/pi";
import ThemeToggle from "./ThemeToggle";
import { FaGraduationCap } from "react-icons/fa6";


function Header({ selectedTab, setSelectedTab, darkMode, setDarkMode }) {
  const tabs = [
    { name: "projects", label: "Projects" },
    { name: "experience", label: "Experience" },
    { name: "tools", label: "Tools" },
  ];

  return (
    <header className="max-w-xl sm:max-w-md md:max-w-xl   mx-auto backdrop-blur-md py-4 sm:py-4 ">
      {/* Title */}
      <h1 className="text-xl font-semibold  mt-2 sm:mt-2 text-black dark:text-white">
        Hey, I'm Shahnaz
      </h1>

      {/* Subtitle */}
      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
        Frontend Developer from Bangladesh. Contact me below. Currently building modern React apps.
      </p>
      <div className="flex flex-col justify-center" >
        <h1 className="text-xl font-semibold  mt-2 text-black dark:text-white">
          <a href="#"><FaGraduationCap /></a>  Education
        </h1>
      </div>


      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Graduated from United International University (UIU)</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1"> with a B.Sc. in Computer Science & Engineering (CSE)</p>


      {/* Social Links */}
      <div className="flex  gap-5 mt-4 text-gray-300 text-xl">
        <a href="https://calendar.google.com" target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"><PiCalendarDots /></a>
        <a href="https://github.com/sohashahnaz333-code"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"> <FaGithub /> </a>

        <a href="https://www.linkedin.com/in/shahnaz-fatima-883967241/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"><IoLogoLinkedin /></a>

        <a href="mailto:sohashahnaz333@gmail.com"
          className="hover:text-pink-400 transition">
          <MdMail /></a>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex  px-0 py-0 gap-2 mt-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setSelectedTab(tab.name)}
            className={`px-1 py-1 rounded-lg transition-all duration-200 ${selectedTab === tab.name
              ? "bg-white text-pink-500 font-semibold shadow-md"
              : "bg-pink-500 hover:shadow text-black dark:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Right side: Small Theme Toggle at top-right */}
      <div className="absolute top-0 right-0">
        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          className="text-lg" // smaller icon
        />
      </div>


    </header>
  );
}

export default Header;
