'use client';
import React from 'react'
import {useParams} from "next/navigation";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import {BackButton} from "@/app/admin/component/reuseables";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"

const BuyCourseItem = () => {
    const params = useParams();
    const { buyCourseId } = params;

    const eachCourse = courses.find(
        (item) => item.id === Number(buyCourseId)
    );
    if (!eachCourse) {
        return <div>Item not found</div>;
    }

    return (
        <>
            <section className="pt-9 pl-14 pr-[52px] font-poppins">
                <BackButton/>
                <div className="mb-4 flex w-full justify-between items-center">
                    <h1 className="text-[40px] text-[#602712] font-bold">{eachCourse.title.slice(0, 18)}{eachCourse.title.length > 18 && "..."}</h1>
                    <div className="px-8 py-2 h-fit bg-[#602712] text-base font-bold text-white content-center rounded-lg">{eachCourse.lessonsCount}</div>
                </div>
                <section className="flex flex-col w-full gap-3.5">
                    {eachCourse.lessons.map((course, index) => (
                        <>
                            <div key={index}
                                 className="flex gap-6 w-full h-[169px] max-h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                                <Image
                                    alt="image"
                                    src={course.image}
                                    className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                                />
                                <div className="flex flex-col justify-center">
                                    <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                                    <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 50)}{course.description.length > 80 && "..."}</p>
                                    <Progress className="" value={course.progress}/>
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            </section>
        </>
    )
}
export default BuyCourseItem
