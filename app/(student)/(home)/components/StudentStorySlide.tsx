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
            <section className="pl-5 bg-[#F0EAE8] py-7 pr-4 mb-[62px]">
                <h3 className="font-semibold text-base text-[#401A0C] text-start mb-5">Students success stories</h3>
                    <div className="flex flex-nowrap overflow-x-hidden ">
                        <div className="flex gap-5 w-screen">
                            <Image
                                alt="Image"
                                src={studentStories[active].image}
                                className="rounded-full w-[64px] h-fit mt-8"
                            />
                            <div className="flex flex-col gap-3.5 items-start w-[270px] h-fit">
                                <p className="text[#401A0C]">{studentStories[active].name}</p>
                                <div className="relative flex flex-col gap-3.5 items-center">
                                <span className="absolute -left-3.5">
                                    <Image alt="apos" src={apos}/>
                                </span>
                                    <span className="text-start flex font-medium text-[10px] text-[#401A0C80]">
                                    {studentStories[active].story}
                                </span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3.5 mb-5 gap-2">
                        {
                            studentStories.map((_, index) => (
                                <div key={index}
                                     className={`w-1.5 h-1.5 rounded-full ${active === index ? "bg-[#401A0C]" : "bg-[#D9D9D9]"}`}/>
                            ))
                        }
                    </div>

                <div className="flex justify-end pr-5">
                    <ChevronLeft onClick={handlePrevious} className="cursor-pointer"/>
                    <ChevronRight onClick={handleNext} className="cursor-pointer"/>
                </div>
            </section>
        </>
    )
}
export default StudentStorySlide
