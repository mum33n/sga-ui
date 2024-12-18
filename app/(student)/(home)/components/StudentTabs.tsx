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

export function StudentTabs({ courses }: CoursesTabsProps) {
    const [activeButton, setActiveButton] = useState<number | null>(0)

    const handleChange = (index: number) => {
        setActiveButton(index);
    };

    return (
        <>
            <Tabs defaultValue={courses[0]?.title || ""} className="font-poppins overflow-x-hidden px-[6px]">
                {/* Wrap TabsTrigger items in TabsList */}
                <TabsList className="flex items-center justify-center gap-6 w-full lg:w-[753px] overflow-x-auto no-scrollbar">
                    {courses.map((course, index) => (
                        <TabsTrigger
                            key={index}
                            value={course.title}
                            onClick={() => handleChange(index)}
                            className={`w-full justify-center py-2 text-xl font-medium bg-[#F2ECE6] border border-[#E4E3E3] text-[#602712] cursor-pointer flex gap-2 items-center whitespace-nowrap rounded-lg ${
                                activeButton === index && "bg-[#602712] font-semibold text-white"
                            }`}
                        >
                            <span>
                                {course.title}
                            </span>
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