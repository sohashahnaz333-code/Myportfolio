
import React from 'react';
import { FaReact, FaNode } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiVercel, SiMysql } from "react-icons/si";

function ToolItem({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2  ">
      <div className="text-4xl">{icon}</div>
      <p className="text-sm font-semibold flex  text-gray-900  dark:text-white">{name}</p>
    </div>
  );
}

function Tools() {
  return (
    <div>
      {/* Frontend Section */}
      <h2 className="text-lg  text-gray-900  dark:text-white font-semibold mb-4">Frontend</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
        <ToolItem icon={<FaReact className=" text-sky-400" />} name="React" />
         <ToolItem  icon= {<BiLogoTailwindCss className="text-sky-400  "/>}name="TailwindCSS"  /> 
       
      </div>

      {/* Backend and Infra */}
      <h2 className="text-lg font-semibold   text-gray-900  dark:text-white mb-4">Backend and Infrastructure</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4  md:grid-cols-4 gap-6">
          <ToolItem icon={<FaNode className="text-5xl text-green-500" />} name="NodeJS" />
          <ToolItem  icon= {<SiVercel className="text-yellow-500" />} name= "Vercel"  /> 
           <ToolItem  icon= {<SiMysql className="text-blue-600"/>} name= "MySQL"  /> 
       
        
      </div>
    </div>
  );
}




export default Tools;
