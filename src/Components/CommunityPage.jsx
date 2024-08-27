import React from 'react';

const featuredContent = [
  {
    id: 1,
    title: 'New Update: Patch 2.0 Overview',
    imageUrl: 'https://i.ytimg.com/vi/G89k6Zy1rT4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZyleOwybRWukt_mqX7JAVJf3WuA',
    description: 'Discover all the new features in the latest update.',
  },
  {
    id: 2,
    title: 'Character Spotlight: The Mighty Hero',
    imageUrl: 'https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FCosmik_Battle_game_image_1_3de611ffdd%2FCosmik_Battle_game_image_1_3de611ffdd.png&w=3840&q=75',
    description: 'Learn how to maximize your gameplay with this powerful character.',
  },
];

const discussions = [
  {
    id: 1,
    title: 'Best strategies for solo missions',
    replies: 120,
    author: 'User123',
  },
  {
    id: 2,
    title: 'Share your favorite in-game moments',
    replies: 90,
    author: 'GamerX',
  },
];

const events = [
  {
    id: 1,
    title: 'Weekend Event: Double XP',
    date: 'Aug 26, 2024',
    description: 'Participate in this event to earn double experience points.',
  },
  {
    id: 2,
    title: 'Community Livestream',
    date: 'Aug 30, 2024',
    description: 'Join us live for gameplay and Q&A with the developers.',
  },
];

function CommunityPage() {
  return (
    <div className="bg-gray-900 text-white p-8">
      {/* Featured Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-gray-800 p-6 rounded-lg">
              <img
                src={content.imageUrl}
                alt={content.title}
                className="w-full h-48 object-fill rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{content.title}</h3>
              <p className="text-gray-400 mt-2">{content.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discussions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Active Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-gray-800 p-6 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold">{discussion.title}</h3>
                <p className="text-gray-400 mt-1">
                  {discussion.replies} replies by {discussion.author}
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                Join
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Community Events */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-400 mt-2">{event.date}</p>
              <p className="text-gray-400 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User-Generated Content */}
      <section>
        <h2 className="text-3xl font-bold mb-4">User-Generated Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4FR7T52IkN57IA-eVdj_nQ2uRLRzOwme_Q&s"
              alt="User Post"
              className="w-full h-48 object-fill rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">User123's Amazing Screenshot</h3>
            <p className="text-gray-400 mt-2">Check out this awesome in-game shot!</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpRtqmywIL7m7OKyd5kxjkrVKKnWOVmgk8w&s"
              alt="User Post"
              className="w-full h-48 object-fill rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">GamerX's Latest Video</h3>
            <p className="text-gray-400 mt-2">Watch this epic gameplay video.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqO9PT2XlxlfC4jT-_vIjv64wAD3W6qs-eDg&s"
              alt="User Post"
              className="w-full h-48 object-fill rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">Epic Moments Compilation</h3>
            <p className="text-gray-400 mt-2">A collection of the best in-game moments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommunityPage;

