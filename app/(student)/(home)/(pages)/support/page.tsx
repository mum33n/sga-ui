import React from 'react'
import object from '@/public/OBJECTS.png'
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Support = () => {
    return (
        <section className="w-full pt-9 pl-[55px] pr-[52px] font-poppins flex flex-col lg:flex-row gap-[46px]">
            <div>
                <h1 className="text-[24px] text-[#602712] font-bold mb-[143px]">FAQ</h1>
                <Image
                    alt="image"
                    src={object}
                />
            </div>
            {/*<div>*/}
            {/*    <Accordion type="single" collapsible className="w-full">*/}
            {/*        <AccordionItem value="item-1">*/}
            {/*            <AccordionTrigger>Is it accessible?</AccordionTrigger>*/}
            {/*            <AccordionContent>*/}
            {/*                Yes. It adheres to the WAI-ARIA design pattern.*/}
            {/*            </AccordionContent>*/}
            {/*        </AccordionItem>*/}
            {/*        <AccordionItem value="item-2">*/}
            {/*            <AccordionTrigger>Is it styled?</AccordionTrigger>*/}
            {/*            <AccordionContent>*/}
            {/*                Yes. It comes with default styles that matches the other*/}
            {/*                components&apos; aesthetic.*/}
            {/*            </AccordionContent>*/}
            {/*        </AccordionItem>*/}
            {/*        <AccordionItem value="item-3">*/}
            {/*            <AccordionTrigger>Is it animated?</AccordionTrigger>*/}
            {/*            <AccordionContent>*/}
            {/*                Yes. It&#39;s animated by default, but you can disable it if you prefer.*/}
            {/*            </AccordionContent>*/}
            {/*        </AccordionItem>*/}
            {/*    </Accordion>*/}
            {/*</div>*/}
        </section>
    )
}
export default Support
