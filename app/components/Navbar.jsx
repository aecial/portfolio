"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Journey", link: "/journey" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown state
  };

  return (
    <div className="navbar lg:justify-center bg-primary text-white luxurious h-20 drop-shadow-lg">
      <div className="md:hidden navbar-start"></div>
      <div className="md:hidden navbar-center"></div>
      <div className="hidden lg:flex gap-24">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="text-2xl hover:scale-125"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="md:hidden navbar-end">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {dropdownOpen && ( // Render dropdown if dropdownOpen is true
            <ul className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-5 absolute right-1 w-52 p-2 shadow">
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
