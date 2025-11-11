"use client"

import Image from "next/image";
import Link from "next/link";


const Slider_item = ({ item }: any) => {
    return (
        <div className="border border-gray-200 cursor-pointer">
            {/* TODO: placeholder for image */}
            <div className="aspect-3/4">
                <Image className="object-cover w-auto min-h-full" src={item?.img} alt={`Banner image`} width={1920} height={1080} />
            </div>

            <h3 className="mt-4 text-5xl font-medium tracking-wide text-center font-epic">{item?.place_name}</h3>
            <p className="px-6 mt-3 font-sans font-medium tracking-wide text-center uppercase">{item?.title}</p>
            <Link className="my-8 block text-center font-sans tracking-[4px] text-xs uppercase font-medium text-orange-600 hover:tracking-[5px] transition-all" href={item?.link}>Details</Link>
        </div>
    );
};

export default Slider_item;