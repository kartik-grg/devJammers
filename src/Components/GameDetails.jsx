// GameDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { games } from '../GameData';


const GameDetails = () => {
  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id));

  

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold mb-6">{game.title}</h1>
        <img src={game.imageUrl} alt={game.title} className="w-full h-64 object-fill rounded-lg shadow-lg mb-8" />
        
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the Game</h2>
          <p className="text-gray-300">{game.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Platforms</h3>
            <ul className="list-disc list-inside text-gray-300">
              {game.platforms.map((platform, index) => (
                <li key={index}>{platform}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="list-disc list-inside text-gray-300">
              {game.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex items-center justify-end">
          <span className="mr-2">{game.likes}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;