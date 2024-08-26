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
  {
    image: "https://via.placeholder.com/300x200",
    title: "Path of Exile 2",
    platforms: ["windows", "steam"],
    likes: 276,
    icon: false,
  },
];

const GameList = () => {
  return (
    <div className="py-8 px-40 bg-gray-900 min-h-screen">
      <h2 className="text-4xl text-white font-bold mb-2">New & Trending Games</h2>
      <p className="text-gray-400 mb-6">Based on player counts and release date</p>
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
