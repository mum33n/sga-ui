"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { BookMinus, Calendar, CirclePlay, FolderClosed, GalleryVerticalEnd, Gift, Guitar, HandCoins } from "lucide-react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";

const communityComp = [
    {
        title: "Forum and Discussion",
        href: "#",
        description: "Share your thoughts and connect with thousands of guitarists across our platform",
        icon: <IoChatbubblesOutline />,
    },
    {
        title: "Event Calendar",
        href: "#",
        description: "Stay updated with upcoming events and jam sessions.",
        icon: <Calendar strokeWidth={1.5} size={18} />,
    },
    {
        title: "Spicy Marketplace",
        href: "#",
        description: "Buy and sell guitars and accessories at your fingertips.",
        icon: <FolderClosed strokeWidth={1.5} size={18} />,
    },
    {
        title: "Membership Spotlight",
        href: "#",
        description: "Get featured in our membership spotlight.",
        icon: <HiOutlineUserGroup strokeWidth={1.5} />,
    },
];

const aboutComp = [
    {
        title: "Gallery",
        href: "#",
        description: "View amazing moments captured at Spicy Guitar Academy.",
        icon: <GalleryVerticalEnd size={18} color={"#602712"} />,
    },
    {
        title: "Giveaway",
        href: "#",
        description: "Win branded T-shirts and guitar accessories.",
        icon: <HandCoins strokeWidth={1.5} size={18} color={"#602712"} />,
    },
    {
        title: "Charity Events",
        href: "#",
        description: "Support music education and musicians in need.",
        icon: <Gift strokeWidth={1.5} size={18} color={"#602712"} />,
    },
];

const exploreComp = {
    exploreLeft: [
        { title: "Beginners Course", link: "#" },
        { title: "Intermediate Course", link: "#" },
        { title: "Advanced Course", link: "#" },
        { title: "Buy Course", link: "#" },
    ],
    exploreRight: [
        {
            title: "Practice Loops",
            icon: <CirclePlay color="#E89222" />,
            link: "#",
        },
        {
            title: "Guitar Techniques",
            icon: <Guitar color={"#E89222"} size={32} strokeWidth={1.5} />,
            link: "#",
        },
        {
            title: "Spicy Guitar Handbook",
            icon: <BookMinus color="#E89222" />,
            link: "#",
        },
    ],
};

export function NavMenu({ signedIn = false }: { signedIn?: boolean }) {
    return (
        <NavigationMenu className="hidden md:flex font-inter">
            <NavigationMenuList className="lg:flex lg:gap-[30px]">
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold bg-[#602712] text-white text-base">
                        Explore
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-[124px] p-4 lg:pr-[120px] h-[388px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <div className="mb-7 mt-4 text-lg font-semibold text-[#2B1108]">
                                    LEARNING SYSTEM
                                </div>
                                <div className="flex flex-col">
                                    {exploreComp.exploreLeft.map((item, index) => (
                                        <Link key={index} href={item.link}>
                                            <div
                                                className="border-b border-b-gray-200 pb-3.5 pt-1.5 font-medium text-lg text-[#2B1108] cursor-pointer"
                                            >
                                                {item.title}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Button className="px-8 py-4 w-[241px] h-14 mt-8 common-button rounded-xl">
                                    Free Lessons
                                </Button>
                            </li>
                            <div>
                                <div className="mb-7 mt-4 text-lg font-semibold text-[#2B1108]">TUTORIAL LIBRARY</div>
                                {exploreComp.exploreRight.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        href={item.link}
                                        title={item.title}
                                        icon={item.icon}
                                    />
                                ))}
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold bg-[#602712] text-white text-lg">
                        Community
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[400px] gap-6 pr-[137px] p-4 md:w-[500px] lg:w-[700px] ">
                            {communityComp.map((component) => (
                                <ListItem
                                    key={component.title}
                                    icon={component.icon}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {signedIn && (
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-semibold bg-[#602712] text-white text-lg">
                            About
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="flex flex-col w-[400px] gap-6 pr-[137px] p-4 md:w-[500px] lg:w-[700px] ">
                                {aboutComp.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        icon={component.icon}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon: React.ReactNode;
}
>(({ className, title, icon, children, ...props }, ref) => (
    <li>
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                    "block select-none p-3 space-y-3 border-b border-gray-200 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="flex items-center gap-1">
                    <div>{icon}</div>
                    <div className="text-lg font-semibold text-[#2B1108] leading-none">{title}</div>
                </div>
                <p className="line-clamp-2 text-sm font-medium leading-snug text-[#2B1108]">
                    {children}
                </p>
            </a>
        </NavigationMenuLink>
    </li>
));
ListItem.displayName = "ListItem";
