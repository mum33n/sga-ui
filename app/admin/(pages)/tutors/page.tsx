import React from 'react'
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {tutorsList, tutorsTabs} from "@/app/admin/component/AdminArrays";
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";

const Tutors = () => {
    return (
        <>
            <section className="px-5 md:flex md:justify-between">
                <h2 className="text-2xl text-[#602712] mb-6">Tutors({tutorsList.length})</h2>
                <Button className="common-button text-base mb-6 md:flex md:justify-between">
                    <Plus/>
                    Add new tutor
                </Button>
            </section>
            <section className="px-5">
                <CoursesTabs courses={tutorsTabs}/>
            </section>
        </>
    )
}
export default Tutors
