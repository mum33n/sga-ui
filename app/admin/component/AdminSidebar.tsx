'use client';

import React from 'react'
import { FaUserCircle,  } from "react-icons/fa";
import { PiChartPieSliceFill, PiChatsCircle, PiStudentFill, PiNotebookDuotone, PiChalkboardTeacherLight } from "react-icons/pi";
import { MdAssignmentAdd } from "react-icons/md";
import {ArrowLeftRight, X, BookOpen, Users, UserRoundCog} from "lucide-react"

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";

const items = [
    {
        title: "Dashboard",
        url: "/admin",
        icon: PiChartPieSliceFill,
    },
    {
        title: "Courses",
        url: "/admin/courses",
        icon: BookOpen,
    },
    {
        title: "Subscription plans",
        url: "/admin/subscriptions",
        icon: PiNotebookDuotone,
    },
    {
        title: "Transactions",
        url: "/admin/transactions",
        icon: ArrowLeftRight,
    },
    {
        title: "Tutors",
        url: "/admin/tutors",
        icon: PiChalkboardTeacherLight,
    },
    {
        title: "Students",
        url: "/admin/students",
        icon: PiStudentFill,
    },
    {
        title: "Assignments",
        url: "/admin/assignments",
        icon: MdAssignmentAdd,
    },
    {
        title: "Chat Forum",
        url: "/admin/chatForum",
        icon: PiChatsCircle,
    },
    {
        title: "Support",
        url: "/admin/support",
        icon: UserRoundCog,
    },
]

const AdminSidebar = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <Sidebar >
            <SidebarContent className="py-4 px-8 no-scrollbar">
                <SidebarGroup className="flex flex-col gap-16">
                    <SidebarGroupLabel className="flex flex-col gap-1 items-start">
                        <div className="w-full flex justify-end cursor-pointer md:invisible" onClick={toggleSidebar}>
                            <X style={{ width: '30px', height: '30px', color: 'black', backgroundColor: '#FDF4E9', borderRadius: '50px', padding: '5px' }} />
                        </div>

                        <Link href="/admin/component/admProfile">
                            <div className="flex gap-2 cursor-pointer">
                                <FaUserCircle style={{width: '28px', height: '28', color: 'black'}}/>
                                <p className="font-medium text-xl text-black">Maradesa</p>
                            </div>
                        </Link>
                </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex gap-6">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="pl-8 hover:bg-[#1C1C1C0D] rounded-lg py-5">
                                        <Link href={item.url} passHref className="flex items-center">
                                                <item.icon
                                                    style={{width: '16.25px', height: '16.25px', color: 'black'}}/>
                                                <span className="font-normal text-lg">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="py-4 px-8">
                <div className="flex pl-10 items-center gap-2 cursor-pointer">
                    <Users style={{ width: '16.25px', height: '16.25px', color: 'black' }} />
                    <span className="text-[#D06B0D]">Logout</span>
                </div>

            </SidebarFooter>
        </Sidebar>
    )
}
export default AdminSidebar
