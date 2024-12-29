'use client';
import React from 'react'
import Image from "next/image";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import Link from "next/link";

const allLessons = courses
    .slice(0, 2)
    .flatMap(course => course.lessons.map(lesson => ({ ...lesson, courseId: course.id })));

const FreeLessons = () => {
    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            <h1 className="font-bold text-[40px] text-[#602712] font-poppins mb-5">Free Lessons</h1>
            <div className="rounded-lg lg:rounded-2xl h-[206px] lg:h-[283px] bg-cover bg-maskGroup mb-9"/>
            <section className="flex flex-col w-full gap-3.5">
                {allLessons.map((lesson, index) => (
                    <Link key={index} href={`/free-course/${lesson.courseId}/eachFreeLessonPage/${lesson.id}`}>
                        <div key={index}
                             className="flex gap-6 w-full h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                            <Image
                                alt="image"
                                src={lesson.image}
                                className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                            />
                            <div className="flex flex-col">
                                <h1 className="font-bold text-2xl text-[#602712] mb-2">{lesson.title}</h1>
                                    <p className="font-semibold text-lg text-[#454545] mb-4">{lesson.description.slice(0, 80)}{lesson.description.length > 80 && "..."}</p>
                                <div className="flex justify-between items-center text-[#E89222] font-bold text-base">
                                    <p className="">FREE</p>
                                    <p className="">{lesson.lessons}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </section>
    )
}
export default FreeLessons
