import React from 'react'
import {Hexagon, LockKeyholeOpen, SignalHigh, SignalLow, SignalMedium} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import music2 from "@/public/music2.jpg"
import b from "@/public/b.png"
import c from "@/public/c.png"
import d from "@/public/d.png"
import earTraining from "@/public/earTraining.jpeg"
import quiz from "@/public/quiz.jpeg"

const userInfo = [
    {
        name: "Michael Adams",
        subDuration: "6 Months",
        level: "Advance",
        unitCount: 200,
        daysLeft: 129,
        completion: "29%",
    }
]

const impoInfo = [
    {
        image: b,
        title: "Join our  whatsapp group",
        description: "Welcome to Spicy Guitar Academy",
    },
    {
        image: c,
        title: "Get your Free Course",
        description: "Welcome to Spicy Guitar Academy",
    },
    {
        image: d,
        title: "App Tour",
        description: "Welcome to Spicy Guitar Academy",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Welcome to Spicy Guitar Academy",
    },
]

const guitarChalllenge = [
    {
        image: quiz,
        title: "Quiz",
        description: "Level up your knowledge on the guitar by answering to Spicy Guitar Academy",
    },
    {
        image: c,
        title: "Get your Free Course Welcome to Spicy Guitar Academy",
        description: "Welcome to Spicy Guitar Academy",
    },
    {
        image: earTraining,
        title: "Ear Training",
        description: "Our assessment will help you know the category that best to Spicy Guitar Academy",
    },
]

const Dashboard = () => {
    return (
        <section className="bg-[#FFF8F0]">
            <section className="pt-9 pl-[59px] pr-[49px]">
                {
                    userInfo.map((user) => (
                        <>
                            <h1 className="font-bold text-3xl text-[#602712] font-poppins mb-7">Hi, {user.name}</h1>
                            <div className="rounded-lg h-[206px] bg-a mb-9"/>
                            <div className="flex flex-col gap-5 items-center text-white  px-[66px] pb-6 bg-[#F9F2F0] drop-shadow-md rounded-lg mb-7">
                                <div className="rounded-b-2xl bg-[#E89222] flex justify-center items-center font-semibold text-[28px] w-[305px] h-[54px]">
                                    Subscription Plan
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex gap-2 items-center">
                                            <LockKeyholeOpen color="#602712" size={21} />
                                            <span className="text-lg font-semibold text-[#00000080] font-poppins">{user.subDuration}</span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            {user.level === "Beginner"
                                                ? (<SignalLow color="#602712"/>)
                                                : user.level === "Intermediate" ? (<SignalMedium color="#602712"/>)
                                                    : user.level === "Advance" && (<SignalHigh color="#602712"/>)
                                            }
                                            <span className="text-lg font-semibold text-[#00000080] font-poppins">{user.level}</span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Hexagon color="#602712" fill="#602712"/>
                                            <span className="text-lg font-semibold text-[#00000080] font-poppins">{user.unitCount} Spicy Units</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5 items-end">
                                        <span className="text-lg font-semibold text-[#00000080] font-poppins">{user.daysLeft} days remaining</span>
                                        <span className="text-lg font-semibold text-[#00000080] font-poppins">{user.completion} completed</span>
                                        <span>
                                            <Button className="text-lg font-semibold bg-[#602712] font-poppins">Buy More</Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[186px] border border-[#602712] rounded-lg relative flex items-center justify-center px-6 mb-9">
                                <div className="w-[177px] h-[54px] bg-[#FFF8F0] text-[#602712] font-bold text-[28px] absolute -top-5 left-10 flex justify-center">Quick action</div>
                                <div className="flex items-center justify-between w-full">
                                    <Button className="w-[193px] text-[28px] font-medium bg-[#401A0C] h-[85px] rounded-xl">Curriculum</Button>
                                    <Button className="w-[193px] text-[28px] font-medium bg-[#7A402C] h-[85px] rounded-xl">Free Lesson</Button>
                                    <Button className="w-[193px] text-[28px] font-medium bg-[#5D3A0E] h-[85px] rounded-xl">Free Course</Button>
                                </div>
                            </div>

                        </>
                    ))
                }
            </section>
            <section className="pl-[59px] font-poppins">
                <div>
                    <h1 className="w-fit border-b border-b-[#602712] text-[#602712] text-[28px] font-bold pb-2 mb-6">IMPORTANT INFORMATION</h1>
                    <div className="h-[281px] border border-[#602712] rounded-xl relative flex items-center justify-start gap-3.5 px-4 py-2 mb-9 flex-nowrap overflow-x-auto no-scrollbar">
                        {impoInfo.map((info, index) => (
                                <div key={index} className="w-[230px] flex-shrink-0 cursor-pointer">
                                    <Image alt="image" src={info.image} className="w-[230px] h-[144x] rounded-lg" />
                                    <h2 className="text-[20px] font-bold text-[#602712] h-[60px]">{info.title}</h2>
                                    <p className="font-sans text-base mt-2">{info.description.slice(0, 40)}{info.description.length > 40 && "..."}</p>
                                </div>
                        ))
                        }
                    </div>
                </div>
            </section>
            <section className="pl-[59px] font-poppins mt-[49px] mb-[105px]">
                <div>
                    <h1 className="w-fit border-b border-b-[#602712] text-[#602712] text-[28px] font-bold pb-2 mb-6">GUITAR CHALLENGE</h1>
                    <div className="h-[281px] border border-[#602712] rounded-xl relative flex items-center justify-start gap-3.5 px-4 py-2 mb-9 flex-nowrap overflow-x-auto no-scrollbar">
                        {guitarChalllenge.map((info, index) => (
                                <div key={index} className="w-[230px] flex-shrink-0 cursor-pointer">
                                    <Image alt="image" src={info.image} className="w-[230px] h-[144px] rounded-lg object-cover object-top" />
                                    <h2 className="text-[20px] font-bold mt-1 text-[#602712]">{info.title.slice(0, 19)}{info.title.length > 20 && "..."}</h2>
                                    <p className="font-sans text-base mt-2">{info.description.slice(0, 40)}{info.description.length > 40 && "..."}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Dashboard
