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
                        <TableHead className="text-right">Email address</TableHead>
                        <TableHead className="text-right">Level</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {supportTabContent.map((item, index) => (
                        <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                            <TableCell>{item.dateSubmitted}</TableCell>
                            <TableCell className="text-right">{item.emailAddress}</TableCell>
                            <TableCell className="text-right">{item.status}</TableCell>
                            <TableCell className="text-center pl-10">
                                <Button className="mx-auto block">View</Button>
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
                        <TableHead className="text-right">Email address</TableHead>
                        <TableHead className="text-right">Level</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {supportTabContent.map((item, index) => (
                        item.status === 'resolved' && (
                            <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                                <TableCell>{item.dateSubmitted}</TableCell>
                                <TableCell className="text-right">{item.emailAddress}</TableCell>
                                <TableCell className="text-right">{item.status}</TableCell>
                                <TableCell className="text-center">
                                    <Button className="mx-auto block">View</Button>
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
                        <TableHead className="text-right">Email address</TableHead>
                        <TableHead className="text-right">Level</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {supportTabContent.map((item, index) => (
                        item.status === 'unresolved' && (
                            <TableRow className="text-[#4F4F4F] text-[16px] text-center" key={index}>
                                <TableCell>{item.dateSubmitted}</TableCell>
                                <TableCell className="text-right">{item.emailAddress}</TableCell>
                                <TableCell className="text-right">{item.status}</TableCell>
                                <TableCell className="text-center">
                                    <Button className="mx-auto block">View</Button>
                                </TableCell>
                            </TableRow>
                        )
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
