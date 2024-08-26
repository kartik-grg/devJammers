import React, { useState } from 'react';

const categories = [
  { title: 'FIGHTING'},
  { title: 'ROLE-PLAYING'},
  { title: 'SIMULATION'},
  { title: 'ALL SPORTS'},
  { title: 'ADVENTURE'},
  { title: 'STRATEGY'},
  { title: 'PUZZLE'},
  { title: 'SHOOTER'},
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
              // style={{
              //   backgroundImage: {category.image},
              //   backgroundSize: 'cover',    
              //   backgroundPosition: 'center',
              // }}
            >
              <div className="bg-gray-600 bg-opacity-50 w-full h-40 p-2 text-center flex flex-col justify-center align-center ">
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
