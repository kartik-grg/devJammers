import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-2.5 shadow-md flex items-center justify-between">
      {/* Left side: Logo and navigation links */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM10.5 7.5v4.793l4.5 4.5 1.06-1.06-3.56-3.56V7.5h-2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg font-semibold">Dashboard</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Community
          </a>
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

        {/* Notifications */}
        <div className="relative">
          <FaBell className="text-gray-400 hover:text-white cursor-pointer" />
          {/* Notification badge */}
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User profile */}
        <div
          className="h-8 w-8 rounded-full border-2 border-gray-800 bg-red-800"
        />
      </div>
    </nav>
  );
};

export default Navbar;
