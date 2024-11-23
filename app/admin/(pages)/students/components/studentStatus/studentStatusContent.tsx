import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {studentDashboardTable} from "@/app/admin/component/AdminArrays";

export const Active = () => {
    return (
        <>
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
                            list.status === "active"  && (
                                <TableRow key={index} className="whitespace-nowrap text-base font-normal text-[#4F4F4F]">
                                    <TableCell className="font-medium">{list.name}</TableCell>
                                    <TableCell className="font-medium">{list.emailAddress}</TableCell>
                                    <TableCell className="font-medium">{list.dateJoined}</TableCell>
                                </TableRow>
                            )
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}


export const InActive = () => {
    return (
        <>
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
                            list.status === "inactive"  && (
                                <TableRow key={index} className="whitespace-nowrap text-base font-normal text-[#4F4F4F]">
                                    <TableCell className="font-medium">{list.name}</TableCell>
                                    <TableCell className="font-medium">{list.emailAddress}</TableCell>
                                    <TableCell className="font-medium">{list.dateJoined}</TableCell>
                                </TableRow>
                            )
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}