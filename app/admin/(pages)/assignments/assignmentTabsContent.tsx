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
                        <TableHead className="text-left">Email address</TableHead>
                        <TableHead className="text-left">Level</TableHead>
                        <TableHead className="text-left">Lesson</TableHead>
                        <TableHead className="text-left">Rating</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {assignmentsTabContent.map((item, index) => (
                        item.status === 'reviewed' && (
                            <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                                <TableCell>{item.dateSubmitted}</TableCell>
                                <TableCell>{item.timeSubmitted}</TableCell>
                                <TableCell className="text-left">{item.name}</TableCell>
                                <TableCell className="text-left">{item.emailAddress}</TableCell>
                                <TableCell className="text-left">{item.level}</TableCell>
                                <TableCell className="text-left">{item.lesson}</TableCell>
                                <TableCell className="text-center">{item.rating}</TableCell>
                            </TableRow>
                        )
                    ))}
                </TableBody>
            </Table>
        </>
    )
}


export const AssPending = () => {
    const levelsArray = [
        { name: "Beginners", data: assignmentsTabContent.filter(item => item.level.toLowerCase() === "beginners") },
        { name: "Amateur", data: assignmentsTabContent.filter(item => item.level.toLowerCase() === "amateur") },
        { name: "Intermediate", data: assignmentsTabContent.filter(item => item.level.toLowerCase() === "intermediate") },
        { name: "Advance", data: assignmentsTabContent.filter(item => item.level.toLowerCase() === "advance") },
    ];

    return (
        <>
            <section className="flex flex-col md:flex-row items-center gap-2 justify-center md:justify-between pt-6 px-5 w-screen md:w-[780px] md:flex-wrap">
                {
                    levelsArray.map((group, index) => (
                        <div key={index} className="md:w-[350px] w-full h-[196px] border border-[#60271233] rounded-t-lg overflow-y-auto no-scrollbar">
                            <div key={index}
                                 className="w-full h-8 bg-[#602712] rounded-t-lg flex justify-between items-center px-2.5 text-white font-medium text-base">
                                 <span>{group.name}</span>
                                 <span>2</span>
                             </div>

                            <section className="w-full px-1.5 py-2.5 flex flex-col gap-2.5">
                                {group.data.map((item, index) => (
                                    <div key={index} className="rounded-lg border border-[#602712] p-1.5 w-full h-[66px] space-y-1">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#602712] font-normal text-base">{item.title.slice(0,15).toUpperCase()}...</span>
                                            {/*<span className="p-1.5 rounded-lg text-white bg-[#602712] text-sm">{item.level}</span>*/}
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#4F4F4F] text-base font-normal">{item.emailAddress}</span>
                                            <span className="text-[#4F4F4F] text-sm whitespace-nowrap">{item.timeSubmitted}</span>
                                        </div>
                                    </div>
                                ))}
                            </section>

                        </div>
                    ))
                }
            </section>
        </>
    )
}
