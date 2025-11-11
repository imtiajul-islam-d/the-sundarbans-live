"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { MdOutlinePlace } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';
import NavbarBottom from './NavbarBottom';
import { RxHamburgerMenu } from 'react-icons/rx';
import MobileDrawer from './MobileDrawer';
import Test from './test';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <nav>
            {/* Top-bar */}
            <div className='hidden h-fit bg-[#F7F2EE] lg:block px-8 py-4'>
                <div className='font-sans lg:grid grid-cols-12 max-w-[1440px] mx-auto'>
                    <div className='flex items-center col-span-3'>
                        <Link href={"#"} className='flex items-center text-xs font-medium tracking-widest uppercase'>
                            <span className='inline-block text-lg mr-1.5'>
                                <MdOutlinePlace />
                            </span>
                            Destinations
                        </Link>
                    </div>
                    <div className='flex items-center justify-center col-span-6'>
                        <ul className='flex items-center justify-center text-sm font-medium lowercase gap-7 lg:tracking-wide xl:tracking-wider'>
                            <li>
                                <Link href={"#"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Sundarbans News</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Events</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Shop</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-end col-span-3'>
                        <ul className='flex gap-7 text-md'>
                            <li>
                                <FaFacebookF />

                            </li>
                            <li>
                                <IoLogoInstagram />
                            </li>
                            <li>
                                <RiTwitterXLine />

                            </li>
                            <li>
                                <FaYoutube />
                            </li>
                            <li>
                                <IoLogoInstagram />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* mobile nav nav */}
            <div className='flex items-center justify-between px-6 py-4 shadow-xs lg:hidden shadow-gray-200'>
                <div>
                    <h2 className='text-5xl xs:text-6xl md:text-7xl font-epic'>The Sundarbans</h2>
                </div>
                <div>
                    <Link onClick={() => setDropdown((e) => !e)} href={""} className='text-3xl transition md:text-4xl'>
                        <RxHamburgerMenu />
                    </Link>
                </div>
            </div>
            {
                dropdown ? <MobileDrawer dropdown={dropdown} setDropdown={setDropdown} /> : ""
            }
            <NavbarBottom />

            {/* <Test /> */}
        </nav>
    );
};

export default Navbar;