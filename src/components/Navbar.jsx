import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-600 border-2xl rounded-b-2xl py-4 px-6 flex justify-between items-center text-blue-50 fixed top-0 w-full z-50">
      <div className="flex items-center space-x-2 cursor-pointer">
        <h1 className="text-4xl font-extrabold text-cyan-200">Vishal Meshram</h1>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-2xl">
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

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-600 text-blue-50 shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-2xl">
            <li onClick={toggleMenu} className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
              <a href="#home">Home</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
              <a href="#about">About</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
              <a href="#skills">Skills</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
              <a href="#projects">Projects</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-white cursor-pointer border-2 border-transparent hover:border-cyan-600 rounded-lg px-3 py-1 transition-all">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
