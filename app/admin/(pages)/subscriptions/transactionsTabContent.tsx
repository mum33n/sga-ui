import React from "react";
import {transactionLineUp} from "@/app/admin/component/AdminArrays";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const AllContent = () => {
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
                    <TableHead className="text-right">Final Result</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactionLineUp.map((invoice, index) => (
                    <TableRow className="text-[#4F4F4F] text-[16px]" key={index}>
                        <TableCell className="font-medium">{counter++}</TableCell>
                        <TableCell>{invoice.transactionReferences}</TableCell>
                        <TableCell>{invoice.emailAdded}</TableCell>
                        <TableCell className="text-right">{invoice.date}</TableCell>
                        <TableCell className="text-right">{invoice.time}</TableCell>
                        <TableCell className="text-right">{invoice.transactionType}</TableCell>
                        <TableCell className="text-right">{invoice.finalResult}</TableCell>
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
                    <TableHead className="text-right">Final Result</TableHead>
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
                            <TableCell className="text-right">{invoice.finalResult}</TableCell>
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
                    <TableHead className="text-right">Final Result</TableHead>
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
                            <TableCell className="text-right">{invoice.finalResult}</TableCell>
                        </TableRow>
                    )
                ))
                }
            </TableBody>
        </Table>
    )
}