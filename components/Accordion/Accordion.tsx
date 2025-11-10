"use client"
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function Accordion_comp() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <section className="max-w-[1440px] mx-auto mt-16 lg:mt-36 px-2">
            <div className='mb-8 md:mb-10 lg:mb-12'>
                <h3 className='max-w-2xl px-2 mx-auto font-sans text-xl font-semibold text-center uppercase sm:px-6 md:text-2xl'>Our guests usually <span className='text-orange-600'> asks</span> the following questions.</h3>
            </div>
            <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
                <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </section>
    );
}
