import React from "react";
import { FaPlaystation, FaXbox, FaSteam, FaWindows, FaApple, FaLinux, FaThumbsUp, FaBullseye } from "react-icons/fa";

const GameCard = ({ image, title, platforms, likes, icon }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          {platforms.includes("playstation") && <FaPlaystation className="text-gray-400" />}
          {platforms.includes("xbox") && <FaXbox className="text-gray-400" />}
          {platforms.includes("steam") && <FaSteam className="text-gray-400" />}
          {platforms.includes("windows") && <FaWindows className="text-gray-400" />}
          {platforms.includes("mac") && <FaApple className="text-gray-400" />}
          {platforms.includes("linux") && <FaLinux className="text-gray-400" />}
        </div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <button className="text-sm bg-gray-700 text-white px-3 py-1 rounded-lg flex items-center">
              <FaThumbsUp className="mr-1" /> {likes}
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <FaBullseye className="text-red-500" />
            {icon && <FaThumbsUp className="text-yellow-400" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
