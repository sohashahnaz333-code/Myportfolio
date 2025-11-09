import React, { useState } from "react";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Tools from "./Components/Tools";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState(""); // default tab

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* full-screen background container */}
      <div className="relative flex flex-col items-center  min-h-screen w-screen bg-white text-white  dark:bg-black dark:text-white font-sans transition-colors duration-300 ">
          {/* Header সবসময় টপে */}
        <div className="flex flex-col justify-center gap-2 pt-2 p-4 iphoneSE:p-5  iphoneXR:p-5 iphone12:p-5 iphone14:p-5 proMax:p-5  md:p-8 ">
          <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          {/* Main content area */}
          {selectedTab === "tools" && <Tools />}
          {selectedTab === "experience" && <Experience />}
          {selectedTab === "projects" && <Project />}


        </div>
        </div>
    </div>
  );
}

export default App;
