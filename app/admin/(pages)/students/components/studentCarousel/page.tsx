import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { studentCarouselContent } from "@/app/admin/component/AdminArrays";
import Link from "next/link";

export function StudentCarousel() {
    return (
        <Carousel className="max-w-sm md:max-w-screen-2xl pl-3 mb-10">
            <CarouselContent className="-ml-1  md:space-x-2">
                {studentCarouselContent.map((item) => (
                    <CarouselItem
                        key={item.id}
                        className="pl-1"
                    >
                        <div className="p-1 w-fit">
                            <Link href={`/admin/students/components/studentCarousel/${item.id}`}>
                                <Card className="h-[152px] w-[203px] items-center justify-center overflow-hidden">
                                    <CardContent
                                        className={`flex w-full h-full bg-custom-image bg-cover bg-no-repeat rounded`}
                                        style={{
                                            backgroundColor: item.color,
                                            backgroundPosition: "-120% -110%",
                                        }}
                                    >
                                        <div className={`flex flex-col px-5 py-[10px] pt-7 pb-7 text-white`}>
                                            <span className={`mb-1 text-sm ${item.title === 'Without plan' && 'invisible'}`}>
                                                {/*{item.title !== 'Without plan' && 'Plan'}*/}
                                                Plan
                                            </span>
                                            <span className={`text-sm font-bold whitespace-nowrap mb-[25px] ${item.title === 'Without plan' && 'font-normal'}`}>
                                            {item.title}
                                        </span>
                                            <span className="font-medium text-3xl">{item.count}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
