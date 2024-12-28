import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        transref: "SGA.N4.78782108",
        timePaid: "03:53:36",
        amountPaid: "$250.00",
        datePaid: "1/1/22",
        plan: '12 month sub. plan',
        status: 'successful'
    },
    {
        transref: "SGA.N4.78782108",
        timePaid: "03:53:36",
        amountPaid: "$150.00",
        datePaid:"1/1/22",
        plan: '12 month sub. plan',
        status: 'successful'
    },
    {
        transref: "SGA.N4.78782108",
        timePaid: "03:53:36",
        amountPaid: "$350.00",
        datePaid: "1/1/22",
        plan: '12 month sub. plan',
        status: 'pending'
    },
    {
        transref: "SGA.N4.78782108",
        timePaid: "03:53:36",
        amountPaid: "$450.00",
        datePaid: "1/1/22",
        plan: '12 month sub. plan',
        status: 'pending'
    },
    {
        transref: "SGA.N4.78782108",
        timePaid: "03:53:36",
        amountPaid: "$550.00",
        datePaid:"1/1/22",
        plan: '12 month sub. plan',
        status: 'successful'
    },
    {
        transref: "SGA.N4.78782108",
        timePaid: "03:53:36",
        amountPaid: "$200.00",
        datePaid: "1/1/22",
        plan: '12 month sub. plan',
        status: 'pending'
    },
    {
        transref: "SGA.N4.78782108",
        timePaid: "03:53:36",
        amountPaid: "$300.00",
        datePaid: "1/1/22",
        plan: '12 month sub. plan',
        status: 'successful'
    },
]


export const TransactionsAll = () => {
    let counter = 1

    return (
        <Table>
            <TableHeader>
                <TableRow className="text-[#602712] text-sm whitespace-nowrap">
                    <TableHead className="w-[100px] font-semibold">ID</TableHead>
                    <TableHead className="font-semibold">Transaction references </TableHead>
                    <TableHead className="font-semibold">Plan/Course</TableHead>
                    <TableHead className="font-semibold">Amount paid</TableHead>
                    <TableHead className="font-semibold">Date paid</TableHead>
                    <TableHead className="font-semibold">Time Paid</TableHead>
                    <TableHead className="text-right font-semibold">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice, index) => (
                    <TableRow key={index} className="text-[#4F4F4F] text-sm">
                        <TableCell className="font-medium">{counter++}</TableCell>
                        <TableCell>{invoice.transref}</TableCell>
                        <TableCell>{invoice.plan}</TableCell>
                        <TableCell>{invoice.amountPaid}</TableCell>
                        <TableCell>{invoice.datePaid}</TableCell>
                        <TableCell>{invoice.timePaid}</TableCell>
                        <TableCell className="text-end">
                            <span className={`text-center px-3 py-3 rounded-lg ${invoice.status === 'successful' ? 'bg-[#602712] text-white' : invoice.status === 'pending' ? 'bg-[#F8DEBD] px-5 text-[#602712]' : null}`}>
                                {invoice.status}
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


export const TransactionsSuccessful = () => {
    let counter = 1

    return (
        <Table>
            <TableHeader>
                <TableRow className="whitespace-nowrap text-[#602712]">
                    <TableHead className="w-[100px]  font-semibold">ID</TableHead>
                    <TableHead className=" font-semibold">Transaction references </TableHead>
                    <TableHead className=" font-semibold">Plan/Course</TableHead>
                    <TableHead className=" font-semibold">Amount paid</TableHead>
                    <TableHead className=" font-semibold">Date paid</TableHead>
                    <TableHead className=" font-semibold">Time Paid</TableHead>
                    <TableHead className="text-right font-semibold">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice, index) => (
                    invoice.status === 'successful' &&
                    <TableRow key={index}>
                        <TableCell className="font-medium">{counter++}</TableCell>
                        <TableCell>{invoice.transref}</TableCell>
                        <TableCell>{invoice.plan}</TableCell>
                        <TableCell>{invoice.amountPaid}</TableCell>
                        <TableCell>{invoice.datePaid}</TableCell>
                        <TableCell>{invoice.timePaid}</TableCell>
                        <TableCell className="text-end">
                            <span className="text-center px-3 py-3 text-white rounded-lg bg-[#602712]">
                                {invoice.status}
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}



export const TransactionsPending = () => {
    let counter = 1

    return (
        <Table>
            <TableHeader>
                <TableRow className="whitespace-nowrap text-[#602712]">
                    <TableHead className="w-[100px] font-semibold">ID</TableHead>
                    <TableHead className="font-semibold">Transaction references </TableHead>
                    <TableHead className="font-semibold">Plan/Course</TableHead>
                    <TableHead className="font-semibold">Amount paid</TableHead>
                    <TableHead className="font-semibold">Date paid</TableHead>
                    <TableHead className="font-semibold">Time Paid</TableHead>
                    <TableHead className="text-right font-semibold">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice, index) => (
                    invoice.status === 'pending' &&
                    <TableRow key={index}>
                        <TableCell className="font-medium">{counter++}</TableCell>
                        <TableCell>{invoice.transref}</TableCell>
                        <TableCell>{invoice.plan}</TableCell>
                        <TableCell>{invoice.amountPaid}</TableCell>
                        <TableCell>{invoice.datePaid}</TableCell>
                        <TableCell>{invoice.timePaid}</TableCell>
                        <TableCell className="text-end">
                            <span className="text-center px-5 py-3 text-[#602712] rounded-lg bg-[#F8DEBD]">
                                {invoice.status}
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
