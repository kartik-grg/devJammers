import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/iogo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-5 shadow-md flex items-center justify-between sticky top-0">
      {/* Left side: Logo and navigation links */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt=""  className="h-12 rounded-[10px]"/>
          <span className="text-lg font-semibold">GameVerse</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <Link to="/Community" className="text-white hover:text-gray-400">
            Community
          </Link>
        </div>
      </div>

      {/* Right side: Search, notifications, and user profile */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <div className="relative">
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white text-sm rounded-full pl-8 pr-4 py-1.5 focus:outline-none"
          />
        </div>

        {/* Notifications
        <div className="relative">
          <FaBell className="text-gray-400 hover:text-white cursor-pointer" />
          Notification badge
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div> */}

        {/* User profile */}
        <div className="flex space-x-6">
          <Link to="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
        </div>
        <div
          className="h-8 w-8 rounded-full border-2 border-gray-800 bg-red-800"
        />
      </div>
    </nav>
  );
};

export default Navbar;
