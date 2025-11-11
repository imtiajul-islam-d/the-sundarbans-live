import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Timeline = () => {
    return (
        <section className='max-w-[1440px] mx-auto mt-16 lg:mt-36 px-2'>
            <div className='mb-8 md:mb-10 lg:mb-12'>
                <h3 className='max-w-2xl px-2 mx-auto font-sans text-xl font-semibold text-center uppercase sm:px-6 md:text-2xl'>A  <span className='text-orange-600'>UNESCO </span>World Heritage Site and the world&apos;s<span className='text-orange-600'> largest</span> mangrove forest.</h3>

                {/* <p className='max-w-5xl px-6 mx-auto mt-2 text-base tracking-wide text-center md:mt-4 md:px-6 md:max-w-3xl font-lora md:text-xl'>Let&apos;s explore the SUNDARBANS with the following roadmap!</p> */}
            </div>
            <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
                <li className="relative grid grid-cols-2 group odd:-me-3 even:-ms-3">
                    <div className="relative flex items-start gap-1.5 lg:gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                        <span className="bg-orange-600 rounded-full size-3 shrink-0"></span>

                        <div className="-mt-2">
                            {/* <time className="font-medium text-gray-700 text-xs/none">12/02/2025</time> */}
                            <p className=''>Adventure Starts Here</p>

                            <h3 className="text-lg font-bold text-gray-900">Mongla</h3>

                            <Image className='object-cover aspect-3/4 lg:aspect-video' src={"/images/banner/banner1.jpg"} alt='Image' width={1920} height={1080} />
                            <Link href={""} className='block mt-3 text-xs tracking-widest text-orange-500 uppercase font-montserrat md:text-md lg:text-lg'>Details</Link>
                        </div>
                    </div>

                    <div aria-hidden="true"></div>
                </li>

                <li className="relative grid grid-cols-2 group odd:-me-3 even:-ms-3">
                    <div className="relative flex items-start gap-1.5 lg:gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                        <span className="bg-orange-600 rounded-full size-3 shrink-0"></span>

                        <div className="-mt-2">
                            {/* <time className="font-medium text-gray-700 text-xs/none">5/03/2025</time> */}
                            <p className=''>Day two Starts Here</p>

                            <h3 className="text-lg font-bold text-gray-900">Place name</h3>

                            <Image className='object-cover aspect-3/4 lg:aspect-video' src={"/images/banner/banner1.jpg"} alt='Image' width={1920} height={1080} />
                            <Link href={""} className='block mt-3 text-xs tracking-widest text-orange-500 uppercase font-montserrat md:text-md lg:text-lg'>Details</Link>
                        </div>
                    </div>

                    <div aria-hidden="true"></div>
                </li>

                <li className="relative grid grid-cols-2 group odd:-me-3 even:-ms-3">
                    <div className="relative flex items-start gap-1.5 lg:gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                        <span className="bg-orange-600 rounded-full size-3 shrink-0"></span>

                        <div className="-mt-2">
                            {/* <time className="font-medium text-gray-700 text-xs/none">5/03/2025</time> */}
                            <p className=''>Day three Starts Here</p>

                            <h3 className="text-lg font-bold text-gray-900">Place name</h3>

                            <Image className='object-cover aspect-3/4 lg:aspect-video' src={"/images/banner/banner1.jpg"} alt='Image' width={1920} height={1080} />
                            <Link href={""} className='block mt-3 text-xs tracking-widest text-orange-500 uppercase font-montserrat md:text-md lg:text-lg'>Details</Link>
                        </div>
                    </div>

                    <div aria-hidden="true"></div>
                </li>
            </ol>
        </section>
    );
};

export default Timeline;