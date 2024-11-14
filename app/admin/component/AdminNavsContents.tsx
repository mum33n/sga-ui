import React from 'react'
import {categoryCoursesArray} from "@/app/admin/component/AdminArrays";
import {EllipsisVertical, PencilLine, Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";

export const AdminNavsContents = () => {
    return (
        <>
            <div className="flex w-[55%] justify-between text-[#4F4F4F] mt-9 pl-4">
                <span>Category</span>
                <span>Courses</span>
            </div>
            <div className="mt-4">
                {categoryCoursesArray.map((course, index: number) => (
                    <div key={index} style={{backgroundColor: course.color}}
                         className={`w-full h-24 flex  px-4 justify-between items-center`}>
                        <span className="flex gap-2 items-center">
                            <h1 className="font-normal text-lg">{course.title}</h1>
                            <PencilLine color={'#A85334'} size={18}/>
                        </span>
                        <p className="text-lg">{course.count}</p>
                        <Button
                            className="py-[5px] px-7 text-lg bg-white text-[#A85334] border border-[#A85334]"
                        >
                            View
                        </Button>
                    </div>
                ))}
            </div>
        </>
    )
}

export const FreeCourses = () => {
    const videoTitle: string = 'Introduction Message'

    return (
        <>
            <div className="mb-6 flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                    <Checkbox className="w-6 h-5 border-[#F0EAE8]" id="terms"/>
                    <label
                        htmlFor="terms"
                        className="text-[16px] font-normal whitespace-nowrap leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Select
                    </label>
                </div>
                <Button className="bg-[#A85334] text-[16px]">
                    <Plus/> Add course
                </Button>
            </div>
            <div>
                <iframe
                    className="aspect-video w-full mb-4 rounded-lg"
                    src="https://www.youtube.com/embed/cpP-fCo8Dn4?si=eBue2DNGeMXYGf6d"
                    title={videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2.5">
                        <span className="text-base">{videoTitle}</span>
                        <span className="text-sm text-[#1E1E1E80]">10:21</span>
                    </div>
                    <EllipsisVertical
                        color={'#E89222'}
                        size={20}
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </>
    )
}
