import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import {
  FaTrophy, FaGamepad, FaUserFriends, FaComments,
  FaStar, FaPlus, FaCalendarAlt, FaBolt, FaFireAlt,
  FaGem, FaCrown
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const UserDashboard = ({ user }) => {
  const [postContent, setPostContent] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [xpProgress, setXpProgress] = useState(0);

  useEffect(() => {
    if (user?.xp) {
      const timer = setTimeout(() => {
        setXpProgress(user.xp / 10); // Assuming max XP is 1000
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [user?.xp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post Submitted:', postContent);
    setPostContent('');
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <motion.section
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <motion.img
                src={user?.photoUrl}
                alt={`${user?.name}'s profile`}
                className="w-32 h-32 rounded-full border-4 border-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <h2 className="text-3xl font-bold text-white flex items-center">
                  {user?.name || 'User'}
                  {user?.isPremium && (
                    <motion.span
                      className="ml-2 text-yellow-400"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <FaCrown />
                    </motion.span>
                  )}
                </h2>
                <p className="text-gray-400">Level: {user?.level || 'N/A'}</p>
                <div className="mt-2 bg-gray-700 rounded-full h-4 w-full">
                  <motion.div
                    className="bg-blue-500 h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-gray-400 mt-1">XP: {user?.xp || 0}/1000</p>
                <p className="text-gray-400 mt-2">{user?.description || 'No description available.'}</p>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-2">Achievements</h3>
                  <div className="flex flex-wrap gap-2">
                    {user?.achievements?.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-700 p-2 rounded-lg flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaTrophy className="text-yellow-500 mr-2" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </motion.div>
                    )) || <p className="text-gray-400">No achievements yet.</p>}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        );
      case 'activity':
        return (
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Recent Activity</h3>
            <ul className="space-y-3">
              {user?.activities?.map((activity, index) => (
                <motion.li
                  key={index}
                  className="text-gray-400 flex items-center bg-gray-700 p-3 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <FaGamepad className="mr-2 text-blue-500" />
                  {activity}
                </motion.li>
              )) || <p className="text-gray-400">No recent activity.</p>}
            </ul>
          </motion.div>
        );
      // Add similar cases for 'friends', 'discussions', and 'favorites'
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto p-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 bg-gray-800 rounded-lg p-2">
          {['profile', 'activity', 'friends', 'discussions', 'favorites'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mx-2 rounded-lg font-bold transition ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>

        {/* Forum Submission Section */}
        <motion.section
          className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Create a Post</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full bg-gray-700 text-white p-4 rounded-lg border-2 border-gray-600 focus:outline-none focus:border-blue-500 transition"
              placeholder="Share your gaming thoughts..."
              rows="4"
            />
            <motion.button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlus className="mr-2" /> Submit Post
            </motion.button>
          </form>

          {/* Previous Submissions Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Your Recent Posts</h3>
            <div className="space-y-4">
              {user?.previousSubmissions?.map((submission, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-gray-300">{submission}</p>
                  <div className="mt-2 text-sm text-gray-400 flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>Posted on {new Date().toLocaleDateString()}</span>
                  </div>
                </motion.div>
              )) || <p className="text-gray-400">No posts yet.</p>}
            </div>
          </div>
        </motion.section>

        {/* Gaming Stats Section */}
        <motion.section
          className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Gaming Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaBolt className="text-yellow-500 mr-2" />
              <span className="text-gray-300">Total Playtime: {user?.stats?.totalPlaytime || 0} hrs</span>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaFireAlt className="text-red-500 mr-2" />
              <span className="text-gray-300">Top Game: {user?.stats?.topGame || 'N/A'}</span>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaGem className="text-blue-500 mr-2" />
              <span className="text-gray-300">Achievements: {user?.stats?.achievementsCount || 0}</span>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaCrown className="text-yellow-500 mr-2" />
              <span className="text-gray-300">Premium User: {user?.isPremium ? 'Yes' : 'No'}</span>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default UserDashboard;
