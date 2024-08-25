import React from "react";
import GameCard from "./GameCard";

const games = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "Vampire: The Masquerade - Bloodlines 2",
    platforms: ["playstation", "xbox"],
    likes: 864,
    icon: true,
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Blade and Sorcery",
    platforms: ["windows"],
    likes: 544,
    icon: false,
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    platforms: ["xbox", "windows"],
    likes: 751,
    icon: true,
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Little Devil Inside",
    platforms: ["playstation", "steam", "mac"],
    likes: 144,
    icon: true,
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Prince of Persia: The Sands of Time",
    platforms: ["xbox", "windows", "steam"],
    likes: 321,
    icon: false,
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Black Myth: Wu Kong",
    platforms: ["playstation", "xbox", "windows"],
    likes: 645,
    icon: true,
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "The Wolf Among Us 2",
    platforms: ["playstation", "windows", "steam"],
    likes: 321,
    icon: true,
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Dark and Darker",
    platforms: ["windows", "steam"],
    likes: 198,
    icon: false,
  },
];

const GameList = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h2 className="text-4xl text-white font-bold mb-2">New & Trending Games</h2>
      <p className="text-gray-400 mb-6">Based on player counts and release date</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">Order by: Relevance</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">Platforms</button>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 5.5A2.5 2.5 0 014.5 3h11A2.5 2.5 0 0118 5.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-9zm2.5 0a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-11z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0015.5 2h-11zM4 3.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-13z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <GameCard
            key={index}
            image={game.image}
            title={game.title}
            platforms={game.platforms}
            likes={game.likes}
            icon={game.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;
