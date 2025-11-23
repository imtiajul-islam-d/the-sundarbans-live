"use client"
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import data from "@/data/Banner.json"
import Image from 'next/image';

const Hero = () => {
    const [slides, setSlides] = useState(1);
    const swiper = useSwiper();

    // useEffect(() => {
    //     const updateSlides = () => {
    //         const width = window.innerWidth;
    //         if (width >= 1440) setSlides(5);
    //         else if (width >= 1024) setSlides(4);
    //         // else if (width >= 768) setSlides(4);
    //         else if (width >= 640) setSlides(3);
    //         else if (width >= 480) setSlides(2);
    //         else setSlides(1);
    //     };

    //     updateSlides();
    //     window.addEventListener("resize", updateSlides);
    //     return () => window.removeEventListener("resize", updateSlides);
    // }, []);
    return (
        <div className='mx-auto mt-2 cursor-grab max-w-7xl lg:mt-0'>
            {/* <button className='mb-10' onClick={() => swiper?.slideNext()} >Prev new</button>
            <button className=''>Next new</button> */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // spaceBetween={8}
                slidesPerView={slides}
                // navigation
                effect='fade'
                autoplay={
                    { delay: 3000, }
                }
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                {
                    data?.items?.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="px-2 overflow-hidden aspect-9/12 sm:aspect-1/1 md:aspect-16/8">
                                <Image className="object-cover w-full min-h-full" src={item?.img} alt={`Banner image`} width={720} height={720} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Hero;