import React, {useState} from 'react'
import {X} from "lucide-react";
import Link from "next/link";
import {courses} from "@/app/(student)/(home)/(pages)/buy-course/components/Arrays";
import {useParams} from "next/navigation";

// const allLessons = courses
//     .flatMap(course => course.id);

const courseContentSidebar = [
    {
        link: '#',
        title: "Introduction Message",
    },
    {
        link: '#',
        title: "Make Lessons Load Faster",
    },
    {
        link: '#',
        title: "Let’s Play",
    },
    {
        link: '#',
        title: "Beginner’s Finger Exercise",
    },
    {
        link: `/free-course/${1}/assignment`,
        title: "Assignment",
    },
]

const FreeCourseRightSideBar = ({active, setActive}) => {
    const [currentMenu, setCurrentMenu] = useState(0)

    return (
        <section className="font-poppins">
            <div className={`absolute flex-col gap-9 right-0 top-0 w-[305px] h-[900px] rounded-tl-lg pt-7 pl-5 pr-3.5 border-l border-l-[#1C1C1C1A] bg-white ml-10 ${active ? "flex" : "hidden"}`}>
                <div className="flex justify-between w-full">
                    <span className="text-[20px] font-medium text-[#602712]">Course Content</span>
                    <span onClick={() => setActive(!active)}><X/></span>
                </div>
                <ul className="flex flex-col gap-8">
                    {courseContentSidebar.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <li
                                className={`h-[44px] w-full text-lg  content-center pl-3 ${currentMenu === index ? "font-medium text-[#602712] border-l border-l-[#602712] bg-[#D06B0D1A]" : "text-lg text-[#60271280]"}`}
                                onClick={() => setCurrentMenu(index)}
                            >
                                {item.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className={`flex-col gap-9 w-[305px] h-[900px] rounded-tl-lg pt-7 pl-5 pr-4 border-l border-l-[#1C1C1C1A] bg-white hidden lg:flex`}>
                <div className="flex justify-between w-full">
                    <span className="text-[20px] font-medium text-[#602712]">Course Content</span>
                </div>
                <ul className="flex flex-col gap-8">
                    {courseContentSidebar.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <li
                                className={`h-[44px] w-full text-lg  content-center pl-3 ${currentMenu === index ? "font-medium text-[#602712] border-l border-l-[#602712] bg-[#D06B0D1A]" : "text-lg text-[#60271280]"}`}
                                onClick={() => setCurrentMenu(index)}
                            >
                                {item.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default FreeCourseRightSideBar
