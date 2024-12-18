import React from 'react'
import b from "@/public/b.png";
import c from "@/public/c.png";
import d from "@/public/d.png";
import music2 from "@/public/music2.jpg";
import quiz from "@/public/quiz.jpeg";
import earTraining from "@/public/earTraining.jpeg";
import Image from "next/image";
import {Clock3, TvMinimalPlay} from "lucide-react";

const courses = [
    {
        image: b,
        title: "Join our  whatsapp group",
        description: "Zarflin wamble snoozetrop, kinkleblot flarbin doozlewhip. Gribbleflox zindlewump, prazzlequack flibbityplop dranzoodle. Worblesnack zizzlefrap, glimberwoosh snoodlepop krimbleflop. Frizzlewump, glorbitysnack, dringlewobble snoof.",
        lessons: "16 Lessons",
        unknownNumber: 1,
    },
    {
        image: c,
        title: "Get your Free Course",
        description: "Blibberflunk drozzlewhip, skreebop wuzzlenorf, crindleplunk zopadoodle. Jibberflop snarglequix, plizzlewharf drabblewoop. Frizzlekrimp zundleflip, whizzlepop gloopersnack, bringlefroop snoozlekrink.",
        lessons: "6 Lessons",
        unknownNumber: 3,
    },
    {
        image: d,
        title: "App Tour",
        description: "Snizzlewump glimmerflap, dribblezink frozzleplunk, quibbletrap snoorblewoosh. Wizzlefrump krindlewhack, zopplegorp flibblemunch, glimberwhip snoozleflip",
        lessons: "16 Lessons",
        unknownNumber: 1,
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        unknownNumber: 2,
    },
    {
        image: quiz,
        title: "Quiz",
        description: "Womblefrizz snoodlequack, grizzleplunk dribberflap, snorflequib zopplefrink. Frizzleklap blooberwump, skindlewharp dribblezorb, snoozletrap glimberplop. Zogglefritz plizzleflamp, zindlekrimp snooflewhip, frizzletrap snargleflip",
        lessons: "16 Lessons",
        unknownNumber: 3,
    },
    {
        image: c,
        title: "Get your Free Course Welcome to Spicy Guitar Academy",
        description: "Blizzlefrink zopplewump, snoodleflip drabblewock, glimberkramp snoozletrap. Frizzleplop wibbleklunk, snarglewhip flizzleframp, krindlefizz snoozleplunk. Plizzlewhorf snibbletrap, dribblefrump snoozlewhack, zindleflax glimberflip",
        lessons: "16 lLssons",
        unknownNumber: 2,
    },
    {
        image: earTraining,
        title: "Ear Training",
        description: "Blorpfizzle whacklesnug, drabbleflonk snoofletrap, quizzleflop zindlewhack. Frabblenorp wizzleflick, glibblefroop zindlequack, snoodlefrimp dribblewomp. Wombleflip snarglequix, frizzlewhack blorplezorb, skizzleflap snozzlepuff.",
        lessons: "16 Lessons",
        unknownNumber: 1,
    },
]

const Course = () => {
    return (
        <section className="w-screen pt-9 pl-[19px] pr-[19px] lg:pl-[59px] lg:pr-[49px] font-poppins">
            <h1 className="font-bold text-[40px] text-[#602712] font-poppins mb-5">My Course</h1>
            <div className="rounded-lg lg:rounded-2xl h-[206px] lg:h-[283px] bg-cover bg-e mb-9"/>
            <section className="w-full flex flex-wrap gap-5 mb-5">
                {
                    courses.map((course, index) => (
                        <div key={index} className="w-[229px] lg:w-[300px] h-[268px] lg:h-[276px] py-4 px-2 text-center drop-shadow-lg bg-[#A8533408] cursor-pointer">
                            <div className="w-full relative mb-2">
                                <Image
                                    alt="image"
                                    src={course.image}
                                    className="w-full h-[110px] lg:h-[118px] object-cover object-top rounded-lg"
                                />
                                <span className="absolute top-1.5 right-1.5 px-1 rounded-sm bg-[#EDA84E] text-white text-sm font-bold">{course.unknownNumber}</span>
                            </div>
                            <h1 className="font-bold text-lg text-[#602712] mb-2">{course.title.slice(0, 19)}{course.title.length > 19 && "..."}</h1>
                            <p className="font-medium text-sm text-[#858585] text-justify mb-6">{course.description.slice(0, 55)}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-1.5 px-1.5 py-1 rounded-lg bg-[#602712] w-fit">
                                    <span><TvMinimalPlay color="white" size={20} /></span>
                                    <span className="text-sm font-medium text-white whitespace-nowrap">{course.lessons}</span>
                                </div>
                                <div className="flex gap-1.5 px-1.5 py-1 rounded-lg w-fit text-[#602712]">
                                    <span><Clock3 color="#602712" size={20}/></span>
                                    <span className="text-sm font-medium whitespace-nowrap">{course.lessons}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </section>
    )
}
export default Course
