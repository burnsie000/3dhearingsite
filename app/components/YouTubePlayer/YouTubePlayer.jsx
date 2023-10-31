import React from 'react'

const YouTubePlayer = ({ videoId }) => {
  
    return (
        <div className='bg-white w-full h-auto lg:h-[720] items-center flex relative justify-center py-1r'>
            <iframe title='How it works' width="1280" height="720" src="/What-to-Expect At-Your-First-Appointment-3D-Hearing-Maryland.mp4" frameBorder={0} className='border-2 w-1280 bg-white h-auto lg:h-720 border-solid border-brandorange' loading='lazy'></iframe>
        </div>
        
    );
  };
  
  export default YouTubePlayer;