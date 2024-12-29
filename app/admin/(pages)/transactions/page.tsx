'use client';
import React, {useState} from 'react'
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";
import {subscriptionTabs} from "@/app/admin/component/AdminArrays";
import {PaginationDemo} from "@/app/admin/component/Pagination";

const Transactions = () => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <section>
            <h2 className="text-2xl text-[#602712] mb-6 px-5">Transactions</h2>
            <div className="px-5">
                <CoursesTabs courses={subscriptionTabs} />
            </div>
            {/*<div className="mt-80" />*/}
            <PaginationDemo currentPage={currentPage} />
        </section>
    )
}
export default Transactions
