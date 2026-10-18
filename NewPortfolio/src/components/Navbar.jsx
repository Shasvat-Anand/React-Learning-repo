import React from "react";

const Nav = () => {
  return (
    <div
      id="navigation"
      className="flex justify-between items-center flex-wrap font-semibold"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Left */}
      <div id="left">
        <h1 className="py-10 px-10 text-white text-xl">Portfolio</h1>
      </div>

      {/* Right */}
      <div
        id="right"
        className="text-white py-3 rounded-2xl text-xl mr-2 flex gap-4 bg-gradient-to-r from-cyan-400 via-emerald-500 to-blue-600"
      >
        <a
          href="#about"
          className="inline-block px-5 hover:text-black hover:scale-110 transform transition duration-400  ease-in-out"
        >
          About
        </a>
        <a
          href="#resume"
          className="inline-block px-5 hover:text-black hover:scale-110 transform transition duration-200 ease-in-out"
        >
          Resume
        </a>
        <a
          href="#portfolio"
          className="inline-block px-5 hover:text-black hover:scale-110 transform transition duration-200 ease-in-out"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="inline-block px-5 hover:text-black hover:scale-110 transform transition duration-200 ease-in-out"
        >
          Contact
        </a>
        <a
          href="#project"
          className="inline-block px-5 hover:text-black hover:scale-110 transform transition duration-200 ease-in-out"
        >
          Project
        </a>
      </div>
    </div>
  );
};

export default Nav;
