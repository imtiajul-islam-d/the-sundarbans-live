import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <section className="py-6 ">
            <div className="px-2 mx-auto max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    <div className="relative overflow-hidden bg-gray-100 cursor-pointer before:absolute before:inset-0 group">
                        <Image className="object-cover object-top h-full max-w-full transition-all group-hover:scale-105 aspect-square" src={"/images/banner/banner2.jpg"} alt={`Banner image`} width={720} height={720} />
                    </div>
                    <div className="relative overflow-hidden bg-gray-100 cursor-pointer before:absolute before:inset-0 group ">
                        <Image className="object-cover object-top h-full max-w-full transition-all group-hover:scale-105 aspect-square" src={"/images/banner/banner3.jpg"} alt={`Banner image`} width={720} height={720} />
                    </div>
                    <div className="relative overflow-hidden bg-gray-100 cursor-pointer before:absolute before:inset-0 group ">
                        <Image className="object-cover object-top h-full max-w-full transition-all group-hover:scale-105 aspect-square" src={"/images/banner/banner4.jpg"} alt={`Banner image`} width={720} height={720} />
                    </div>
                    <div className="relative overflow-hidden bg-gray-100 cursor-pointer before:absolute before:inset-0 group ">
                        <Image className="object-cover object-top h-full max-w-full transition-all group-hover:scale-105 aspect-square" src={"/images/banner/banner5.jpg"} alt={`Banner image`} width={720} height={720} />
                    </div>
                    <div className="relative overflow-hidden bg-gray-100 cursor-pointer before:absolute before:inset-0 group ">
                        <Image className="object-cover object-top h-full max-w-full transition-all group-hover:scale-105 aspect-square" src={"/images/banner/banner6.jpg"} alt={`Banner image`} width={720} height={720} />
                    </div>
                    <div className="relative overflow-hidden bg-gray-100 cursor-pointer before:absolute before:inset-0 group ">
                        <Image className="object-cover object-top h-full max-w-full transition-all group-hover:scale-105 aspect-square" src={"/images/banner/banner2.jpg"} alt={`Banner image`} width={720} height={720} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;