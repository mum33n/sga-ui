import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {supportTabContent} from "@/app/admin/component/AdminArrays";
import {Button} from "@/components/ui/button";

export const SupportAll = () => {
    return (
        <>
            <Table>
                <TableHeader className="text-lg text-[#602712]">
                    <TableRow className="whitespace-nowrap">
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead className="text-center">Email address</TableHead>
                        <TableHead className="text-mi">Level</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {supportTabContent.map((item, index) => (
                        <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                            <TableCell>{item.dateSubmitted}</TableCell>
                            <TableCell className="text-center">{item.emailAddress}</TableCell>
                            <TableCell className={`text-left px-[42px] bg-[#FDF4E9] h-9 rounded-lg flex items-center justify-center mt-4 text-[#602712]`}>{item.status}</TableCell>
                            <TableCell className="text-center pl-10">
                                <Button className="mx-auto border border-[#602712] bg-white text-[#602712] px-[42px] py-2">View</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}


export const SupportResolved = () => {
    return (
        <>
            <Table>
                <TableHeader className="text-lg text-[#602712]">
                    <TableRow className="whitespace-nowrap">
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead className="text-center">Email address</TableHead>
                        <TableHead className="text-mi">Level</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {supportTabContent.map((item, index) => (
                        item.status === 'Resolved' && (
                            <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                                <TableCell>{item.dateSubmitted}</TableCell>
                                <TableCell className="text-center">{item.emailAddress}</TableCell>
                                <TableCell className={`text-left px-[42px] bg-[#FDF4E9] h-9 rounded-lg flex items-center justify-center mt-4 text-[#602712]`}>{item.status}</TableCell>
                                <TableCell className="text-center pl-10">
                                    <Button className="mx-auto border border-[#602712] bg-white text-[#602712] px-[42px] py-2">View</Button>
                                </TableCell>
                            </TableRow>
                        )
                    ))}
                </TableBody>
            </Table>
        </>
    )
}


export const SupportUnresolved = () => {
    return (
        <>
            <Table>
                <TableHeader className="text-lg text-[#602712]">
                    <TableRow className="whitespace-nowrap">
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead className="text-center">Email address</TableHead>
                        <TableHead className="text-mi">Level</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {supportTabContent.map((item, index) => (
                        item.status === 'Unresolved' && (
                            <TableRow className="text-[#4F4F4F] text-[16px] text-center" key={index}>
                                <TableCell>{item.dateSubmitted}</TableCell>
                                <TableCell className="text-center">{item.emailAddress}</TableCell>
                                <TableCell className={`text-left px-[42px] bg-[#FDF4E9] h-9 rounded-lg flex items-center justify-center mt-4 text-[#602712]`}>{item.status}</TableCell>
                                <TableCell className="text-center pl-10">
                                    <Button className="mx-auto border border-[#602712] bg-white text-[#602712] px-[42px] py-2">View</Button>
                                </TableCell>
                            </TableRow>
                        )
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
