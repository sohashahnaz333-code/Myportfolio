function Project() {
  return (
    <div className="flex max-w-xl mx-auto  flex-col items-center justify-center shadow  py-5 ">

      <div className=" shadow hover:scale-105 transition-transform duration-200 ">
        <h1 className="text-lg font-semibold flex text-gray-900  dark:text-white">
          Disney+ Clone
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
          A modern Disney+ clone built using React, Tailwind CSS, and Node.js,
          integrated with the TMDB API to fetch real-time movie and TV show data.
          This project showcases dynamic UI design, responsive layouts, and smooth
          API integration
          to deliver a seamless streaming-like experience similar to Disney+.
          <h1 className="text-lg font-bold flex text-gray-900  dark:text-white">

            <a href="https://disney-clone-03-9wwn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition">   Live Demo </a>
          </h1>
          <h1 className="text-lg font-semibold flex text-gray-900  dark:text-white">

            <a href="https://github.com/sohashahnaz333-code/Disney-Clone-03.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition">  GitHub Repository</a>
          </h1>
        </p>
      </div>
        <div className=" shadow hover:scale-105 transition-transform duration-200 ">
          <h1 className="text-lg font-semibold flex text-gray-900  dark:text-white">
            Portfolio App
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
            My Portfolio App is a modern, fully responsive web application built using React.js, Tailwind CSS, and Node.js.
            It showcases my projects, technical skills, and professional experience in a clean, elegant, and user-friendly interface.
            The app features a dynamic dark/light theme toggle, smooth transitions, and component-based architecture for efficient code management.
            With Tailwind CSS, the design remains consistent across all devices, while Node.js handles backend functionality for scalability and performance.

            This portfolio represents not just my technical ability but also my design sense — combining creativity with clean code to deliver a seamless user experience.
            <h1 className="text-lg font-bold flex text-gray-900  dark:text-white">

              <a href="myportfolio-iota-beige.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition">   Live Demo </a>
            </h1>
            <h1 className="text-lg font-semibold flex text-gray-900  dark:text-white">

              <a href="https://github.com/sohashahnaz333-code/Myportfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition">  GitHub Repository</a>
            </h1>
          </p>

        </div>
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

export default Project;

