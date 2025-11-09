import React from 'react';
import { FaReact, FaNode } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiVercel, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function ToolItem({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2 max-w-xs mx-auto">
      <div className="text-4xl">{icon}</div>
      <p className="text-sm font-semibold text-gray-900 dark:text-white">{name}</p>
    </div>
  );
}

function Tools() {
  return (
    <div className="px-2 iphoneSE:px-3 iphone12:px-4 iphoneXR:px-5 iphone14proMax:px-6 md:px-8">
      {/* Frontend Section */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frontend</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-10">
        <ToolItem icon={<FaReact className="text-sky-400" />} name="React" />
        <ToolItem icon={<BiLogoTailwindCss className="text-sky-400" />} name="TailwindCSS" />
      </div>

      {/* Backend Section */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Backend & Infrastructure</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        <ToolItem icon={<FaNode className="text-green-500 text-5xl" />} name="NodeJS" />
        <ToolItem icon={<SiVercel className="text-yellow-500" />} name="Vercel" />
        <ToolItem icon={<SiMysql className="text-blue-600" />} name="MySQL" />
        <ToolItem icon={<VscVscode className="text-blue-400" />} name="Vscode" />
      </div>

      {/* Footer */}
      <footer className="w-full pt-20 flex justify-between items-center bg-white dark:bg-black text-gray-800 dark:text-gray-300 transition-colors duration-300">
        {/* Left side */}
        <div className="text-sm">
          Built with React.js
        </div>

        {/* Right side */}
        <div className="text-sm">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Tools;
