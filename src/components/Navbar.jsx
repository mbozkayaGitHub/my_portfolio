import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
          {isOpen ? 'Kapat' : 'Menü'}
        </button>
  
        {/* Sidebar */}
        <div className={`bg-blue-500  p-4 w-64 ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <div className="flex items-center justify-center mb-20 mt-12">
            <img
              className="w-36 h-36 rounded-full border-2 border-white"
              src="https://placekitten.com/200/200"  // Profil fotoğrafınızın URL'sini ekleyin
              alt="Profil"
            />
          </div>
          <nav className="sm:block item-center" >
            <ul className='flex flex-col gap-10 bg-color bg-red-700'>
              <li className="">
                <Link to="/" className="text-white text-4xl  hover:text-lightblue-200 hover:underline" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
        
              <li className="">
                <Link to="/skills" className="text-white text-4xl hover:text-gray-200" onClick={toggleMenu}>
                  Skills
                </Link>
              </li>
              <li className="">
                <Link to="/projects" className="text-white text-4xl hover:text-gray-200" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li className="">
                <Link to="/about" className="text-white text-4xl hover:text-gray-200" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="">
                <Link to="/contact" className="text-white text-4xl hover:text-gray-200" onClick={toggleMenu}>
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
    

    export default Navbar