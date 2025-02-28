import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-600 border-2xl rounded-b-2xl py-4 px-6 flex justify-between items-center text-blue-50 fixed top-0 w-full z-50">
      <div className="flex items-center space-x-2 cursor-pointer">
        
        <h1 className="text-4xl font-extrabold text-cyan-200">Vishal Meshram</h1>
      </div>
      <ul className="flex space-x-6 text-2xl">
        <li className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
