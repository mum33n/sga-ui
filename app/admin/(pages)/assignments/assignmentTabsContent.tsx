import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {assignmentsTabContent} from "@/app/admin/component/AdminArrays";

export const Reviewed = () => {
    return (
        <>
            <Table>
                <TableHeader className="text-lg text-[#602712]">
                    <TableRow className="whitespace-nowrap">
                        <TableHead className="w-[100px]">Submitted</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Email address</TableHead>
                        <TableHead className="text-right">Level</TableHead>
                        <TableHead className="text-right">Lesson</TableHead>
                        <TableHead className="text-right">Rating</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {assignmentsTabContent.map((item, index) => (
                        item.status === 'reviewed' && (
                            <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                                <TableCell>{item.dateSubmitted}</TableCell>
                                <TableCell>{item.timeSubmitted}</TableCell>
                                <TableCell className="text-right">{item.name}</TableCell>
                                <TableCell className="text-right">{item.emailAddress}</TableCell>
                                <TableCell className="text-right">{item.level}</TableCell>
                                <TableCell className="text-right">{item.lesson}</TableCell>
                                <TableCell className="text-right">{item.rating}</TableCell>
                            </TableRow>
                        )
                    ))}
                </TableBody>
            </Table>
        </>
    )
}


export const AssPending = () => {
    return (
        <>
            <section className="flex flex-col items-center gap-2 justify-center pt-6">
                { assignmentsTabContent.map((item, index) => (
                    item.status === 'pending' && (
                        <div key={index} className="rounded-lg border border-[#602712] p-1.5 w-[350px] h-[73px] space-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-[#602712] font-normal text-base">{item.title.slice(0,15).toUpperCase()}...</span>
                                <span className="p-1.5 rounded-lg text-white bg-[#602712] text-sm">{item.level}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[#4F4F4F] text-base font-normal">{item.emailAddress}</span>
                                <span className="text-[#4F4F4F] text-sm">{item.timeSubmitted}</span>
                            </div>
                        </div>
                    )
                ))}
            </section>
        </>
    )
}
