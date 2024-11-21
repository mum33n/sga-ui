'use client';

//This component is created to serve as a reusable component the Tabs in admin
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import React, { useState } from "react";

type Course = {
    title: string;
    count?: number;
    content?: React.ReactNode;
    head?: string;
};

type CoursesTabsProps = {
    courses: Course[];// Only an array of Course objects is allowed
};

export function CoursesTabs({ courses }: CoursesTabsProps) {
    const [activeButton, setActiveButton] = useState<number | null>(0);

    const handleChange = (index: number) => {
        setActiveButton(index);
    };

    return (
        <>
            <h1 className="font-normal text-2xl overflow-x-hidden mb-5">{courses[activeButton].head}</h1>
            <Tabs defaultValue={courses[0]?.title || ""} className="">
                {/* Wrap TabsTrigger items in TabsList */}
                <TabsList className="flex items-end border-b-2 border-[#F0EAE8] overflow-x-auto no-scrollbar">
                    {courses.map((course, index) => (
                        <TabsTrigger
                            key={index}
                            value={course.title}
                            onClick={() => handleChange(index)}
                            className={`px-6 py-2 text-lg cursor-pointer flex gap-2 items-center whitespace-nowrap ${
                                activeButton === index ? "border-[#602712] bg-[#FDF4E9] border-b-2 text-[#602712]" : ""
                            }`}
                        >
                            <span>{course.title}</span>
                            {
                                course.count && <span>({course?.count})</span>
                            }

                        </TabsTrigger>
                    ))}
                </TabsList>

                {courses.map((course, index) => (
                    <TabsContent key={index} value={course.title}>
                        <div>{course.content}</div>
                    </TabsContent>
                ))}
            </Tabs>
        </>
    );
}