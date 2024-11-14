import * as React from "react";
import { carouselArrays } from "../component/AdminArrays";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
    return (
        <Carousel className="max-w-sm pl-3 mb-10">
            <CarouselContent className="-ml-1">
                {carouselArrays.map((item) => (
                    <CarouselItem
                        key={item.title}
                        className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1 w-fit">
                            <Card className="h-[102px] w-40 items-center justify-center overflow-hidden">
                                <CardContent
                                    className={`flex w-full h-full bg-custom-image bg-cover bg-no-repeat rounded`}
                                    style={{
                                        backgroundColor: item.color,
                                        backgroundPosition: "-350% -110%",
                                    }}
                                >
                                    <div className="flex flex-col px-5 py-[10px] justify-between">
                                        <span className="text-[18px] font-medium whitespace-nowrap">
                                            {item.title}
                                        </span>
                                        <span className="font-medium text-2xl">{item.count}</span>
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