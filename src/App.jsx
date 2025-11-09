import React, { useState } from "react";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Tools from "./Components/Tools";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="relative flex flex-col items-center min-h-screen w-screen bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-300">
        <div className="flex flex-col justify-center gap-2 
                        pt-2 p-2 iphoneSE:p-3 iphone12:p-4 iphoneXR:p-5 iphone14proMax:p-6 md:p-8">
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
