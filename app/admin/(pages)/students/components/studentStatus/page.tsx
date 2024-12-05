import React from 'react'
import {BackButton} from "@/app/admin/component/reuseables";
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";
import {adminStudentStatusTab} from "@/app/admin/component/AdminArrays";

const StudentStatus = () => {
    return (
        <>
            <BackButton />
            <section>
                <CoursesTabs courses={adminStudentStatusTab} />
            </section>
        </>

    )
}
export default StudentStatus
