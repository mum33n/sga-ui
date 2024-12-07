import React from 'react'
import StudentCarousel from "@/app/admin/(pages)/students/components/studentCarousel/page";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { studentDashboardTable } from "@/app/admin/component/AdminArrays";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

const Students = () => {
    return (
        <>
            <div className="flex justify-between items-center px-5 mb-4">
                <span className="text-2xl font-normal text-[#602712] mb-6">Student(789)</span>
                <Link href={'/admin/students/components/studentStatus'}>
                    <Button className="py-[5px] leading-none h-fit px-2.5 border border-[#602712] text-[#602712] text-sm font-medium mb-6 bg-white">Students Status</Button>
                </Link>
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
                                <Dialog key={index}>
                                    <DialogTrigger asChild>
                                        <TableRow key={index} className="whitespace-nowrap text-base font-normal text-[#4F4F4F] cursor-pointer">
                                            <TableCell className="font-medium">{list.name}</TableCell>
                                            <TableCell className="font-medium">{list.emailAddress}</TableCell>
                                            <TableCell className="font-medium">{list.dateJoined}</TableCell>
                                        </TableRow>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px] pt-[57px]  rounded-lg flex flex-col items-center">
                                        <DialogHeader className="mb-8">
                                            <DialogTitle className="text-[#602712]">{list.name}</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex flex-col gap-8 text-base">
                                            <div className="flex gap-[11px] md:gap-[51px]">
                                                <span className="w-[124px] text-[#1E1E1E80]">Date joined: </span>
                                                <span className="text-[#602712]">{list.dateJoined}</span>
                                            </div>
                                            <div className="flex gap-[11px] md:gap-[51px]">
                                                <span className="w-[124px] text-[#1E1E1E80]">Email address: </span>
                                                <span className="text-[#602712]">{list.emailAddress}</span>
                                            </div>
                                            <div className="flex gap-[11px] md:gap-[51px]">
                                                <span className="w-[124px] text-[#1E1E1E80]">Subscription plan: </span>
                                                <span className="text-[#602712]">{list.subscription} MONTH PLAN</span>
                                            </div>
                                            <div className="flex gap-[11px] md:gap-[51px]">
                                                <span className="w-[124px] text-[#1E1E1E80]">Last purchase: </span>
                                                <span className="text-[#602712]">{list.dateJoined}</span>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))
                        }
                    </TableBody>
                </Table>
            </section>
        </>

    )
}
export default Students