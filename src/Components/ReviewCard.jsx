import React from "react";

const reviews = [
  {
    id: 1,
    title: "Alien: Romulus",
    year: 2024,
    username: "mariano",
    userProfilePic: "https://example.com/profile-pic.jpg", // Replace with actual image URL
    reviewText: "every time they bullied andy i wanted to punch a hole thru the screen",
    rating: 5,
    comments: 39,
    likes: 6801,
    moviePoster: "https://example.com/alien-image.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    username: "leo",
    userProfilePic: "https://example.com/leo-profile-pic.jpg", // Replace with actual image URL
    reviewText: "a mind-bending masterpiece that redefines cinema.",
    rating: 4,
    comments: 102,
    likes: 8205,
    moviePoster: "https://example.com/inception-image.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    title: "The Matrix",
    year: 1999,
    username: "neo",
    userProfilePic: "https://example.com/neo-profile-pic.jpg", // Replace with actual image URL
    reviewText: "what is real? the matrix keeps you questioning everything.",
    rating: 5,
    comments: 77,
    likes: 9203,
    moviePoster: "https://example.com/matrix-image.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Interstellar",
    year: 2014,
    username: "coop",
    userProfilePic: "https://example.com/coop-profile-pic.jpg", // Replace with actual image URL
    reviewText: "a visually stunning journey through space and time.",
    rating: 4,
    comments: 89,
    likes: 10450,
    moviePoster: "https://example.com/interstellar-image.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    title: "The Dark Knight",
    year: 2008,
    username: "bruce",
    userProfilePic: "https://example.com/bruce-profile-pic.jpg", // Replace with actual image URL
    reviewText: "the greatest superhero movie ever made.",
    rating: 5,
    comments: 134,
    likes: 12503,
    moviePoster: "https://example.com/dark-knight-image.jpg", // Replace with actual image URL
  }
];

function ReviewCard() {
  return (
    <div className="bg-gray-900 text-white p-4 w-full mx-auto px-40">
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">POPULAR REVIEWS THIS WEEK</h2>
      </div>

      {reviews.map((review) => (
        <div key={review.id} className="mb-4">
          <div className="flex">
            <img
              src={review.moviePoster}
              alt={review.title}
              className="w-16 h-24 object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">
                {review.title} <span className="text-gray-400 font-normal">{review.year}</span>
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <img
                  src={review.userProfilePic}
                  alt={review.username}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm">{review.username}</span>
                <div className="flex items-center">
                  <span className="text-green-500">
                    {"★".repeat(review.rating)}
                  </span>
                  <span className="text-xs text-gray-400 ml-2">({review.comments})</span>
                </div>
              </div>
              <p className="text-sm mt-2">
                {review.reviewText}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4 text-gray-400 text-sm">
            <span>&#9829;</span>
            <span className="ml-2">{review.likes.toLocaleString()} likes</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewCard;
