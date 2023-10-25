"use client";
import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image'




const fadeImages = [
    {
      url: '/Hero1.webp',
      caption: '',
      priority: true,
      alt: 'doctor showing hearing aid on patient'
    },
    {
      url: '/Hero2.webp',
      caption: '',
      priority: true,
      alt: 'doctor showing hearing aid'
    },
    {
      url: '/Hero3.webp',
      caption: '',
      priority: false,
      alt: 'doctor examining patient'
    },
  ];

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const TailwindSkeleton = (index) => (
    <div className={`flex relative w-full h-full items-center justify-center z-60 ${imageLoaded[index] ? 'opacity-0 transition-opacity duration-1000 ease-in-out' : ''}`}>
      <div className="animate-pulse w-full h-full bg-gray-300 absolute"></div>
    </div>
  );

    return (
        <div className="slide-container flex-box relative w-full h-[600px]">
          <Fade>
            {!imageLoaded && <TailwindSkeleton />}  {/* Display Skeleton while image is loading */}
            {fadeImages.map((fadeImage, index) => (
            <div priority='true' className='flex flex-col relative w-full h-600 items-center justify-center' key={index}>
                <Image 
                  priority={fadeImage.priority} 
                  className={`object-cover w-full h-600 flex absolute ${imageLoaded ? 'visible' : 'invisible'}`} 
                  src={fadeImage.url} 
                  alt={fadeImage.alt} 
                  width={2000} 
                  height={1333} 
                  placeholder='empty'
                  onLoad={() => setImageLoaded({...imageLoaded, [index]: true})} 
                />
                <div className="absolute w-screen h-600 bg-heroOverlay opacity-60"></div>
                <h2 className='text-white textxl lg:text-3xl font-regular text-center self-center block relative m-auto'>Welcome to 3D Hearing</h2>
                <h1 className='text-white text-2xl lg:text-5xl font-bold text-center self-center block relative m-auto'>Hearing Aids Customized For YOU. Best <br /> Price And Service From Your Local <br /> Hearing Aid Clinic. Contact Us Today!</h1>
                <p className='text-white text-md lg:text-lg font-regular text-center self-center block relative m-auto'>With our advanced hearing aids, we at 3D Hearing ensure you experience the best technology combined with personalized care. On average, our <br /> customers save $1100.</p>
            </div>
            ))}
          </Fade>
        </div>
      )
    }
    

export default Hero