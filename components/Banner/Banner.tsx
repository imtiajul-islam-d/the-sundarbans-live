import React from 'react';
import Banner_slider from './Banner_slider';

const Banner = () => {
    return (
        <section className='px-2 mx-auto mt-2 mb-8 max-w-7xl lg:mb-16'>
            <div className='' >
                {/* <div>
                    <h2 className='mt-2 font-sans uppercase text-lg sm:text-xl tracking-[4px] font-semibold'>You could explore the best memory</h2>
                </div> */}
                {/* <div className='max-w-4xl mt-4'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur commodi itaque aperiam inventore eos doloribus aliquid magnam quam, veniam laboriosam consequuntur molestias similique quis dolore accusantium obcaecati cupiditate cumque at debitis officiis qui rerum? Non consectetur amet et. Quae modi quidem quis nobis enim, quibusdam exercitationem delectus voluptates aliquam.</p>
                </div> */}
            </div>
            <Banner_slider />
        </section>
    );
};

export default Banner;