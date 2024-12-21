'use client';
import React from 'react'
import {useParams} from "next/navigation";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import Image from "next/image";
import {Clock3, TvMinimalPlay, Infinity} from "lucide-react";
import {PiCertificate} from "react-icons/pi";
import {Button} from "@/components/ui/button";

const lessonDetails = [
    {
        icon: <Clock3 />,
        title: "Last updated 6/2024",
    },
    {
        icon: <TvMinimalPlay />,
        title: "4 hour - 23mins",
    },
    {
        icon: <Infinity />,
        title: "Full lifetime access",
    },
    {
        icon: <PiCertificate size={24} />,
        title: "Certificate of Completion",
    },
]

const CoursePreviewPage = () => {
    const params = useParams()
    const { buyCourseId, coursePreviewId } = params

    const eachLesson = courses.find(
        (item) => item.id === Number(buyCourseId)
    )
    if (!eachLesson) {
        return <div>Item not found</div>
    }

    const lesson = eachLesson.lessons.find(
        (item) => item.id === Number(coursePreviewId)
    )
    if (!lesson){
        return <div>Item not found</div>
    }

    return (
        <section className="w-full pt-[38px] pl-14 pr-[52px] font-poppins mb-[560px]">
            <h1 className="mb-[38px] text-[40px] text-[#602712] font-bold">Course Preview</h1>
            <Image
                alt="Image"
                src={lesson.image}
                className="w-full lg:w-[809px] h-[360px] lg:h-[442px] rounded-lg object-cover object-top mb-[58px]"
            />
            <h2 className="text-[#602712] text-3xl font-bold mb-2">{lesson.title}</h2>
            <p className="w-[596px] lg:w-[809px] text-[#00000080] font-normal text-lg mb-3.5">{lesson.description}</p>
            <section className="space-y-1.5 mb-4">
                {lessonDetails.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <span className="text-[#E89222]">{item.icon}</span>
                        <span className="text-[18px] text-black">{item.title}</span>
                    </div>
                ))}
            </section>
            <p className="text-[#602712] text-3xl font-bold mb-4">NGN 3,550</p>
            <div className="text-center">
                <Button className="bg-[#602712] py-[30px] px-[135px] cursor-pointer rounded-lg text-white text-2xl font-bold">Buy Now</Button>
            </div>
        </section>

    )
}
export default CoursePreviewPage
