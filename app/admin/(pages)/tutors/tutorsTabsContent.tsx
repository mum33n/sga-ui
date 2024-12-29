import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {tutorsList} from "@/app/admin/component/AdminArrays";
import {Button} from "@/components/ui/button";

export const Accepted = () => {
    return (
        <Table className="mt-7">
            <TableHeader className="text-lg text-[#602712] mt-7">
                <TableRow className="whitespace-nowrap flex justify-between">
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Telephone</TableHead>
                    <TableHead>Email address</TableHead>
                    <TableHead>Date accepted</TableHead>
                    <TableHead>Privileges</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    tutorsList.map((list, index) => (
                        list.status === "accepted" && (
                            <TableRow key={index} className="whitespace-nowrap flex justify-between">
                                <TableCell className="font-medium">{list.name}</TableCell>
                                <TableCell className="font-medium text-left">{list.Telephone}</TableCell>
                                <TableCell className="font-medium text-left">{list.emailAdded}</TableCell>
                                <TableCell className="font-medium text-left">{list.date}</TableCell>
                                <TableCell className="font-medium text-left">
                                    <Button className="w-24 h-8 bg-white border border-[#1D7C1B] text-[#1D7C1B]">Edit</Button>
                                </TableCell>
                            </TableRow>
                        )
                    ))
                }
            </TableBody>
        </Table>
    )
}

export const Pending = () => {
    return (
        <Table className="mt-7">
            <TableHeader className="text-lg text-[#602712] mt-7">
                <TableRow className="whitespace-nowrap flex justify-between items-start">
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Telephone</TableHead>
                    <TableHead>Email address</TableHead>
                    <TableHead>Date accepted</TableHead>
                    <TableHead>Privileges</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    tutorsList.map((list, index) => (
                        list.status === "pending" && (
                            <TableRow key={index} className="whitespace-nowrap flex justify-between">
                                <TableCell className="font-medium">{list.name}</TableCell>
                                <TableCell className="font-medium text-left">{list.Telephone}</TableCell>
                                <TableCell className="font-medium text-left">{list.emailAdded}</TableCell>
                                <TableCell className="font-medium text-left">{list.date}</TableCell>
                                <TableCell className="font-medium text-left">
                                    <Button className="w-24 h-8 bg-white border border-[#1D7C1B] text-[#1D7C1B]">Edit</Button>
                                </TableCell>
                            </TableRow>
                        )
                    ))
                }
            </TableBody>
        </Table>
    )
}