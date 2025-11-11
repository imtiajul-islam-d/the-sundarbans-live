import React from 'react';
import { TfiHome } from 'react-icons/tfi';

const MobileDrawer = ({ dropdown, setDropdown }) => {
    return (
        <section className='fixed top-0 left-0 z-50 overflow-scroll bg-transparent backdrop-blur-sm w-svw h-svh'>
            <div className='relative'>
                <div className='absolute top-0 right-0 bg-gray-700 w-svw min-h-svh'>
                    <div className='flex items-center justify-between px-4 py-4 border-b border-gray-500 font-epic'>
                        <h2 className='text-5xl text-gray-300 xs:text-6xl md:text-7xl font-epic'>The Sundarbans</h2>
                        <button className='py-3 text-5xl text-gray-200 bg-orange-500 px-7' onClick={() => setDropdown((e) => !e)}>X</button>
                    </div>
                    {/* navbar content */}
                    <div className='mx-4 mt-8'>
                        <div className="relative px-4 pb-8 tracking-wide sm:px-12">
                            <div className="relative max-w-screen-xl mx-auto ">
                                <div className="relative z-20 grid grid-cols-1 gap-8 ">
                                    <div>
                                        {/* <h2 className="mb-6 text-base font-medium text-white">Company</h2> */}
                                        <ul className="space-y-5">
                                            <li onClick={() => setDropdown((e) => !e)}>
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" className="inline mr-1.5 h-[18px] w-[18px] shrink-0">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                                    About
                                                </a>
                                            </li>
                                            <li onClick={() => setDropdown((e) => !e)}>
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" className="inline mr-1.5 h-[18px] w-[18px] shrink-0">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                                    About
                                                </a>
                                            </li>
                                            <li onClick={() => setDropdown((e) => !e)}>
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" className="inline mr-1.5 h-[18px] w-[18px] shrink-0">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                                    About
                                                </a>
                                            </li>
                                            <li onClick={() => setDropdown((e) => !e)}>
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" className="inline mr-1.5 h-[18px] w-[18px] shrink-0">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                                    About
                                                </a>
                                            </li>
                                            <li onClick={() => setDropdown((e) => !e)}>
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" className="inline mr-1.5 h-[18px] w-[18px] shrink-0">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                                    About
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <address className='text-orange-300'>Please wait for the more information about The-Sundarbans, The website it under development.</address>
                                    {/* hr */}
                                    <div className=''>
                                        <hr className="my-8 border-gray-600" />

                                        <div className="relative z-20 gap-6 ">
                                            <div className="flex space-x-5">
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-transition-all">
                                                    <svg className="w-6 h-6 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                  .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"></path>
                                                    </svg>
                                                </a>
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-transition-all">
                                                    <svg className="w-6 h-6 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                      0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <a href="javascript:void(0)" className="text-slate-400 hover:text-white text-[15px] inline-transition-all">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 fill-gray-400 hover:fill-white"
                                                        viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd"
                                                            d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileDrawer;