import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import Navbar from './Navbar';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto p-8 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-neon-blue text-center max-w-lg w-full">
          <FaExclamationTriangle className="text-neon-orange text-6xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-neon-blue mb-4">404 - Game Over</h1>
          <p className="text-xl text-gray-400 mb-6">
            Oops! The level you're looking for doesn't exist in this game universe.
          </p>
          <div className="space-y-4">
            <p className="text-gray-300">
              Don't worry, respawn at the home base and try again!
            </p>
            <Link 
              to="/" 
              className="inline-block bg-green-400 text-black font-bold py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
              <FaHome className="mr-2" />
              Return to Home Base
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;