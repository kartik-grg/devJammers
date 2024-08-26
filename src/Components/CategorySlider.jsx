import React, { useState } from 'react';

const categories = [
  { title: 'FIGHTING', image: 'url(/path-to-fighting-image.jpg)' },
  { title: 'ROLE-PLAYING', image: 'url(/path-to-role-playing-image.jpg)' },
  { title: 'SIMULATION', image: 'url(/path-to-simulation-image.jpg)' },
  { title: 'ALL SPORTS', image: 'url(/path-to-sports-image.jpg)' },
  { title: 'ADVENTURE', image: 'url(/path-to-adventure-image.jpg)' },
  { title: 'STRATEGY', image: 'url(/path-to-strategy-image.jpg)' },
  { title: 'PUZZLE', image: 'url(/path-to-puzzle-image.jpg)' },
  { title: 'SHOOTER', image: 'url(/path-to-shooter-image.jpg)' },
  // Add more categories as needed
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCategories = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleCategories < categories.length ? prevIndex + visibleCategories : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - visibleCategories >= 0 ? prevIndex - visibleCategories : categories.length - visibleCategories
    );
  };

  return (
    <div className="relative w-full mx-auto py-8 px-40 bg-gray-900">
      <h2 className="text-white text-lg font-bold mb-4">BROWSE BY CATEGORY</h2>
      <div className="flex items-center">
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="text-white p-2 bg-gray-600 bg-opacity-50 hover:bg-opacity-75 rounded-full mr-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {/* Categories */}
        <div className="flex space-x-4 overflow-hidden">
          {categories.slice(currentIndex, currentIndex + visibleCategories).map((category, index) => (
            <div
              key={index}
              className="w-64 h-36 rounded-lg flex items-end justify-center text-white font-semibold text-lg"
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',    
                backgroundPosition: 'center',
              }}
            >
              <div className="bg-gray-600 bg-opacity-50 w-full p-2 text-center">
                {category.title}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="text-white p-2 bg-gray-600 bg-opacity-50 hover:bg-opacity-75 rounded-full ml-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(categories.length / visibleCategories) }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${currentIndex === i * visibleCategories ? 'bg-white' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
