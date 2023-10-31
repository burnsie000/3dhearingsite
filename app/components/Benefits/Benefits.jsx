import React from 'react'

const Benefits = () => {
  return (
    <div className='flex flex-col py-4r w-full px-4r md:px-10r relative h-auto bg-white justify-center items-center space-y-2r'>
        <h2 className='text-3xl font-bold text-brandOrange text-center'>Benefits of Using a Hearing Assistive Device</h2>
        <div className='flex flex-col md:flex-row justify-between mt-1r md:space-x-2r md:mb-2r'>
            <div className='bg-gray-200 hover:bg-brandOrange mt-1r hover:text-white text-gray-600 hover:cursor-pointer p-1r rounded-xl shadow-2xl items-center text-center justify-center h-[175px] w-[370px] relative flex flex-col space-y-[10px]'>
                <h2 className='text-xl font-bold text-center relative flex'>
                    Mental Health Boost
                </h2>
                <p className='relative flex font-regular text-lg text-center'>
                    Not hearing well can make you feel bad. It can make you sad or worried. Our hearing aids in Maryland can help with that.
                </p>
            </div>
            <div className='bg-gray-200 mt-1r hover:bg-brandOrange hover:text-white text-gray-600 hover:cursor-pointer p-1r rounded-xl shadow-2xl items-center text-center justify-center h-[175px] w-[370px] relative flex flex-col space-y-[10px]'>
                <h2 className='text-xl font-bold text-center relative flex'>
                    Better Body Health
                </h2>
                <p className='relative flex font-regular text-lg text-center'>
                    Studies show that not treating hearing loss can hurt your body. You could fall more or think slower. A hearing device can stop these problems.
                </p>
            </div>
            <div className='bg-gray-200 mt-1r hover:bg-brandOrange hover:text-white text-gray-600 hover:cursor-pointer p-1r rounded-xl shadow-2xl items-center text-center justify-center h-[175px] w-[370px] relative flex flex-col space-y-[10px]'>
                <h2 className='text-xl font-bold text-center relative flex'>
                    Better Life Quality
                </h2>
                <p className='relative flex font-regular text-lg text-center'>
                    In short, hearing devices make life better. You can talk to people easier, feel better, and do more things.
                </p>
            </div>
        </div>
        <p className='text-lg text-black font-regular text-center relative flex flex-wrap md:mt-4r'>
            Using hearing devices is key for those with hearing loss. It helps with talking, being with others, feeling good, and staying safe. If hearing is hard for you, see our team. We’re in Huntingtown Maryland, Pasadena Maryland, Annapolis Maryland, and Waldorf Maryland.
        </p>
    </div>
  )
}

export default Benefits