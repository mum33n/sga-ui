'use client';
import React, {useEffect, useState} from 'react'
import {useParams} from "next/navigation";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import {BoughtCourses, Favorite, MyDownloads, MyLessons} from "@/app/(student)/(home)/(pages)/courses/myCourseContent";
import { StudentTabs } from "@/app/(student)/(home)/components/StudentTabs";
import {StudentBackButton} from "@/app/(student)/(home)/components/StudentBackButton";

const MyCourseTabsContent = [
    {
        title: "My Lessons",
        content: <MyLessons />,
    },
    {
        title: "Bought Courses",
        content: <BoughtCourses />,
    },
    {
        title: "My Downloads",
        content: <MyDownloads />,
    },
    {
        title: "Favourite",
        content: <Favorite />,
    },
]

const MyCourseLessons = () => {
    const [tagTitle, setTagTitle] = useState<string | null>(null);

    useEffect(() => {
        const savedTabTitle = localStorage.getItem("lastTabTitle");
        if (savedTabTitle) {
            setTagTitle(savedTabTitle);
        }
    }, []);

    useEffect(() => {
        if (tagTitle) {
            localStorage.setItem("lastTabTitle", tagTitle)
        }
    }, [tagTitle]);
    const params = useParams()
    const { courseId } = params

    const eachCourse = courses.find(
        (course) => course.id === Number(courseId)
    )
    if (!eachCourse){
        return <div>Item not found</div>
    }


    return (
        <section className="w-screen pt-9 pl-[30px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            {tagTitle === "My Lessons" && <StudentBackButton/>}
            <h1 className="text-[#602712] text-[40px] font-bold">{tagTitle}</h1>
            <div className="rounded-lg lg:rounded-2xl h-[206px] lg:h-[283px] bg-cover bg-maskGroup2 mb-9"/>
            <StudentTabs courses={MyCourseTabsContent} onTabChangeAction={setTagTitle || (() => {})}/>
        </section>
    )
}

export default MyCourseLessons;