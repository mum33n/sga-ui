import React from 'react'
// import Layout from "./layout"
import {CarouselSpacing} from "@/app/admin/component/AdminCarousel";
import {Bunchbutts} from "@/app/admin/component/Bunchbutts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {transactionLineUp} from "@/app/admin/component/AdminArrays";

const Page = () => {
    let counter = 1

    return (
        // <Layout>
        <div className="no-scrollbar">
            <div className="px-5 flex flex-col md:flex-row items-center mb-10 md:mt-6 text-[#602712] gap-1">
                <span className="text-2xl md:text-3xl font-medium">Welcome, </span>
                <span className="text-[18px] md:text-2xl"> Maradesa</span>
            </div>
            <CarouselSpacing/>
            <Bunchbutts/>

            <div className="flex justify-between w-full text-[#602712] px-6 mt-8">
                <span className="text-base font-medium">Recent Transactions</span>
                <span className="text-sm cursor-pointer">View all</span>
            </div>
            <section className="hidden md:block px-5 ">
                <Table className="border border-[#C4AAA1] bg-[#FEF9F8]">
                    <TableHeader className="text-lg text-[#602712]">
                        <TableRow className="whitespace-nowrap">
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Transaction references</TableHead>
                            <TableHead>Email added</TableHead>
                            <TableHead className="text-right">Date</TableHead>
                            <TableHead className="text-right">Time</TableHead>
                            <TableHead className="text-right">Transaction type</TableHead>
                            <TableHead className="text-right">Final Result</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactionLineUp.map((invoice, index) => (
                            <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                                <TableCell className="font-medium">{counter++}</TableCell>
                                <TableCell>{invoice.transactionReferences}</TableCell>
                                <TableCell>{invoice.emailAdded}</TableCell>
                                <TableCell className="text-right">{invoice.date}</TableCell>
                                <TableCell className="text-right">{invoice.time}</TableCell>
                                <TableCell className="text-right">{invoice.transactionType}</TableCell>
                                <TableCell className="text-right">{invoice.finalResult}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </div>
        // </Layout>

    )
}
export default Page
