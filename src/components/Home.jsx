import React from "react";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center px-6 text-center md:text-left bg-[#222834]">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          Hi, I'm <span className="text-cyan-400">Vishal Meshram</span>
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-200">
          I'm a{" "}
          <span className="mt-2 text-cyan-500 animate-pulse">
            FULL STACK DEVELOPER
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 mt-4 max-w-2xl">
          Passionate about building scalable web applications with modern technologies. I specialize in the MERN stack, creating seamless user experiences.
        </p>
        <div className="mt-6">
          <a
            className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition-all"
            href="https://drive.google.com/file/d/1VcvmvQgQIsvYZlKh57Zg4Lt5LcTPiBqf/view?usp=sharing"
            download
          >
            Download my CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
