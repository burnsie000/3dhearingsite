import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const How = () => {
  return (
    <div className='flex flex-col items-center bg-white w-full'>
        <Head>
            <link rel='preload' href='/working-woman.webp' as="image" />
            <link rel='preload' href='/young-businesswoman.webp' as="image" />
            <link rel='preload' href='/hearing-aid.webp' as="image" />
        </Head>
        <div className='flex flex-col items-center bg-white w-full py-3r'>
            <h1 className='text-3xl text-orange-600 font-bold text-center my-4r'>How does it Work?</h1>
            <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center lg:space-x-2r">
                {/* Card 1 */}
                <div className="flex flex-col items-center shadow-2xl rounded-xl relative bg-gray-100 w-[360px] h-[390px] p-2r">
                    <div className="relative w-full h-[300px]">
                        <Image
                        src='/woman-working.webp' 
                        alt="Woman in call center talking with customer"
                        width={1000}
                        height={667}
                        priority='true'
                        className='shadow-lg rounded-xl'
                        />
                    </div>
                    <Link aria-label='call us' href='tel:4105905572' className="text-center mt-10 text-brandBlue font-bold text-2xl">Call Us at <br /> 410-590-5572</Link>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-center shadow-2xl rounded-xl relative bg-gray-100 w-[360px] h-[390px] p-2r">
                    <div className="relative w-full h-[300px]">    
                        <Image
                            src='/young-businesswoman.webp' 
                            alt="young businesswoman talking on the phone writing her notes in the office"
                            width={1000}
                            height={667}
                            priority='true'
                            className='shadow-lg rounded-xl'
                        />
                    </div>
                    <Link aria-label='call us' href='tel:4105905572' className="text-center mt-10 text-brandBlue font-bold text-2xl">Schedule Your <br /> Consultation </Link>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center shadow-2xl rounded-xl relative bg-gray-100 w-[360px] h-[390px] p-2r">
                    <div className="relative w-full h-[300px]">
                        <Image
                            src='/hearing-aid.webp' 
                            alt="Blonde woman having a hearing aid installed on her right ear"
                            width={1000}
                            height={667}
                            priority='true'
                            className='shadow-lg rounded-xl'
                        />
                    </div>
                    <Link aria-label='call us' href='tel:4105905572' className="text-center mt-10 text-brandBlue font-bold text-2xl">Try Hearing Aids <br /> in Person</Link>
                </div>
            </div>
        </div>
    </div>
  );
};


export default How;
