"use client"
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Slider_item from './Slider_item';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import data from "@/data/Banner.json"

const Banner_slider = () => {
    const [slides, setSlides] = useState(1);
    const swiper = useSwiper();

    useEffect(() => {
        const updateSlides = () => {
            const width = window.innerWidth;
            if (width >= 1440) setSlides(5);
            else if (width >= 1024) setSlides(4);
            // else if (width >= 768) setSlides(4);
            else if (width >= 640) setSlides(3);
            else if (width >= 480) setSlides(2);
            else setSlides(1);
        };

        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);
    return (
        <div className='cursor-grab'>
            {/* <button className='mb-10' onClick={() => swiper?.slideNext()} >Prev new</button>
            <button className=''>Next new</button> */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={8}
                slidesPerView={slides}
                navigation
                // effect='fade'
                autoplay={
                    { delay: 3000, }
                }
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                {
                    data?.items?.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Slider_item item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Banner_slider;