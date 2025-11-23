import React from 'react';
import { GiBoatFishing, GiCruiser, GiDolphin, GiJungle, GiPalmTree, GiTigerHead } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";
import { IoMdMoon } from "react-icons/io";
import { MdHouseboat } from 'react-icons/md';




const ThingsToSeeAndDo = () => {
    return (
        <section>
            <div className="">
                <div className="px-4 mx-auto max-w-7xl">
                    <h2 className="mb-6 font-sans text-3xl font-semibold uppercase text-slate-900">Things To See & <span className='text-orange-600'>DO!</span></h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>
                                <GiPalmTree />
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Narrow Mangrove Channels</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Silent waterways lined with dense mangroves, perfect for photography, birdwatching, and peaceful cruising.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>

                                <GiTigerHead />
                            </div>

                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Search for the Royal Bengal Tiger</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Embark on guided journeys through prime tiger habitats for a once-in-a-lifetime chance to spot this magnificent predator.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>
                                <GiJungle />
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Wildlife Safaris</h3>
                                <p className="text-sm leading-relaxed text-slate-600">See spotted deer, saltwater crocodiles, otters, wild boars, monkeys, snakes, and dozens of exotic bird species.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>
                                <GiDolphin />
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Irrawaddy & Ganges Dolphin Watching</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Experience playful dolphins surfacing along the rivers — a magical sight unique to the Sundarbans.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>
                                <GiCruiser />
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Village & EcoVillage Tours</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Meet the local community, learn their stories, taste home-cooked meals, and experience rural life beside the forest.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>
                                <MdHouseboat />
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Canal Cruising & Silent Boat Rides</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Glide through the narrowest creeks on hand-rowed boats — the most peaceful way to feel the soul of the forest.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>

                                <GiBoatFishing />
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Fishing & Crab Collection Experience</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Try your hand at traditional fishing methods and learn about the sustainable livelihood practices of forest-edge communities.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <div className='text-3xl text-orange-600'>
                                <WiSunrise />
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Sunrise & Sunset Over the Rivers</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Golden light reflecting on calm tidal water — pure magic.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 shadow-sm ">
                            <IoMdMoon />
                            <div className="mt-6">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">Night Sky & Riverside Stay</h3>
                                <p className="text-sm leading-relaxed text-slate-600">Eco-cottages beside the rivers give you the perfect escape into nature&apos;s serenity.</p>
                                <div className="mt-6">
                                    <button type="button" className="flex items-center flex-wrap justify-between gap-2 border border-gray-200 cursor-pointer text-[15px] font-medium rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-orange-100 transition-all duration-300">
                                        Explore
                                        <div className="flex items-center justify-center bg-orange-200 rounded-full w-11 h-11">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask x="0" y="0" width="18" height="18">
                                                    <rect width="18" height="18" fill="#D9D9D9"></rect>
                                                </mask>
                                                <g mask="url(#mask0_2085_52)">
                                                    <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThingsToSeeAndDo;