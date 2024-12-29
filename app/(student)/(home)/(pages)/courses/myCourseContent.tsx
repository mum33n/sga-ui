import React from 'react'
import Image from "next/image";
import {Progress} from "@/components/ui/progress";
import {useParams} from "next/navigation";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";


export const MyLessons = () => {
    const params = useParams()
    const { courseId } = params

    const eachCourse = courses.find(
        (course) => course.id === Number(courseId)
    )
    if (!eachCourse){
        return <div>Item not found</div>
    }

    return (
        <section className="flex flex-col w-full gap-3.5 mt-9">
            {eachCourse.lessons.map((course, index) => (
                <section key={index}>
                    <div className="flex gap-6 w-full h-[169px] max-h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
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
                </section>
            ))}
        </section>
    )
}

export const BoughtCourses = () => {
    return (
        <div>BoughtCourses</div>
    )
}

export const MyDownloads = () => {
    const params = useParams()
    const { courseId } = params

    const eachCourse = courses.find(
        (course) => course.id === Number(courseId)
    )
    if (!eachCourse){
        return <div>Item not found</div>
    }

    return (
        <section className="flex flex-col w-full gap-3.5 mt-9">
            {eachCourse.lessons.map((course, index) => (
                <section key={index}>
                    <div className="flex gap-6 w-full h-[169px] max-h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
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
                </section>
            ))}
        </section>
    )
}

export const Favorite = () => {
    const params = useParams()
    const { courseId } = params

    const eachCourse = courses.find(
        (course) => course.id === Number(courseId)
    )
    if (!eachCourse){
        return <div>Item not found</div>
    }

    return (
        <section className="flex flex-col w-full gap-3.5 mt-9">
            {eachCourse.lessons.map((course, index) => (
                <section key={index}>
                    <div className="flex gap-6 w-full h-[169px] max-h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
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
                </section>
            ))}
        </section>
    )
}
