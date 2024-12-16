'use client';
import React, {useState} from 'react'
import Image from "next/image";
import apos from "@/public/apos.png"
import {ChevronLeft, ChevronRight} from "lucide-react";

import nft from "@/public/nft.jpeg"
import nft3 from "@/public/nft3.jpeg"
import nft5 from "@/public/nft5.jpeg"
import officeNFT from "@/public/Office Baby NFT.jpeg"


const studentStories = [
    {
        image: nft3,
        name: "Ifiok Isaiah",
        story: "Spicy Guitar Academy Is A Great Learning Hub For Any Guitarist That Want To Get On Top Of His/Her Craft. Whether You're A Beginner, Amateur Or Advance Guitar Player, The Academy Will Teach You To Grow From Any Of These Categories To A More Advanced Level.",
    },
    {
        image: nft,
        name: "Sophia Elizabeth",
        story: "Meditation is more than just a trendy buzzword; it’s a practice with proven mental and physical health benefits. Spending as little as 10 minutes a day in meditation can help reduce stress, improve focus, and enhance emotional well-being. ",
    },
    {
        image: nft5,
        name: "Liam Alexander",
        story: "Saving money doesn’t have to feel like a daunting task. Start by creating a budget and tracking your expenses to understand where your money goes. Cut back on unnecessary subscriptions and consider brewing your coffee at home instead of buying it daily. ",
    },
    {
        image: officeNFT,
        name: "Olivia Grace",
        story: "Fiction is more than just entertainment—it’s a workout for your brain. Studies show that reading fiction can improve empathy by helping readers understand different perspectives. It also stimulates creativity and boosts vocabulary.",
    },
]

const StudentStorySlide = () => {
    const [active, setActive] = useState(0)
    const handlePrevious = () => {
        setActive((prevState) => (
            prevState === 0
                ? studentStories.length - 1
                : prevState - 1
        ))
    }
    const handleNext = () => {
        setActive((prevState) => (
            prevState === studentStories.length - 1
                ? 0
                : prevState + 1
        ))
    }

    return (
        <>
            <section className="pl-5 md:px-[49px] bg-[#F0EAE8] py-7 pr-4 mb-[62px]">
                <h3 className="font-semibold text-base md:text-3xl text-[#401A0C] text-start mb-5">Students success stories</h3>
                    <div className="flex flex-nowrap overflow-x-hidden ">
                        <div className="flex gap-5 md:gap-12 w-screen">
                            <Image
                                alt="Image"
                                src={studentStories[active].image}
                                className="rounded-full w-[64px] md:w-[120px] h-fit mt-8"
                            />
                            <div className="flex flex-col gap-3.5 items-start w-[270px] md:w-full h-fit">
                                <p className="text[#401A0C] md:text-2xl md:mb-5 font-semibold text-[#401A0C]">{studentStories[active].name}</p>
                                <div className="relative flex flex-col gap-3.5 items-center">
                                <span className="absolute -left-3.5 md:-left-7 md:-top-4">
                                    <Image
                                        alt="apos"
                                        src={apos}
                                        className="w-[54px] h-[42px]"
                                    />
                                </span>
                                    <span className="text-start flex font-medium text-[10px] md:text-[16px] text-[#401A0C80]">
                                    {studentStories[active].story}
                                </span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3.5 mb-5 gap-2 tra">
                        {
                            studentStories.map((_, index) => (
                                <div key={index}
                                     className={`w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full ${active === index ? "bg-[#401A0C]" : "bg-[#D9D9D9]"}`}/>
                            ))
                        }
                    </div>

                <div className="flex gap-2 justify-end pr-5">
                    <ChevronLeft onClick={handlePrevious} size={30} className="cursor-pointer bg-[#602712] rounded-lg text-white"/>
                    <ChevronRight onClick={handleNext} size={30} className="cursor-pointer bg-[#602712] rounded-lg text-white"/>
                </div>
            </section>
        </>
    )
}
export default StudentStorySlide
