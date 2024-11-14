'use server';

import React from 'react'
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";
import {adminPagesNavArrays} from "@/app/admin/component/AdminArrays";

const Courses = () => {
    return (
        <>
            <div className="px-5">
                <CoursesTabs courses={adminPagesNavArrays} />
            </div>
        </>
    )
}
export default Courses
