import React from 'react';
import Banner from '../Banner/Banner';
import Image from 'next/image';
import ThingsToSeeAndDo from '../ThingsToSeeAndDo/ThingsToSeeAndDo';

const About = () => {
    return (
        <section className=''>
            <div className='px-6 mx-auto my-8 lg:col-span-8 lg:my-12 max-w-7xl'>
                <div>
                    <h3 className='text-4xl font-medium font-epic'>The Sundarbans</h3>
                    <h2 className='mt-2 font-sans text-xl font-semibold tracking-wider uppercase md:text-2xl'>A Journey Into the World&apos;s Largest Mangrove Wonder</h2>
                </div>
                <div className='mt-4'>
                    <p className='text-xl'>The Sundarbans - a mysterious, breathtaking, and soul-stirring wilderness where land, river, and forest live in perfect harmony. Protected as a UNESCO World Heritage Site, this vast mangrove realm stretches across countless tidal rivers, narrow creeks, wildlife-rich islands, and some of the most vibrant forest-edge communities in South Asia.</p>
                    <p className='mt-2 font-sans text-xl font-semibold uppercase'>This is not just a travel destination.
                        It is an experience that transforms you.</p>
                </div>
                <div className='mt-6'>
                    <h4 className='font-sans text-lg font-medium tracking-wider uppercase sm:text-xl'>Why Choose the Sundarbans?</h4>
                    <ul className='mt-2'>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> A Living Corridor of Culture</li>

                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Untouched Wilderness & Peace</li>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Home of the Royal Bengal Tiger</li>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> EcoVillages by the Forest</li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <h4 className='font-sans text-lg font-medium tracking-wider uppercase sm:text-xl'>A journey through the Greater Sundarbans means:</h4>
                    <ul className='mt-2'>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Cruising through narrow, silent channels surrounded by lush mangroves</li>

                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Watching deer, dolphins, crocodiles, and rare birds in the wild</li>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Witnessing magical sunrises over foggy rivers</li>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Visiting forest-edge EcoVillages and learning about their traditions</li>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Exploring riverine life, fishing cultures, and centuries-old heritage</li>
                        <li className='flex items-center'><div className='w-2 h-2 mr-3 bg-amber-600'></div> Enjoying peaceful forest stays under the open sky</li>
                        <address className='mt-2 font-medium'>Every moment offers a blend of nature, culture, and adventure.</address>
                    </ul>
                </div>

            </div>
            {/* <ThingsToSeeAndDo /> */}
            {/* <Banner /> */}
            {/* <div className='hidden col-span-4 lg:flex'>
                <div className='w-full overflow-hidden h-fit'>
                    <Image className="object-cover w-full h-full" src={"/images/banner/banner1.jpg"} alt={`Banner image`} width={720} height={720} />
                </div>
            </div> */}
        </section>
    );
};

export default About;




{/* <div className='grid grid-cols-12 gap-2 mt-2'>
                        <div className='col-span-12 lg:col-span-6 '>
                            <div className='overflow-hidden aspect-16/9 lg:aspect-video'>
                                <Image className="object-cover w-full min-h-full" src={"/images/banner/banner1.jpg"} alt={`Banner image`} width={720} height={720} />
                            </div>
                            <p className='mt-2 font-sans tracking-widest uppercase'>The Royal Bengal Tiger</p>
                        </div>
                        <div className='col-span-12 lg:col-span-6 '>
                            <div className='overflow-hidden aspect-16/9 lg:aspect-video'>
                                <Image className="object-cover w-full min-h-full" src={"/images/banner/banner1.jpg"} alt={`Banner image`} width={720} height={720} />
                            </div>
                            <p className='mt-2 font-sans tracking-widest uppercase'>Professional Photography</p>
                        </div>
                    </div> */}
{/* <div className='mt-3'>
                        <button className="relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden text-sm font-semibold text-white bg-black cursor-pointer group">
                            <span className="absolute top-0 left-0 w-0 h-full transition-all duration-300 ease-in-out bg-white/10 group-hover:w-full"></span>
                            <span className="relative z-10">Explore More</span>
                            <svg className="relative z-10 w-5 h-5 opacity-0 group-hover:opacity-100 translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div> */}