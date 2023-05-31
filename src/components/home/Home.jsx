import React from 'react'
import Hero from './Hero/Hero';
import Featured from '../featured/Featured';
import Recent from './recent/Recent';
import Award from './awards/Award';
import Location from './location/Location';

const Home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Recent />
        <Award />
        <Location/>
    </>
  )
}

export default Home;
