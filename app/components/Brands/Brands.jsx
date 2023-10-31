import React from 'react'
import Link from 'next/link'

const Brands = () => {
  return (
    <div className='flex relative flex-col h-auto w-full p-2r bg-white justify-center items-center'>
        <h2 className='text-brandOrange mt-1r mb-15px font-bold text-4xl'>
            Top Trusted Brands
        </h2>
        <p className='text-black mt-15px font-regular text-lg mb-15px'>
            Shop These Great Name-Brands at Discounted Prices!
        </p>
        <div className='flex flex-col lg:flex-row my-1r items-center justify-between space-x-1r space-y-1r px-4r'>
            <div className='flex relative bg-gray-100 rounded-3xl py-1r text-center h-6r w-14r'>
                <Link href='/products/resound/' aria-label='resound hearing aids' className='text-brandOrange font-bold text-3xl'>ReSound Hearing Aids</Link>
            </div>
            <div className='flex relative bg-gray-100 rounded-3xl text-center py-1r h-6r w-14r mx-auto p-10px'>
                <Link href='/products/phonak/' aria-label='phonak hearing aids' className='text-brandOrange font-bold text-3xl'>Phonak Hearing Aids</Link>
            </div>
            <div className='flex relative bg-gray-100 rounded-3xl py-1r text-center h-6r w-14r mx-auto p-10px'>
                <Link href='/products/oticon/' aria-label='oticon hearing aids' className='text-brandOrange font-bold text-3xl'>Oticon Hearing Aids</Link>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row my-1r items-center justify-between space-x-1r space-y-1r px-4r'>
            <div className='flex relative bg-gray-100 rounded-3xl py-1r text-center h-6r w-14r mx-auto p-10px'>
                <Link href='/products/signia/' aria-label='signia hearing aids' className='text-brandOrange font-bold text-3xl'>Signia Hearing Aids</Link>
            </div>
            <div className='flex relative bg-gray-100 rounded-3xl py-1r text-center h-6r w-14r mx-auto p-10px'>
                <Link href='/products/widex/' aria-label='widex hearing aids' className='text-brandOrange font-bold text-3xl'>Widex Hearing Aids</Link>
            </div>
            <div className='flex relative bg-gray-100 rounded-3xl py-1r text-center h-6r w-14r mx-auto p-10px'>
                <Link href='/products/starkey/' aria-label='starkey hearing aids' className='text-brandOrange font-bold text-3xl'>Starkey Hearing Aids</Link>
            </div>
        </div>
    </div>
  )
}

export default Brands