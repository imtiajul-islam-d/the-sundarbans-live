"use client"

import Image from "next/image";
import Link from "next/link";


const Slider_item = ({ item }: any) => {
    return (
        <div className="relative cursor-pointer">
            {/* TODO: placeholder for image */}
            <div className="aspect-3/4">
                <Image className="object-cover w-auto min-h-full" src={item?.img} alt={`Banner image`} width={720} height={720} />
            </div>
            <div className='absolute bottom-0 left-0 z-10 m-4'>
                <button className="relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden text-sm font-semibold text-white bg-black cursor-pointer group">
                    <span className="absolute top-0 left-0 w-0 h-full transition-all duration-300 ease-in-out bg-white/10 group-hover:w-full"></span>
                    <span className="relative z-10">Explore More</span>
                    <svg className="relative z-10 w-5 h-5 opacity-0 group-hover:opacity-100 translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            {/* <div className="px-2">
                <h3 className="mt-4 text-5xl font-medium tracking-wide font-epic">{item?.place_name}</h3>
                <p className="mt-3 font-sans font-medium tracking-wide uppercase ">{item?.title}</p>
                <Link className="my-8 block  font-sans tracking-[4px] text-xs uppercase font-medium text-orange-600 hover:tracking-[5px] transition-all" href={item?.link}>Details</Link>
            </div> */}
        </div>
    );
};

export default Slider_item;