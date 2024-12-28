import React from 'react'
import {useParams} from "next/navigation";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import Image from "next/image";

export const Video = () => {
    const params = useParams()
    const { freeCourseId, freeLessonPageId } = params

    const eachLesson = courses.find(
        (item) => item.id === Number(freeCourseId)
    )

    const lesson = eachLesson.lessons.find(
        (item) => item.id === Number(freeLessonPageId)
    )
    if (!lesson){
        return <div>Item not found</div>
    }

    return (
        <section className=" pt-9 lg:pl-0 lg:pr-0 font-poppins overflow-x-hidden">
            <Image
                alt="image"
                src={lesson.image}
                className=" h-[442px] w-full rounded-sm mb-[52px] -ml-[6px] object-cover"
            />
        </section>
    )
}

export const PracticeLoop = () => {
    const params = useParams()
    const { freeCourseId, freeLessonPageId } = params

    const eachLesson = courses.find(
        (item) => item.id === Number(freeCourseId)
    )

    const lesson = eachLesson.lessons.find(
        (item) => item.id === Number(freeLessonPageId)
    )
    if (!lesson){
        return <div>Item not found</div>
    }

    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            Practice Loop
        </section>
    )
}

export const Audio = () => {
    const params = useParams()
    const { freeCourseId, freeLessonPageId } = params

    const eachLesson = courses.find(
        (item) => item.id === Number(freeCourseId)
    )

    const lesson = eachLesson.lessons.find(
        (item) => item.id === Number(freeLessonPageId)
    )
    if (!lesson){
        return <div>Item not found</div>
    }

    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">Audio</section>
    )
}

export const Tablature = () => {
    const params = useParams()
    const {freeCourseId, freeLessonPageId} = params

    const eachLesson = courses.find(
        (item) => item.id === Number(freeCourseId)
    )

    const lesson = eachLesson.lessons.find(
        (item) => item.id === Number(freeLessonPageId)
    )
    if (!lesson){
        return <div>Item not found</div>
    }

    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            Tablature
        </section>
    )
}
