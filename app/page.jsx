import React from 'react'
import { Hero, How, YouTubePlayer, Utilization } from './components'

const Home = () => {
  return (
    <div className='w-screen lg:w-screen flex-col flex'>
      <Hero />
      <How />
      <YouTubePlayer />
      <Utilization />
    </div>
  )
}


export default Home
