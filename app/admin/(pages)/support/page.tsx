import React from 'react'
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";
import {supportTabs} from "@/app/admin/component/AdminArrays";

const Support = () => {
    return (
        <>
            <span className="text-2xl font-normal text-[#602712] mb-5 px-5">Support</span>
            <CoursesTabs courses={supportTabs} />
        </>
    )
}
export default Support
