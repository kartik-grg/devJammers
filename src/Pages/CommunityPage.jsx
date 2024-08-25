import React from 'react';

const featuredPosts = [
  {
    id: 1,
    title: 'Top 10 Tips for New Players',
    author: 'GamerPro',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Get the best tips and tricks to level up faster.',
    likes: 300,
  },
  {
    id: 2,
    title: 'Why This Game is a Must-Play',
    author: 'EpicGamer',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'A deep dive into what makes this game special.',
    likes: 250,
  },
];

const communityHighlights = [
  {
    id: 1,
    title: 'Community Spotlight: The Best Clips of the Month',
    videoUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Top Strategies Shared by Our Pros',
    videoUrl: 'https://via.placeholder.com/150',
  },
];

const discussions = [
  {
    id: 1,
    title: 'What’s Your Favorite Game of 2024?',
    replies: 45,
  },
  {
    id: 2,
    title: 'Tips for Solo Players',
    replies: 30,
  },
];

const events = [
  {
    id: 1,
    name: 'Weekend Raid Event',
    date: 'Aug 28, 2024',
    description: 'Join us for a weekend-long raid event and win exclusive rewards!',
  },
  {
    id: 2,
    name: 'Community Gaming Night',
    date: 'Sep 1, 2024',
    description: 'Come together for a night of fun, games, and community bonding!',
  },
];

function CommunityPage() {
  return (
    <div className="w-full bg-gray-900 text-white p-4 mx-auto px-4">
      {/* Featured Posts */}
      <section className="mb-8 px-40">
        <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={post.imageUrl} alt={post.title} className="rounded-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-400 mt-2">{post.description}</p>
              <p className="mt-2 text-sm text-gray-500">by {post.author}</p>
              <p className="mt-2 text-sm text-gray-400">👍 {post.likes} Likes</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Highlights */}
      <section className="mb-8 px-40">
        <h2 className="text-2xl font-bold mb-4">Community Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {communityHighlights.map((highlight) => (
            <div key={highlight.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <video className="w-full rounded-md" controls>
                <source src={highlight.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* Active Discussions */}
      <section className="mb-8 px-40">
        <h2 className="text-2xl font-bold mb-4">Active Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">{discussion.title}</h3>
              <p className="text-gray-400 mt-2">{discussion.replies} replies</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Events */}
      <section className='px-40'>
        <h2 className="text-2xl font-bold mb-4">Community Events</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="text-gray-400 mt-2">{event.date}</p>
              <p className="text-gray-400 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CommunityPage;
