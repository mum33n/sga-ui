'use client';
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import music from "@/public/music.jpg"
import music1 from "@/public/music1.jpg"
import music2 from "@/public/music2.jpg"
import music3 from "@/public/music3.jpeg"
import Image from "next/image";
import {GiPlainCircle} from "react-icons/gi";

const images = [music, music1, music2, music3]


export function HomeCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="mx-auto max-w-xs px-4 overflow-x-hidden flex flex-col items-center">
            <Carousel setApi={setApi} className="w-full max-w-xs">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex w-[280px] h-[176px] items-center justify-center">
                                    <Image
                                        alt="image"
                                        src={image}
                                        className="w-full h-full rounded-lg"
                                        // width={500}
                                        // height={176}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground flex gap-3.5 mt-2.5">
                {
                    images.map((_, index) => (
                        <GiPlainCircle
                            key={index}
                            className={`cursor-pointer ${current - 1 === index ? "text-[#401A0C]" : "text-[#D9D9D9]"}`}
                            size={10}
                        />
                    ))
                }
            </div>
        </div>
    )
}
