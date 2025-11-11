import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <section className="py-6 ">
            <div className="grid grid-cols-2 gap-2 px-1 mx-auto md:grid-cols-4">
                <Image src={"/images/banner/banner1.jpg"} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square" width={1920} height={1080} />
                <Image alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48" src={"/images/banner/banner1.jpg"} width={1920} height={1080} />
                <Image alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48" src={"/images/banner/banner2.jpg"} width={1920} height={1080} />
                <Image alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48" src={"/images/banner/banner3.jpg"} width={1920} height={1080} />
                <Image alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48" src={"/images/banner/banner4.jpg"} width={1920} height={1080} />
            </div>
        </section>
    );
};

export default Gallery;