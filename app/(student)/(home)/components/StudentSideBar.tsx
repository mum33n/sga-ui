import React from 'react'
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
        link: "#",
    },
    {
        icon: <ListCollapse size={20} />,
        title: 'Free lessons',
        link: "#",
    },
    {
        icon: <SquareLibrary size={20} />,
        title: 'Free courses',
        link: "#",
    },
    {
        icon: <IoChatbubblesOutline size={20} />,
        title: 'Chat Forum',
        link: "#",
    },
    {
        icon: <Coins size={20} />,
        title: 'Transactions',
        link: "#",
    },
    {
        icon: <CalendarPlus2 size={20} />,
        title: 'Subscription',
        link: "#",
    },
    {
        icon: <FaPeopleGroup size={20} />,
        title: 'Support',
        link: "#",
    },
]

const StudentSideBar = () => {
    return (
        <section className="w-[295px] min-w-[295px] h-[788px] bg-white py-[20px] pl-[55px] pr-[20px] hidden lg:flex flex-col gap-4 border-r border-r-[#8B8B8BCC]">
            {
                sideBar.map((sideBar, index) => (
                    <Link key={index} href={sideBar.link}>
                        <div className="flex items-center gap-1 p-4 active:bg-[#1C1C1C0D] hover:bg-[#1C1C1C0D] hover:font-bold active:font-bold cursor-pointer rounded-2xl">
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
