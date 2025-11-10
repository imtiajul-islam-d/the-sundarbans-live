import Image from 'next/image';
import React from 'react';
import data from "@/data/Navbar.json"
import Link from 'next/link';
import { TfiCup } from 'react-icons/tfi';
import { LuNotebook } from 'react-icons/lu';

const NavbarBottom = () => {
    return (
        <div className='hidden mx-auto lg:px-8 lg:block max-w-7xl lg:mt-16 xl:px-16 xl:mt-24'>
            <div className='grid grid-cols-12 mx-auto'>
                <div className='flex items-center col-span-4 '>
                    {
                        data?.nav_bottom?.left?.map((item, id) => (
                            <Link key={id} href={""} className='flex flex-col items-center tracking-widest transition-transform font-lora group lg:mr-12 xl:mr-16 hover:scale-105'>
                                <Image className='w-16' src={item?.icon} alt={`${item?.txt} Icon`} width={1080} height={780} />
                                {item?.txt}
                            </Link>
                        ))
                    }
                </div>
                <div className='col-span-4 place-self-center'>
                    {/* <Image src={data?.nav_bottom?.logo} alt='The Sundarbans Logo' width={1080} height={780} /> */}
                    <h2 className='font-epic text-7xl xl:text-8xl'>The Sundarbans</h2>
                </div>
                <div className='flex items-center justify-end col-span-4'>
                    {
                        data?.nav_bottom?.right?.map((item, id) => (
                            <Link key={id} href={""} className='flex flex-col items-center tracking-widest transition-transform font-lora group lg:ml-12 xl:ml-16 hover:scale-105'>
                                <Image className='w-16' src={item?.icon} alt={`${item?.txt} Icon`} width={1080} height={780} />
                                {item?.txt}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default NavbarBottom;