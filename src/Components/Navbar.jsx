import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-center sm:justify-start gap-6 text-gray-600 dark:text-gray-300 mb-10 text-sm sm:text-base">
      <button className="hover:text-black dark:hover:text-white">Projects</button>
      <button className="hover:text-black dark:hover:text-white">Experience</button>
      <button className="text-black dark:text-white font-semibold">Tools</button>
    </nav>
  );
}

export default Navbar;
