'use client';
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const now = new Date();
const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
}).format(now);

const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
}).format(now);

export const transactionLineUp = [
    {
        transactionReferences: "SGA.N4.78782108",
        emailAdded: "michelle.rivera@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "Approved: Adm Taiwo",
        emailAdded: "abcd@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "SGA.N4.78782108",
        emailAdded: "efgh@example.com",
        status: "pending",
        date: formattedDate,
        time: formattedTime,
        transactionType: "Purchased Spicy Unit",
        finalResult: "Pending"
    },
    {
        transactionReferences: "Approved: Adm Segun",
        emailAdded: "wxyz@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "SGA.N4.78782108-2025",
        emailAdded: "mnop@example.com",
        status: "pending",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Pending"
    },
    {
        transactionReferences: "SGA.N4.78782108",
        emailAdded: "michelle.rivera@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "Approved: Adm Taiwo",
        emailAdded: "abcd@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "SGA.N4.78782108",
        emailAdded: "efgh@example.com",
        status: "pending",
        date: formattedDate,
        time: formattedTime,
        transactionType: "Purchased Spicy Unit",
        finalResult: "Pending"
    },
    {
        transactionReferences: "Approved: Adm Segun",
        emailAdded: "wxyz@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "SGA.N4.78782108-2025",
        emailAdded: "mnop@example.com",
        status: "pending",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Pending"
    },

]


export const AllContent = () => {
    const currentPage = 1
    const itemsPerPage = 5
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedTransactions = transactionLineUp.slice(startIndex, endIndex)

    let counter = 1

    return (
        <Table>
            <TableHeader className="text-lg text-[#602712]">
                <TableRow className="whitespace-nowrap">
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Transaction references</TableHead>
                    <TableHead>Email added</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                    <TableHead className="text-right">Transaction type</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {paginatedTransactions.map((invoice, index) => (
                    <TableRow className="text-[#4F4F4F] text-[16px] " key={index}>
                        <TableCell className="font-medium">{counter++}</TableCell>
                        <TableCell>{invoice.transactionReferences}</TableCell>
                        <TableCell>{invoice.emailAdded}</TableCell>
                        <TableCell className="text-right">{invoice.date}</TableCell>
                        <TableCell className="text-right">{invoice.time}</TableCell>
                        <TableCell className="text-right">{invoice.transactionType}</TableCell>
                        <TableCell className={`text-center w-[107px] block rounded-lg py-2 px-3 bg-white border mt-4 ${invoice.finalResult === "Received" ? "border-[#C6E8B3] text-[#579931]" : "border-[#F8DEBD] text-[#E39E47]"}`}>{invoice.finalResult}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )

}

export const SuccessfulContent = () => {
    let counter = 1;

    return (
        <Table>
            <TableHeader className="text-lg text-[#602712]">
                <TableRow className="whitespace-nowrap text-[#602712]">
                    <TableHead className="w-[100px] text-[#602712]">ID</TableHead>
                    <TableHead>Transaction references</TableHead>
                    <TableHead>Email added</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                    <TableHead className="text-right">Transaction type</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactionLineUp.map((invoice, index) => (
                    invoice.status === 'successful' && (
                        <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                            <TableCell className="font-medium">{counter++}</TableCell>
                            <TableCell>{invoice.transactionReferences}</TableCell>
                            <TableCell>{invoice.emailAdded}</TableCell>
                            <TableCell className="text-right">{invoice.date}</TableCell>
                            <TableCell className="text-right">{invoice.time}</TableCell>
                            <TableCell className="text-right">{invoice.transactionType}</TableCell>
                            <TableCell className="text-center w-[107px] block rounded-lg py-2 px-3 bg-white border mt-2 border-[#C6E8B3] text-[#579931] ">{invoice.finalResult}</TableCell>
                        </TableRow>
                    )
                ))
                }
            </TableBody>
        </Table>
    )
}

export const PendingContent = () => {
    let counter = 1;

    return (
        <Table>
            <TableHeader className="text-lg text-[#602712]">
                <TableRow className="whitespace-nowrap">
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Transaction references</TableHead>
                    <TableHead>Email added</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                    <TableHead className="text-right">Transaction type</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactionLineUp.map((invoice, index) => (
                    invoice.status === 'pending' && (
                        <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                            <TableCell className="font-medium">{counter++}</TableCell>
                            <TableCell>{invoice.transactionReferences}</TableCell>
                            <TableCell>{invoice.emailAdded}</TableCell>
                            <TableCell className="text-right">{invoice.date}</TableCell>
                            <TableCell className="text-right">{invoice.time}</TableCell>
                            <TableCell className="text-right">{invoice.transactionType}</TableCell>
                            <TableCell className="text-center w-[107px] block rounded-lg py-2 px-3 bg-white border mt-2 border-[#F8DEBD] text-[#E39E47] ">{invoice.finalResult}</TableCell>
                        </TableRow>
                    )
                ))
                }
            </TableBody>
        </Table>
    )
}