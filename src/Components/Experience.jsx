import React from "react";

function Experience() {
  return (
    
    <div className="flex max-w-xl mx-auto  flex-col items-center justify-center shadow xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl py-5">
    
      <div className=" shadow hover:scale-105 transition-transform duration-200 iphoneSE:px-2  iphoneXR:px-2 iphone12:px-2 iphone14:px-2 proMax:px-2  md:px-1 lg:px-11">
      
        <h1 className="text-lg font-semibold flex text-gray-900  dark:text-white">
          React Frontend Developer (Personal Projects)
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Sep 2025  – Present | Dhaka, Bangladesh
        </p>

        <p className="text-gray-700 md:text-sm dark:text-gray-300 xs:text-sm  mt-1">
          I’m currently working on several personal projects focused on
           building responsive and modern web applications with React.js, 
           Tailwind CSS, and Node.js. My projects reflect my growing expertise in 
           component-based design, API integration, and user-centered development.
          Through self-driven learning and experimentation, I’ve developed a strong
           understanding of how to structure clean, maintainable frontend code and create smooth, 
           interactive user experiences.I’m passionate about turning ideas into functional interfaces,
            continuously exploring new technologies, and improving my full-stack development skills 
             every day.
        </p>
      </div>

      <div className=" shadow hover:scale-105 transition-transform duration-200 xs:px-2 sm:px-2 md:px-1 lg:px-11 ">
        <h1 className="text-base xs:text-lg md:text-xl  font-semibold flex text-gray-900  dark:text-white">
          Executive
        </h1>
        <p className="text-gray-700 dark:text-gray-300 md:text-sm xs:text-sm  mt-1">
          Scholars Zone · Full-time
          Aug 2023 – dec 2024 · 1 yr 5 mos
          Assisted with daily administrative tasks and coordination across
          departments.
          Managed client inquiries and contributed to business development.
        </p>
      </div>
      <div className=" shadow hover:scale-105 transition-transform duration-200 iphoneSE:px-2  iphoneXR:px-2 iphone12:px-2 iphone14:px-2 proMax:px-2  md:px-1 lg:px-11">
        <h1 className="text-base xs:text-lg md:text-xl   font-semibold flex text-gray-900  dark:text-white">
          Counselor
        </h1>
        <p className="text-gray-700 dark:text-gray-300 xs:text-sm  mt-1">
          Bestway International · Full-time
          Jan 2023 – jul 2023 · 7 mos
          •	Offered career counseling and educational guidance.
          •	Maintained student records and supported digital communication.
        </p>
      </div>
      <div className=" shadow hover:scale-105 transition-transform duration-200 xs:px-2  iphone14:px-2 md:px-1 lg:px-11">
        <h1 className=" text-base xs:text-lg md:text-xl  font-semibold flex text-gray-900  dark:text-white">
          Graphic Designer / UI-UX Designer
        </h1>
        <p className="text-gray-700 dark:text-gray-300 md:text-sm xs:text-sm  mt-1">
          Freelancing Team · Full-time
          Jan 2018 – Sep 2022 · 4 yrs 9 mos
          •	Designed creative assets and UI layouts for multiple client projects.
          •	Collaborated with developers to ensure responsive and user-friendly designs.
          •	Managed client communication and delivered high-quality visual solutions
        </p>
         <footer className="w-full pt-20  bg-white dark:bg-black dark:text-gray-300 text-gray-800 flex justify-between items-center mt-auto">
            {/* Left side: your name */}
            <div className="text-sm">
             Built with React.js
            </div>

            {/* Right side: copyright or message */}
            <div className="text-sm">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </footer>
      </div>
    </div>
  );
}

export default Experience;
