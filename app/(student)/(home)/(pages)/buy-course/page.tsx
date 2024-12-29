'use client';
import React from 'react'
import Image from "next/image";
import {Clock3, TvMinimalPlay} from "lucide-react";
import Link from "next/link";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";


const BuyCourse = () => {
    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            <h1 className="font-bold text-[40px] text-[#602712] font-poppins mb-5">Buy Course</h1>
            <div className="rounded-lg lg:rounded-2xl h-[206px] lg:h-[283px] bg-cover bg-e mb-9"/>
            <section className="w-full flex flex-wrap gap-5 mb-5">
                {
                    courses.map((course, index) => (
                        <Link key={index} href={`/buy-course/${course.id}`}>
                            <div className="w-[229px] lg:w-[300px] h-[300px] lg:h-fit py-2 px-2 rounded-lg text-center shadow-custom bg-[#A8533408] cursor-pointer">
                                <div className="w-full relative mb-2">
                                    <Image
                                        alt="image"
                                        src={course.image}
                                        className="w-full h-[110px] lg:h-[118px] object-cover object-top rounded-lg"
                                    />
                                    <span
                                        className="absolute top-1.5 right-1.5 px-1 rounded-sm bg-[#EDA84E] text-white text-sm font-bold">BUY</span>
                                </div>
                                <h1 className="font-bold text-lg text-[#602712] mb-2">{course.title.slice(0, 19)}{course.title.length > 19 && "..."}</h1>
                                <p className="font-medium text-sm text-[#858585] text-justify mb-4">{course.description.slice(0, 45)}{course.description.length > 19 && "..."}</p>
                                <div className="flex justify-evenly flex-wrap items-center">
                                    <div className="flex gap-1.5 rounded-lg w-fit text-[#602712]">
                                        <span><TvMinimalPlay color="#602712" size={20}/></span>
                                        <span
                                            className="text-sm font-medium whitespace-nowrap">{course.lessonsCount}</span>
                                    </div>
                                    <div className="flex gap-1.5 rounded-lg w-fit text-[#602712]">
                                        <span><Clock3 color="#602712" size={20}/></span>
                                        <span className="text-sm font-medium whitespace-nowrap">{course.duration}</span>
                                    </div>
                                    <div className="flex justify-center items-center mt-3 lg:mt-0 text-white font-bold text-center">
                                        <span className="w-fit px-2 py-0.5 rounded-lg bg-[#602712]">#3,550</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </section>
        </section>
    )
}
export default BuyCourse
