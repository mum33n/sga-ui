'use client';

//This component is created to serve as a reusable component the Tabs in admin
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";

type Course = {
    title: string;
    count?: number;
    content?: React.ReactNode;
    head?: string;
};

type CoursesTabsProps = {
    courses: Course[]; // Only an array of Course objects is allowed
    onTabChangeAction?: (title: string) => void;
};


export function StudentTabs({ courses, onTabChangeAction }: CoursesTabsProps) {
    const [activeButton, setActiveButton] = useState<number>(0);

    useEffect(() => {
        const savedButton = localStorage.getItem("activeButton");
        if (savedButton !== null) {
            setActiveButton(parseInt(savedButton, 10));
        }
    }, []);

    const handleChange = (index: number) => {
        setActiveButton(index);
        onTabChangeAction(courses[index].title || "")
        localStorage.setItem("activeButton", index.toString());
    };

    return (
        <>
            <Tabs
                value={courses[activeButton]?.title || courses[0]?.title} // Dynamically set tab based on activeButton
                className="font-poppins overflow-x-hidden px-[6px]"
            >
                <TabsList className="flex items-center justify-center gap-6 w-full lg:max-w-[753px] overflow-x-auto no-scrollbar">
                    {courses.map((course, index) => (
                        <TabsTrigger
                            key={index}
                            value={course.title}
                            onClick={() => handleChange(index)}
                            className={`w-full justify-center py-2 text-xl font-medium bg-[#F2ECE6] border border-[#E4E3E3] text-[#602712] cursor-pointer flex gap-2 items-center whitespace-nowrap rounded-lg ${
                                activeButton === index && "bg-[#602712] font-semibold text-white"
                            }`}
                        >
                            <span>{course.title}</span>
                            {course.count && <span>({course.count})</span>}
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
