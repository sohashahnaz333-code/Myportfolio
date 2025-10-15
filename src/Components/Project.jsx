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

            <a href="https://disney-clone-03.vercel.app/"
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
    </div>
  );
}

export default Project;

