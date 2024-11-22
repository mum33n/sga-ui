import React from 'react'
import {StudentCarousel} from "@/app/admin/(pages)/students/components/studentCarousel";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { studentDashboardTable } from "@/app/admin/component/AdminArrays";

const Students = () => {
    return (
        <>
            <div className="flex justify-between items-center px-5 mb-4">
                <span className="text-2xl font-normal text-[#602712] mb-6">Student(789)</span>
                <Button className="py-[5px] leading-none h-fit px-2.5 border border-[#1D7C1B] text-[#1D7C1B] text-sm font-medium mb-6 bg-white">Students Status</Button>
            </div>
            <div className="relative px-5 mb-8">
                <input
                    type="text"
                    placeholder="Search for email or name"
                    className="w-full h-12 bg-[#F3EBE9] rounded-lg text-base font-normal border border-[#E8CEC5] pl-14"
                />
                <Search
                    size={16}
                    color="#1C1C1C33"
                    className="absolute top-4 left-10"
                />
            </div>
            <StudentCarousel/>

            <section>
                <Table className="mt-7">
                    <TableHeader className="text-lg text-[#602712] mt-7">
                        <TableRow className="whitespace-nowrap">
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Email address</TableHead>
                            <TableHead>Date joined</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            studentDashboardTable.map((list, index) => (
                                <TableRow key={index} className="whitespace-nowrap text-base font-normal text-[#4F4F4F]">
                                    <TableCell className="font-medium">{list.name}</TableCell>
                                    <TableCell className="font-medium">{list.emailAddress}</TableCell>
                                    <TableCell className="font-medium">{list.dateJoined}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </section>
        </>

    )
}
export default Students

// Name
// Email  address
// Date joined