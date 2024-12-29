'use client';
import React from 'react'
import Image from "next/image";
import {Clock3, TvMinimalPlay} from "lucide-react";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import Link from "next/link";

const Course = () => {
    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            <h1 className="font-bold text-[40px] text-[#602712] font-poppins mb-5">My Course</h1>
            <div className="rounded-lg lg:rounded-2xl h-[206px] lg:h-[283px] bg-cover bg-e mb-9"/>
            <section className="w-full flex flex-wrap gap-5 mb-5">
                {
                    courses.map((course) => (
                        <Link key={course.id} href={`/courses/${course.id}`}>
                            <div className="w-[229px] lg:w-[300px] h-[268px] lg:h-[276px] py-4 px-2 text-center shadow-custom bg-[#A8533408] cursor-pointer">
                                <div className="w-full relative mb-2">
                                    <Image
                                        alt="image"
                                        src={course.image}
                                        className="w-full h-[110px] lg:h-[118px] object-cover object-top rounded-lg"
                                    />
                                    <span
                                        className="absolute top-1.5 right-1.5 px-1 rounded-sm bg-[#EDA84E] text-white text-sm font-bold">{course.unknownNumber}</span>
                                </div>
                                <h1 className="font-bold text-lg text-[#602712] mb-2">{course.title.slice(0, 19)}{course.title.length > 19 && "..."}</h1>
                                <p className="font-medium text-sm text-[#858585] text-justify mb-6">{course.description.slice(0, 55)}</p>
                                <div className="flex justify-between">
                                    <div className="flex gap-1.5 px-1.5 py-1 rounded-lg bg-[#602712] w-fit">
                                        <span><TvMinimalPlay color="white" size={20}/></span>
                                        <span
                                            className="text-sm font-medium text-white whitespace-nowrap">{course.lessonsCount}</span>
                                    </div>
                                    <div className="flex gap-1.5 px-1.5 py-1 rounded-lg w-fit text-[#602712]">
                                        <span><Clock3 color="#602712" size={20}/></span>
                                        <span className="text-sm font-medium whitespace-nowrap">01:08:55</span>
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
export default Course
