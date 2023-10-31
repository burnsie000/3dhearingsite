"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OrangeBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState({
        about: false,
        services: false,
        contact: false,
    });
    const toggleDropdown = (section) => {
        setDropdown({
            ...dropdown,
            [section]: !dropdown[section],
        });
    };

  return (
    <>
        <div className="hidden lg:flex bg-brandOrange h-3r justify-between">
            <div className="flex-1 flex justify-end items-center space-x-2r pr-4">
                <div className="phone-placeholder flex items-center">
                    <Link aria-label='(410) 590-5572' href='tel:4105905572' className="flex items-center space-x-1r">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill fill-brandComplimentary" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>

                        <p className="font-bold text-md text-brandComplimentary">(410) 590-5572</p>
                    </Link>
                </div>
                <div className="email-placeholder">
                    <Link aria-label='info@3dhearing.com' href='mailto:info@3dhearing.com' className="flex items-center space-x-1r">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill fill-brandComplimentary" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                        <p className="font-bold text-md text-brandComplimentary">info@3dhearing.com</p>
                    </Link>
                </div>
            </div>
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-start items-center space-x-4 pl-4">
                <div className="social-placeholder flex space-x-1r">
                    <Link aria-label='visit our facebook page' href='https://www.facebook.com/profile.php?id=100072294991508&mibextid=LQQJ4d' className="flex items-center space-x-2">
                        {/* ... Facebook icon ... */}
                        <svg priority='true' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook fill-brandComplimentary" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </Link>
                    <Link aria-label='visit our twitter page' href='https://twitter.com/3dhearing?s=21&t=U-cCiX9O9uf2d-EMWIbZNA' className="flex items-center space-x-2">
                        {/* ... Twitter icon ... */}
                        <svg priority='true' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter fill-brandComplimentary" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </Link>
                    <Link aria-label='visit our youtube page' href='https://www.youtube.com/@3dhearing616' className="flex items-center space-x-2">
                        {/* ... YouTube icon ... */}
                        <svg priority='true' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube fill-brandComplimentary" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                    </Link>
                    <Link aria-label='visit our instagram page' href='https://www.instagram.com/3dhearing/' className="flex items-center space-x-2">
                        {/* ... Instagram icon ... */}
                        <svg priority='true' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram fill-brandComplimentary" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-white h-[238px] flex items-center w-full justify-between lg:px-0r lg:py-14p">
            {/* Logo */}
            <div className="lg:flex lg:w-1/3 w-1/2 h-218 relative items-center justify-start pl-4r lg:pl-0  py-14">
                <div className='shrink-0'>
                    <Image priority='true' src='/3D-HEARING-LOGO-ORANGE.svg' width={218} height={218} alt='3DHearing Logo' className='lg:p-2r flex flex-1 min-w-[100px] min-h-[50px] relative' placeholder='empty' />
                </div>
            </div>
            {/* Nav Links */}
            <div className="relative lg:w-1/3 w-1/2 flex text-center lg:flex lg:flex-grow lg:justify-center lg:items-center space-y-4 lg:space-y-1r lg:space-x-2r self-center text-md font-bold text-black">
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden mx-auto ml-5r flex-1 flex justify-center items-center">
                    <svg priority='true' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-list flex-1 flex justify-center items-center" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <nav className={`block top-full text-sm ml-1r left-0 w-1/3 mx-auto bg-white self-center relative flex-col space-y-1r ${isOpen ? 'block w-10r' : 'hidden'} lg:static lg:flex-row lg:space-x-2r lg:bg-transparent lg:block ml-3r`}>
                    {/* ... Your nav links code ... */}
                    <div className="flex flex-col relative lg:flex-row space-y-2 whitespace-nowrap lg:space-y-0 lg:space-x-2r lg:flex-nowrap lg:justify-center lg:items-center lg:text-center">
                        <Link aria-label='home' href='/' className='whitespace-nowrap hover:text-brandGreen'>Home</Link>
                        <div className="relative group" onMouseEnter={() => toggleDropdown('about')} onMouseLeave={() => toggleDropdown('about')}>
                            <Link aria-label='about us' href="/about-us" className='hover:text-brandGreen'>About Us</Link>
                            {dropdown.about && (
                            <div className="absolute top-full left-0 w-15r border-2 border-solid border-brandOrange bg-white flex flex-col space-y-5px z-10">
                                {/* Dropdown items */}
                                <Link aria-label='hearing aid buyers guide' className='hover:text-brandGreen' href="/about-us/hearing-aid-buyers-guide/">Hearing Aid Buyer's Guide</Link>
                                <Link aria-label='gallery' className='hover:text-brandGreen' href="/about-us/gallery/">Gallery</Link>
                            </div>
                            )}
                        </div>
                        <div className="relative group" onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
                            <Link aria-label='services' href="/services" className='hover:text-brandGreen'>Services</Link>
                            {dropdown.services && (
                            <div className="absolute top-full border-2 border-solid border-brandOrange left-0 w-15r bg-white flex flex-col space-y-2 z-10">
                                {/* Dropdown items */}
                                <Link aria-label='hearing aid maintenance' className='hover:text-brandGreen' href="/services/hearing-aid-maintenance/">Hearing Aid Maintenance</Link>
                                <Link aria-label='benefits of using a hearing aid' className='hover:text-brandGreen' href="/services/benefits-of-using-a-hearing-aid/">Benefits of Using a Hearing Aid</Link>
                                <Link aria-label='insurance benefit verification' className='hover:text-brandGreen' href="/services/insurance-benefit-verification/">Insurance Benefit Verification</Link>
                            </div>
                            )}
                        </div>
                        <Link aria-label='our products' href='products' className='whitespace-nowrap hover:text-brandGreen'>Our Products</Link>
                        <div className="relative group" onMouseEnter={() => toggleDropdown('contact')} onMouseLeave={() => toggleDropdown('contact')}>
                            <Link aria-label='Contact us' href="/contact-us" className='hover:text-brandGreen'>Contact Us</Link>
                            {dropdown.contact && (
                            <div className="absolute top-full border-2 border-solid border-brandOrange left-0 w-15r bg-white flex flex-col space-y-2 z-10">
                                {/* Dropdown items */}
                                <Link aria-label='our locations' className='hover:text-brandGreen' href="/contact-us/our-locations/">Our Locations</Link>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2r lg:flex-nowrap lg:justify-center lg:items-center lg:text-center">
                        <Link aria-label='resources' href='/resources' className='mr-5 hover:text-brandGreen'>Resources</Link>
                        <Link aria-label='reviews' href='/reviews' className='hover:text-brandGreen'>Reviews</Link>
                    </div>
                </nav>
            </div>
            {/* Make An Appointment Button */}
            <div className="flex w-1/3 items-center justify-end pr-1r lg:pr-0 ml-1r mr-10r">
                <button aria-label='make an appointment' className="hidden lg:block bg-brandOrange text-md font-bold text-brandComplimentary py-[4px] px-[8px] rounded-full">Make An Appointment</button>
            </div>
        </div>
    </>
  );
};

export default OrangeBar;

