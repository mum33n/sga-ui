import React from 'react'
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";
import {subscriptionTabs} from "@/app/admin/component/AdminArrays";

const Transactions = () => {
    return (
        <section>
            <h2 className="text-2xl text-[#602712] mb-6 px-5">Transactions</h2>

            <div className="px-5">
                <CoursesTabs courses={subscriptionTabs} />
            </div>
        </section>
    )
}
export default Transactions
