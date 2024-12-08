'use client'
import React from 'react'
import {useParams} from "next/navigation";
import {studentCarouselContent, studentDashboardTable} from "@/app/admin/component/AdminArrays";
import {Search} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {BackButton} from "@/app/admin/component/reuseables";
import {DropdownMenuDemo} from "@/app/admin/(pages)/students/components/dropdown/page";


const CarouselItemPage = () => {
    const params = useParams();
    const { title } = params; // Get the dynamic `title` segment from the URL

    console.log(params)

    const carouselItem = studentCarouselContent.find(
        (item) => item.id === title
    );
    if (!carouselItem) {
        return <div>Item not found</div>; // Handle case when the item is not found
    }

    return (
        <>
            <BackButton />
            <h2 className="text-2xl font-normal text-[#602712] px-5 mb-4">
                {carouselItem.title} Month Plan ({carouselItem.count})
            </h2>
            <div className="relative px-5 mb-5">
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
            <section>
                <Table className="">
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
                                list.subscription === carouselItem.id && (
                                    <TableRow key={index}
                                              className="whitespace-nowrap text-base font-normal text-[#4F4F4F]">
                                        <TableCell className="font-medium">{list.name}</TableCell>
                                        <TableCell className="font-medium">{list.emailAddress}</TableCell>
                                        <TableCell className="font-medium">{list.dateJoined}</TableCell>
                                        <TableCell className="font-medium">
                                            <DropdownMenuDemo />
                                        </TableCell>
                                    </TableRow>
                                )

                            ))
                        }
                    </TableBody>
                </Table>
            </section>
        </>
    );
}
export default CarouselItemPage
