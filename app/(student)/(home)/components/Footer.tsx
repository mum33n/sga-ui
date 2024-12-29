import React from 'react'
import Image from "next/image";
import logo1 from "@/public/logo1.svg";
import {Facebook, Instagram, Youtube} from "lucide-react";
import googlePlay from "@/public/google-play-badge.png";
import applePlay from "@/public/apple-store-badge.png";

const Footer = () => {
    return (
        <div
            className="w-screen lg:h-[235px] bg-footerBackground md:bg-footerBackground2 bg-[#FFF8F0] bg-no-repeat bg-cover pt-[61px] pb-[20px] pl-4 md:pl-12 lg:pl-[104px] flex items-center justify-between">
            <div className="flex gap-6 md:gap-[97px] lg:gap-[132px]">
                <Image
                    alt="logo"
                    src={logo1}
                    // width={40}
                    className="w-[40px] md:w-[58px] lg:w-[103px]"
                />
                <section
                    className="flex flex-wrap justify-between lg:items-center pr-7 md:pr-14 gap-x-6 gap-y-2 w-full">
                    <div className="md:mr-[119px]">
                        <p className="font-semibold text-[10px] mb-2 text-black md:hidden">Stay connected</p>
                        <p className="font-bold text-[18px] mb-2 text-black hidden md:block">Stay connected</p>
                        <div className="flex gap-3.5">
                            <Facebook className="cursor-pointer w-5 md:w-7 h-7" color="#602712" fill="#602712"/>
                            <Instagram className="cursor-pointer w-5 md:w-7 h-7" fill="#602712" color="#F0EAE8"/>
                            <Youtube className="cursor-pointer w-5 md:w-7 h-7" fill="#602712" color="#F0EAE8"/>
                        </div>
                    </div>
                    <div className="lg:pr-[95px]">
                        <p className="font-semibold text-[10px] mb-2 text-black md:hidden">Mobile apps</p>
                        <p className="font-bold text-[18px] mb-2 text-black hidden md:block">Get our mobile apps</p>
                        <div className="flex flex-col md:flex-row gap-1.5">
                            <Image className="cursor-pointer md:w-28" alt="google play badge" src={googlePlay}/>
                            <Image className="cursor-pointer md:w-28" alt="apple store badge" src={applePlay}/>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px] mb-2 md:mb-1 text-black">Support</p>
                        <div className="font-medium text-[8px] md:text-sm text-black flex gap-1.5">
                            <span className="cursor-pointer">FAQ</span>
                            <span className="cursor-pointer">Contact Us</span>
                            <span className="cursor-pointer">Privacy Policy</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Footer
