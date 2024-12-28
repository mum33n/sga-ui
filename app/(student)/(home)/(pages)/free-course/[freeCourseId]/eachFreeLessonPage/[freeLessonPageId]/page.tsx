'use client';
import React, {useState} from 'react'
import {useParams} from "next/navigation";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import {Logs} from "lucide-react";
import {
    Audio,
    PracticeLoop, Tablature,
    Video
} from "@/app/(student)/(home)/(pages)/free-course/[freeCourseId]/eachFreeLessonPage/[freeLessonPageId]/freeLessonPageTabContent";
import {StudentTabs} from "@/app/(student)/(home)/components/StudentTabs";
import {Button} from "@/components/ui/button";
import {StudentBackButton} from "@/app/(student)/(home)/components/StudentBackButton";
import FreeCourseLayout from "@/app/(student)/(home)/(pages)/free-course/[freeCourseId]/layout";
const lessonDetails = [
    {
        content: <Video />,
        title: "Video",
    },
    {
        content: <PracticeLoop />,
        title: "Practice Loop",
    },
    {
        content: <Audio />,
        title: "Audio",
    },
    {
        content: <Tablature />,
        title: "Tablature",
    },
]


const CoursePreviewPage = () => {
    const [active, setActive] = useState(false)

    const params = useParams()
    const { freeCourseId, freeLessonPageId } = params

    const eachLesson = courses.find(
        (item) => item.id === Number(freeCourseId)
    )
    if (!eachLesson) {
        return <div>Item not found</div>
    }

    const lesson = eachLesson.lessons.find(
        (item) => item.id === Number(freeLessonPageId)
    )
    if (!lesson){
        return <div>Item not found</div>
    }

    return (
        <section className="w-full relative pl-14 lg:pl-[21px] pr-[52px] lg:pr-0 font-poppins mb-[560px] lg:mb-[68px] flex gap-5">
            <div className="lg:w-[729px] w-full pt-[38px]">
                <StudentBackButton />
                <div className="mb-4 mt-6 flex w-full justify-between items-center">
                    <h1 className="text-[40px] text-[#602712] font-bold">{lesson.title}</h1>
                    <div className="lg:hidden">
                        <FreeCourseLayout active={active} setActive={setActive}>
                            <div onClick={() => {
                                setActive(!active)
                                console.log("clicked")
                            }} className="lg:hidden">
                                <Logs color="#602712"/>
                            </div>
                        </FreeCourseLayout>
                    </div>

                </div>
                <StudentTabs courses={lessonDetails}/>
                <div className="flex gap-5 w-full items-center border-t-[2px] border-t-[#602712] py-3.5">
                    <input
                        placeholder="Ask question"
                        className="h-[52px] w-full bg-[#1E1E1E0D] pl-7 rounded-lg"
                    />
                    <Button className="h-[52px] px-[35px] bg-[#602712] font-medium text-lg">Submit</Button>
                </div>
            </div>
        </section>
    )
}
export default CoursePreviewPage
