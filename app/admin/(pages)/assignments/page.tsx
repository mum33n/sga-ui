import React from 'react'
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";
import {assignmentsTab} from "@/app/admin/component/AdminArrays";

const Assignments = () => {
    return (
        <>
            <span className="text-2xl font-normal text-[#602712] mb-5 px-5">Assignments</span>
            <CoursesTabs courses={assignmentsTab} />
        </>
    )
}
export default Assignments
