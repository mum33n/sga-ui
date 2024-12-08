import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {studentDashboardTable} from "@/app/admin/component/AdminArrays";
import React from "react";

const DialogDemo = () => {
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
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <TableRow key={index} className="whitespace-nowrap text-base font-normal text-[#4F4F4F]">
                                        <TableCell className="font-medium">{list.name}</TableCell>
                                        <TableCell className="font-medium">{list.emailAddress}</TableCell>
                                        <TableCell className="font-medium">{list.dateJoined}</TableCell>
                                    </TableRow>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    {list.name}
                                </DialogContent>
                            </Dialog>
                        ))
                    }
                </TableBody>
            </Table>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&#39;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>

    )
}

export default DialogDemo