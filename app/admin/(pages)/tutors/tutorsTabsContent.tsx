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

export const Accepted = () => {
    return (
        <Table className="mt-7">
            <TableHeader className="text-lg text-[#602712] mt-7">
                <TableRow className="whitespace-nowrap flex justify-between">
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Telephone</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    tutorsList.map((list, index) => (
                        list.status === "accepted" && (
                            <TableRow key={index} className="whitespace-nowrap flex justify-between">
                                <TableCell className="font-medium">{list.name}</TableCell>
                                <TableCell className="font-medium text-left">{list.Telephone}</TableCell>
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
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    tutorsList.map((list, index) => (
                        list.status === "pending" && (
                            <TableRow key={index} className="whitespace-nowrap flex justify-between">
                                <TableCell className="font-medium">{list.name}</TableCell>
                                <TableCell className="font-medium text-left">{list.Telephone}</TableCell>
                            </TableRow>
                        )
                    ))
                }
            </TableBody>
        </Table>
    )
}