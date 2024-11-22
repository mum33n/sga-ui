import React from 'react'
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {tutorsList, tutorsTabs} from "@/app/admin/component/AdminArrays";
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";

const Tutors = () => {
    return (
        <>
            <h2 className="text-2xl text-[#602712] mb-6 px-5">Tutors({tutorsList.length})</h2>
            <section className="px-5">
                <Button className="common-button text-base mb-6">
                    <Plus />
                    Add new tutor
                </Button>
            </section>
            <section className="px-5">
                <CoursesTabs courses={tutorsTabs} />
            </section>
        </>
    )
}
export default Tutors
