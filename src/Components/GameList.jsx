import React from "react";
import GameCard from "./GameCard";
import { Link } from 'react-router-dom';
import { games } from "../GameData";

const GameList = () => {
  return (
    <div className="py-8 px-40 bg-gray-900 min-h-screen">
      <h2 className="text-4xl text-white font-bold mb-2">New & Trending Games</h2>
      <p className="text-gray-400 mb-6">Based on player counts and release date</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <Link to={`/game/${game.id}`} key={game.id} className="block">
          <GameCard
            key={index}
            image={game.imageUrl}
            title={game.title}
            platforms={game.platforms}
            likes={game.likes}
            icon={game.icon}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameList;
