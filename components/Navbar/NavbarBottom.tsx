import Image from 'next/image';
import React from 'react';
import data from "@/data/Navbar.json"
import Link from 'next/link';
import { TfiCup } from 'react-icons/tfi';
import { LuNotebook } from 'react-icons/lu';

const NavbarBottom = () => {
    return (
        <div className='hidden max-w-6xl mx-auto lg:px-16 lg:block lg:my-16'>
            <div className='grid grid-cols-12 mx-auto'>
                <div className='flex items-center col-span-4 '>
                    {
                        data?.nav_bottom?.left?.map((item, id) => (
                            <Link key={id} href={""} className='flex flex-col items-center tracking-widest transition-transform font-lora group lg:mr-11 hover:scale-105'>
                                <Image className='w-14' src={item?.icon} alt={`${item?.txt} Icon`} width={1080} height={780} />
                                {item?.txt}
                            </Link>
                        ))
                    }
                </div>
                <div className='col-span-4 place-self-center'>
                    {/* <Image src={data?.nav_bottom?.logo} alt='The Sundarbans Logo' width={1080} height={780} /> */}
                    <h2 className='font-epic text-7xl'>The Sundarbans</h2>
                    <p className='mt-2 font-sans text-xs font-bold tracking-[2px] text-center uppercase'>Raw. Ancient. Majestic.</p>
                </div>
                <div className='flex items-center justify-end col-span-4'>
                    {
                        data?.nav_bottom?.right?.map((item, id) => (
                            <Link key={id} href={""} className='flex flex-col items-center tracking-widest transition-transform font-lora group lg:ml-11 hover:scale-105'>
                                <Image className='w-14' src={item?.icon} alt={`${item?.txt} Icon`} width={1080} height={780} />
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