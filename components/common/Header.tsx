'use client';
import Image from "next/image"
import logo1 from "@/public/logo1.svg"
import { Button } from "../ui/button"
import {NavMenu} from "@/app/(student)/(home)/components/NavMenu";
import {SideBar} from "@/app/(student)/(home)/components/SideBar";
import {Bell, Menu, Search} from "lucide-react";
import {useState} from "react";
import nft from '@/public/nft3.jpeg'

const Header = () => {
    const [active, setActive] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [signedIn, setSignedIn] = useState(true)
    return (
        <>
            {
                !signedIn
                 ? (
                     <section className="w-screen bg-[#602712] flex items-center justify-between place-items-center px-4 md:px-7 shadow-md h-14 relative">
                            <div className="flex gap-10">
                                <Image
                                    src={logo1}
                                    alt="Logo"
                                    width={33}
                                    height={37}
                                    priority
                                />

                                <NavMenu/>
                            </div>

                            <div className="hidden md:flex gap-0 pr-8 md:pr-0 items-center">
                                <Button className="bg-[#E89222] hover:bg-[#cb801e] px-4 py-4 text-base font-medium">Join
                                    now</Button>
                                <Button
                                    className="font-semibold bg-transparent hover:bg-transparent text-base hover:underline underline-offset-[6px] decoration-2">Login</Button>
                            </div>
                            <Menu className="block md:hidden" color={'white'} onClick={() => {
                                setActive(!active)
                                console.log(active)
                            }}/>
                            <SideBar active={active} setActive={setActive}/>
                        </section>
                    )
                 : (
                        <section className="w-screen bg-[#602712] flex items-center lg:justify-between place-items-center px-4 md:px-7 shadow-md h-[110px] relative">
                            <Menu size={14} color="white" className="mr-[22px] lg:hidden" />
                            <div className="flex gap-4 mr-[65px] lg:mr-[117px]">
                                <Image
                                    src={logo1}
                                    alt="Logo"
                                    priority
                                    className="lg:mr-[92px] w-[33px] lg:w-[62px] h-[37px] lg:h-[73px]"
                                />

                                <NavMenu />
                            </div>

                            <div className="flex gap-8 items-center">
                                <div className="relative flex items-center">
                                    <input className="w-[223px] lg:w-[462px] h-10 lg:h-[42px] bg-[#FFF8F0BD] rounded-lg pl-10 placeholder:text-[#1C1C1C33] placeholder:text-lg" placeholder="Search"/>
                                    <span className="absolute left-3 items-center text-lg text-[#1C1C1C33]">
                                        <Search />
                                    </span>
                                </div>
                                <Bell color="white" size={23} className="cursor-pointer" />
                            </div>
                            <div className="hidden lg:block ml-[169px] cursor-pointer">
                                <Image alt="image" src={nft} className="w-[63px] h-[63px] rounded-full" />
                            </div>
                        </section>
                    )
            }
        </>
    )
}

export default Header