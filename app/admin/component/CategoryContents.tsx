'use client';

import React, {useState} from 'react'
import {Trash2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {categoryCoursesBeginner as initialCourses} from "@/app/admin/component/AdminArrays";
import Image from 'next/image'

export const BeginnerContent = () => {
    const [courses, setCourses] = useState(initialCourses)
    const handleDelete = (indexToDelete: number) => {
        setCourses((prevCourses) => prevCourses.filter((_, index) => index !== indexToDelete));
    }

    return (
        <section className="flex flex-wrap">
            {
                courses.map((course, index) => (
                    // The box
                    <div key={index} className="w-[348px] border border-[#F0EAE8] py-6 px-3 mt-5 rounded-lg cursor-pointer">
                        <Image
                            src={course.image}
                            alt=""
                            width={320}
                            height={160}
                            className="w-80 h-40 rounded-[6px] mb-3.5 object-cover"
                        />
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-col gap-1.5 text-[#602712]">
                                <span className="text-lg font-bold w-56">{course.title.slice(0, 20)}</span>
                                <span className="text-[16px]">{course.description.slice(0, 30)} ...</span>
                            </div>
                            <span className="pt-1 whitespace-nowrap">{course.lesson} lessons</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <Trash2
                                strokeWidth={'1.25px'}
                                size={20}
                                color={"#D1831F"}
                                onClick={() => handleDelete(index)}
                            />
                            <Button className="bg-[#602712] text-[16px]">
                                Edit
                            </Button>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}



export const AmateurContent = () => {
    return (
        <div className="mt-5">AmateurContent</div>
    )
}
export default AmateurContent



export const IntermediateContent = () => {
    return (
        <div className="mt-5">IntermediateContent</div>
    )
}



export const AdvanceContent = () => {
    return (
        <div className="mt-5">AdvanceContent</div>
    )
}
