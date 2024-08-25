import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white text-white py-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center border-b border-gray-700 pb-6 px-100">
          <div className="text-sm">
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a platform dedicated to video game enthusiasts where you can explore, review, and discuss your favorite games.
              <br/>
              Made with ❤️ by DevJammers
            </p>
          </div>
          
           
          
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-400">&copy; 2024 GameSocial. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
