import React from 'react'
import {BackButton} from "@/app/admin/component/reuseables";
import {
    TransactionsAll,
    TransactionsPending,
    TransactionsSuccessful
} from "@/app/(student)/(home)/(pages)/transactions/TransactionsContent";
import {StudentTabs} from "@/app/(student)/(home)/components/StudentTabs";

const transactionsTab = [
    {
        title: 'All',
        content: <TransactionsAll />,
    },
    {
        title: 'Successful',
        content: <TransactionsSuccessful />,
    },
    {
        title: 'Pending',
        content: <TransactionsPending />,
    },
]

const Transactions = () => {
    return (
        <section className="w-full pt-9 pl-5 pr-[52px] font-poppins">
            <BackButton/>
            <h1 className="text-[24px] text-[#602712] font-bold mb-[73px]">Assignments</h1>
            <StudentTabs courses={transactionsTab} />
        </section>
    )
}
export default Transactions
