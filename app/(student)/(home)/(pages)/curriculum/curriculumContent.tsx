import React from 'react'
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {curriculumArray} from "@/app/(student)/(home)/(pages)/curriculum/curriculumArrays";

export const Beginners = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit lg:px-9 bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {curriculumArray.map((course, index) => (
                    course.level === "Beginner" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 80)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}


export const Amateur = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit lg:px-9 bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {curriculumArray.map((course, index) => (
                    course.level === "Amateur" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 70)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export const Intermediate = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit lg:px-9 bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {curriculumArray.map((course, index) => (
                    course.level === "Intermediate" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 80)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export const Advance = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit lg:px-9 bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {curriculumArray.map((course, index) => (
                    course.level === "Advance" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] max-h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 80)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}