import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Hamburger Menü Butonu */}
      <button
        className="sm:hidden fixed top-4 left-4 p-2 bg-blue-500 text-white rounded"
        onClick={toggleMenu}
      >
        {isOpen ? "Kapat" : "Menü"}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-100  p-4 w-64 ${
          isOpen ? "block" : "hidden"
        } sm:block`}
      >
        <div className="flex items-center justify-center  mb-2 mt-8">
          <img
            className="w-40 h-40 rounded-full border-2 border-white mb-4"
            src="https://placekitten.com/200/200" // Profil fotoğrafınızın URL'sini ekleyin
            alt="Profil"
          />
        </div>
        <nav className="sm:block item-center px-6">
          <ul className="flex flex-col gap-10 w-[180px] h-[420px] bg-indigo-400 rounded-md py-12 text-underline">
            <li className="">
              <Link
                to="/"
                className="text-white text-2xl font-sans   hover:text-black hover:underline 
                active:bg-blue-400  active:text-white    focus:text-black focus:underline focus:font-bold
                "
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>

            <li className="">
              <Link
                to="/skills"
                className="text-white text-2xl  hover:text-black hover:underline
                focus:text-black focus:underline focus:font-bold
                "
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="">
              <Link
                to="/projects"
                className="text-white text-2xl hover:text-black hover:underline
                   focus:text-black focus:underline focus:font-bold
                "
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="">
              <Link
                to="/about"
                className="text-white text-2xl  hover:text-black hover:underline
                   focus:text-black focus:underline focus:font-bold
                "
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="/contact"
                className="text-white text-2xl  hover:text-black hover:underline
                   focus:text-black focus:underline focus:font-bold
                "
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            {/* Diğer sayfa linkleri buraya eklenebilir */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
