import { React, Suspense } from 'react'
import { Hero, How, YouTubePlayer, Utilization, Brands, ResoundNEW, OrangeBar, Benefits, Trust } from './components'


const Home = () => {
  return (
    <div className='w-screen lg:w-screen flex-col flex'>
      <Suspense><OrangeBar /></Suspense>
      <Suspense><Hero /></Suspense>
      <Suspense><How /></Suspense>
      <Suspense><YouTubePlayer /></Suspense>
      <Suspense><Utilization /></Suspense>
      <Suspense><Brands /></Suspense>
      <Suspense><ResoundNEW /></Suspense>
      <Suspense><Benefits /></Suspense>
      <Suspense><Trust /></Suspense>
    </div>
  )
}


export default Home
