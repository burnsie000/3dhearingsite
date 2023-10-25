import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Utilization = () => {
  return (
    <div className='flex flex-col bg-white lg:flex-row h-auto w-full relative lg:py-3r items-center justify-between lg:space-x-1r space-y-2r lg:px-8r'>
        <div className='flex flex-col relative items-center bg-white w-full lg:w-1/2 px-5r py-5r'>
            <h2 className='text-start flex relative text-brandComplimentary text-4xl font-bold'>We Utilize The Latest Hearing Aid Programming And Verification Software</h2>
            <h3 className='text-start flex relative text-brandBlue text-lg mt-1r font-bold'>At 3D Hearing, you are paying online discounted prices and buying in person at one of our local hearing aids centers.</h3>
            <p className='text-start text-black flex relative text-md font-regular mt-1r'>In order for hearing aids to be fit properly and accurately it is imperative to have the initial fitting done in person. Companies today will lead you to believe they can sell the device online and adjust it remotely.  In some cases this will work but for most people a hearing care professional needs to properly size and fit the devices and calibrate the hearing aids while you are wearing them. </p>
            <Link aria-label='go to contact page' href='/contact-us' className='bg-brandOrange shadow-xl block self-start relative text-brandComplimentary text-start text-lg font-bold rounded-xl w-auto h-auto mt-3r py-10 px-25'>Contact Us</Link>
        </div>
        <div className='flex flex-box relative items-center bg-white w-full lg:w-1/2 h-full lg:px-5r py-0 lg:py-5r'>
            <div className='flex relative w-full h-full items-center'>
                <Image src='/doctor-with-patient.webp' alt='Doctor with a patient, who is trying on hearing aids' width={300} height={200} loading='lazy' className='relative object-cover mx-auto h-full w-full' />
            </div>
        </div>
    </div>
  )
}

export default Utilization