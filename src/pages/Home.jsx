import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa";
import React from "react";
const Home = () => {


  return (
    <div
      style={{ backgroundImage: `url('./images/background.jpg')` }}
      className=" w-full bg-cover bg-center flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-800 p-10 "
    >
      <h1 className="text-5xl mb-2">Hi, I am Mike</h1>
      
      <p className="text-xl mb-10 text-center">
        I am a full-stack web developer. 
        <br />
        I have experience in developing
        websites, web applications, mobile games 
        <br />
        (Android & iOS), and Flutter
        mobile applications. I provide clean code.
      </p> 
      
      <div className="flex space-x-6 text-5xl">
        <Link to="/github" className="text-stone-600 hover:text-zinc-950">
          <FaGithub className="inline-block" />
        </Link>
        <Link to="https://www.google.com/" target="_blank" className="text-stone-600 hover:text-green-600">
          <FaGoogle className="inline-block" />
        </Link>
        <Link to="/linkedin" className="text-stone-600   hover:text-blue-600">
          <FaLinkedin className="inline-block" />
        </Link>
        <Link to="/twitter" className="text-stone-600 hover:text-green-600">
          <FaTwitter className="inline-block" />
        </Link>
      </div>
      <button 
      onClick={() => window.open('/document/cv.pdf', '_blank')}
      class="bg-violet-950 text-violet-400 border mt-4 border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Download My CV
</button>
      <p className="text-sm mt-10">©2023 Reactor Portfolio</p>
    </div>
  );
};
export default Home;






//onClick={() => window.open('/documents/Imprint.pdf', '_blank')} link verme 