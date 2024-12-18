import React from 'react'
import {StudentTabs} from "@/app/(student)/(home)/components/StudentTabs";
import {Advance, Amateur, Beginners, Intermediate} from "@/app/(student)/(home)/(pages)/curriculum/curriculumContent";

const studentTabsContent = [
    {
        title: "Beginners",
        content: <Beginners />,
    },
    {
        title: "Amateur",
        content: <Amateur />,
    },
    {
        title: "Intermediate",
        content: <Intermediate />,
    },
    {
        title: "Advance",
        content: <Advance />,
    },
]

const Curriculum = () => {
    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            <h1 className="font-bold text-[40px] text-[#602712] font-poppins mb-5">Our Curriculum</h1>
            <div className="rounded-lg lg:rounded-2xl h-[206px] lg:h-[283px] bg-cover bg-maskGroup mb-9"/>
            <StudentTabs courses={studentTabsContent}/>
        </section>
    )
}
export default Curriculum
