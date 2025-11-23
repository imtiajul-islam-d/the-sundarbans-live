import React from 'react';
import { FcLandscape } from "react-icons/fc";
import { GiKiwiBird, GiRiver, GiTigerHead } from 'react-icons/gi';

const Statistics = () => {
    return (
        <section className='mt-8 lg:mt-24'>
            <div className="px-6 py-16 bg-gray-800">
                <div className="grid max-w-6xl mx-auto lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-10">
                    <div className="flex items-center gap-6">
                        <span className='text-5xl'>
                            <FcLandscape />
                        </span>
                        <div>
                            <h3 className="text-4xl font-semibold text-white">10,000+</h3>
                            <p className="mt-1 text-base text-slate-300"> sq. km</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className='text-5xl text-orange-500'>
                            <GiTigerHead />
                        </span>
                        <div>
                            <h3 className="text-4xl font-semibold text-white">100+</h3>
                            <p className="mt-1 text-base text-slate-300"> Tigers</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className='text-5xl text-green-600'>
                            <GiKiwiBird />
                        </span>
                        <div>
                            <h3 className="text-4xl font-semibold text-white">260+</h3>
                            <p className="mt-1 text-base text-slate-300"> Bird species</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className='text-5xl text-orange-500'>
                            <GiRiver />
                        </span>
                        <div>
                            <h3 className="text-4xl font-semibold text-white">400+</h3>
                            <p className="mt-1 text-base text-slate-300"> Rivers, canals & creeks</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Statistics;