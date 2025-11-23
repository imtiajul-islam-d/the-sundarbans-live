import React from 'react';
// import { Image } from "@heroui/image"
import Image from 'next/image';
import { Button } from "@heroui/button"
import { Card, CardHeader, CardFooter, } from "@heroui/card";

const Categories = () => {
    return (
        <section className='px-2 mx-auto mt-2 md:mt-7 lg:mt-10 max-w-7xl'>
            <div>
                <h2 className='mt-2 font-sans uppercase text-lg sm:text-xl tracking-[4px]'>Let&apos;s keep in mind,</h2>
            </div>
            {/* <div className='max-w-4xl mt-4'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur commodi itaque aperiam inventore eos doloribus aliquid magnam quam, veniam laboriosam consequuntur molestias similique quis dolore accusantium obcaecati cupiditate cumque at debitis officiis qui rerum? Non consectetur amet et. Quae modi quidem quis nobis enim, quibusdam exercitationem delectus voluptates aliquam.</p>
            </div> */}
            <div className="grid grid-cols-12 grid-rows-2 gap-2 ">
                <Card className="col-span-12 rounded-none sm:col-span-4 aspect-square">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start!">
                        <p className="font-sans font-bold tracking-widest text-white uppercase text-tiny">What to watch</p>
                        <h4 className="font-medium text-white text-large">Stream the Acme event</h4>
                    </CardHeader>
                    <Image
                        width={500}
                        height={400}
                        alt="Card background"
                        className="z-0 object-cover w-full h-full rounded-none"
                        src={"/images/banner/banner2.jpg"}
                    />
                </Card>
                <Card className="col-span-12 rounded-none sm:col-span-4 aspect-square">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start!">
                        <p className="font-sans font-bold tracking-widest text-white uppercase text-tiny">Plant a tree</p>
                        <h4 className="font-medium text-white text-large">Contribute to the planet</h4>
                    </CardHeader>
                    <Image
                        width={500}
                        height={400}
                        alt="Card background"
                        className="z-0 object-cover w-full h-full rounded-none"
                        src={"/images/banner/banner3.jpg"}
                    />
                </Card>
                <Card className="col-span-12 rounded-none sm:col-span-4 aspect-square">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start!">
                        <p className="font-sans font-bold tracking-widest text-white uppercase text-tiny">Supercharged</p>
                        <h4 className="font-medium text-white text-large">Creates beauty like a beast</h4>
                    </CardHeader>
                    <Image
                        width={500}
                        height={400}
                        alt="Card background"
                        className="z-0 object-cover w-full h-full rounded-none"
                        src={"/images/banner/banner4.jpg"}
                    />
                </Card>
                <Card isFooterBlurred className="w-full col-span-12 rounded-none aspect-square sm:aspect-auto sm:col-span-5">
                    <CardHeader className="absolute z-10 flex-col items-start top-1">
                        <p className="font-sans font-bold tracking-widest text-white uppercase text-tiny">New</p>
                        <h4 className="text-2xl font-medium text-white">Acme camera</h4>
                    </CardHeader>
                    <Image
                        width={500}
                        height={400}
                        alt="Card example background"
                        className="z-0 object-cover w-full h-full scale-125 -translate-y-6 rounded-none"
                        src={"/images/banner/banner5.jpg"}
                    />
                    <CardFooter className="absolute bottom-0 z-10 justify-between rounded-none bg-white/30 border-t-1 border-zinc-100/50">
                        <div className=''>
                            <p className="text-white text-tiny">The largest one</p>
                            <p className="text-white text-tiny">Want to know about it?</p>
                        </div>
                        <Button className="text-white bg-orange-500 rounded-none" size="sm">
                            Learn More
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full col-span-12 rounded-none aspect-square sm:aspect-video sm:col-span-7">
                    <CardHeader className="absolute z-10 flex-col items-start top-1">
                        <p className="font-sans font-bold tracking-widest text-white uppercase text-tiny">Your day your way</p>
                        <h4 className="text-xl font-medium text-white">Your checklist for better sleep</h4>
                    </CardHeader>
                    <Image
                        width={500}
                        height={400}
                        alt="Relaxing app background"
                        className="z-0 object-cover w-full h-full rounded-none "
                        src={"/images/banner/banner6.jpg"}
                    />
                    <CardFooter className="absolute bottom-0 z-10 rounded-none bg-black/40 border-t-1 border-default-600">
                        <div className="flex items-center gap-2 grow">

                            <div className="flex flex-col">
                                <p className="text-white text-tiny">Breathing</p>
                                <p className="text-white text-tiny">Get a good night&#39;s sleep.</p>
                            </div>
                        </div>
                        <Button className='rounded-none' size="sm">
                            Details
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};

export default Categories;