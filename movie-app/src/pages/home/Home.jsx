import React from 'react'

import HeroBanner from "./heroBanner/HeroBanner";
import MovieDisplay from './movieDisplay/MovieDisplay';
const Home = () => {
  return (
    <div>
        <HeroBanner />
        <MovieDisplay/>
    </div>
  )
}

export default Home