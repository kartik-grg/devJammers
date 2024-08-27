import React from 'react'
import Navbar from '../Components/Navbar'
import GameList from '../Components/GameList'
import ReviewCard from '../Components/ReviewCard'
import Footer from '../Components/Footer'
const HomePage = () => {
  return (
    <>
    <Navbar />
    <GameList />
    <ReviewCard />
    <Footer />
    </>
  )
}

export default HomePage