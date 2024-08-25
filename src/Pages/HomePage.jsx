import React from 'react'
import Navbar from '../Components/Navbar'
import GameList from '../Components/GameList'
import CategorySlider from '../Components/CategorySlider'
import ReviewCard from '../Components/ReviewCard'
const HomePage = () => {
  return (
    <>
    <Navbar />
    <GameList />
    <CategorySlider />
    <ReviewCard />
    </>
  )
}

export default HomePage