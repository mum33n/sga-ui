'use client';
import React, {useEffect, useState} from 'react'
import {
    BookOpen,
    CalendarPlus2,
    ChartPie,
    ChevronRight,
    Coins,
    ListCollapse,
    ShoppingBag,
    SquareLibrary,
    Tornado
} from "lucide-react";
import {IoChatbubblesOutline} from "react-icons/io5";
import {FaPeopleGroup} from "react-icons/fa6";
import Link from "next/link";

const sideBar = [
    {
        icon: <ChartPie size={20} />,
        title: "Home",
        link: "/",
    },
    {
        icon: <BookOpen size={20} />,
        title: 'My Courses',
        link: "/courses",
    },
    {
        icon: <Tornado size={20} />,
        title: 'Curriculum',
        link: "/curriculum",
    },
    {
        icon: <ShoppingBag size={20} />,
        title: 'Buy Course',
        link: "/buy-course",
    },
    {
        icon: <ListCollapse size={20} />,
        title: 'Free lessons',
        link: "/free-lessons",
    },
    {
        icon: <SquareLibrary size={20} />,
        title: 'Free courses',
        link: "/free-course",
    },
    {
        icon: <IoChatbubblesOutline size={20} />,
        title: 'Chat Forum',
        link: "#",
    },
    {
        icon: <Coins size={20} />,
        title: 'Transactions',
        link: "/transactions",
    },
    {
        icon: <CalendarPlus2 size={20} />,
        title: 'Subscription',
        link: "#",
    },
    {
        icon: <FaPeopleGroup size={20} />,
        title: 'Support',
        link: "/support",
    },
]

const StudentSideBar = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(0);

    useEffect(() => {
        const savedIndex = localStorage.getItem('activeMenu')
        if (savedIndex !== null ){
            setActiveMenu(parseInt(savedIndex, 10))
        } else {
            setActiveMenu(0)
        }
    }, [])

    const handleChange = (index:number) => {
        setActiveMenu(index)
        localStorage.setItem('activeMenu', index.toString())
    }

    return (
        <section className="w-[295px] min-w-[295px] h-[788px] bg-white py-[20px] pl-[55px] pr-[20px] hidden lg:flex flex-col gap-4 border-r border-r-[#8B8B8BCC] font-poppins">
            {
                sideBar.map((sideBar, index) => (
                    <Link key={index} href={sideBar.link}>
                        <div
                            onClick={() =>handleChange(index)}
                            className={`flex items-center gap-1 px-4 py-3 active:bg-[#1C1C1C0D] hover:bg-[#1C1C1C0D] hover:font-semibold active:font-bold cursor-pointer rounded-xl ${activeMenu === index && "bg-[#1C1C1C0D] font-semibold"}`}>
                            <span><ChevronRight size={20} color="#1C1C1C33"/></span>
                            <div className="flex gap-2 text-[#602712] items-center">
                                <span>{sideBar.icon}</span>
                                <span className="text-[2opx]">{sideBar.title}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}
export default StudentSideBar
