import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { studentCarouselContent } from "@/app/admin/component/AdminArrays";

export function StudentCarousel() {
    return (
        <Carousel className="max-w-sm pl-3 mb-10">
            <CarouselContent className="-ml-1">
                {studentCarouselContent.map((item) => (
                    <CarouselItem
                        key={item.title}
                        className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1 w-fit">
                            <Card className="h-[152px] w-[203px] items-center justify-center overflow-hidden">
                                <CardContent
                                    className={`flex w-full h-full bg-custom-image bg-cover bg-no-repeat rounded`}
                                    style={{
                                        backgroundColor: item.color,
                                        backgroundPosition: "-120% -110%",
                                    }}
                                >
                                    <div className="flex flex-col px-5 py-[10px] pt-7 pb-7 text-white">
                                        <span className="mb-1 text-sm">Plan</span>
                                        <span className="text-sm font-bold whitespace-nowrap mb-[25px]">
                                            {item.title} MONTH
                                        </span>
                                        <span className="font-medium text-3xl">{item.count}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
