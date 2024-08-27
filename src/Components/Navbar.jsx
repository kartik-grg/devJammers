import React, { useEffect, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Config/firebase"; // Make sure this path is correct
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/iogo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-5 shadow-md flex items-center justify-between sticky top-0">
      {/* Left side: Logo and navigation links */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="h-12 rounded-[10px]" />
          <span className="text-lg font-semibold">GameVerse</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
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

        {/* User profile */}
        <div className="flex space-x-6">
          {user ? (
            <button onClick={handleLogout} className="text-white hover:text-gray-400">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-400">
              Login
            </Link>
          )}
        </div>
        {user && (
          <div
            className="h-8 w-8 rounded-full border-2 border-gray-800 bg-red-800"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;