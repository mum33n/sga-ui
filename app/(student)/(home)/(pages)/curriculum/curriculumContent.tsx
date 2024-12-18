import React from 'react'
import b from "@/public/b.png";
import c from "@/public/c.png";
import d from "@/public/d.png";
import music2 from "@/public/music2.jpg";
import quiz from "@/public/quiz.jpeg";
import earTraining from "@/public/earTraining.jpeg";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const courses = [
    {
        image: b,
        title: "Join our  whatsapp group",
        description: "Zarflin wamble snoozetrop, kinkleblot flarbin doozlewhip. Gribbleflox zindlewump, prazzlequack flibbityplop dranzoodle. Worblesnack zizzlefrap, glimberwoosh snoodlepop krimbleflop. Frizzlewump, glorbitysnack, dringlewobble snoof.",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course",
        description: "Blibberflunk drozzlewhip, skreebop wuzzlenorf, crindleplunk zopadoodle. Jibberflop snarglequix, plizzlewharf drabblewoop. Frizzlekrimp zundleflip, whizzlepop gloopersnack, bringlefroop snoozlekrink.",
        lessons: "6 Lessons",
        level: "Amateur",
    },
    {
        image: d,
        title: "App Tour",
        description: "Snizzlewump glimmerflap, dribblezink frozzleplunk, quibbletrap snoorblewoosh. Wizzlefrump krindlewhack, zopplegorp flibblemunch, glimberwhip snoozleflip",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
    {
        image: quiz,
        title: "Quiz",
        description: "Womblefrizz snoodlequack, grizzleplunk dribberflap, snorflequib zopplefrink. Frizzleklap blooberwump, skindlewharp dribblezorb, snoozletrap glimberplop. Zogglefritz plizzleflamp, zindlekrimp snooflewhip, frizzletrap snargleflip",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course Welcome to Spicy Guitar Academy",
        description: "Blizzlefrink zopplewump, snoodleflip drabblewock, glimberkramp snoozletrap. Frizzleplop wibbleklunk, snarglewhip flizzleframp, krindlefizz snoozleplunk. Plizzlewhorf snibbletrap, dribblefrump snoozlewhack, zindleflax glimberflip",
        lessons: "16 lLssons",
        level: "Amateur",
    },
    {
        image: earTraining,
        title: "Ear Training",
        description: "Blorpfizzle whacklesnug, drabbleflonk snoofletrap, quizzleflop zindlewhack. Frabblenorp wizzleflick, glibblefroop zindlequack, snoodlefrimp dribblewomp. Wombleflip snarglequix, frizzlewhack blorplezorb, skizzleflap snozzlepuff.",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
    {
        image: b,
        title: "Join our  whatsapp group",
        description: "Zarflin wamble snoozetrop, kinkleblot flarbin doozlewhip. Gribbleflox zindlewump, prazzlequack flibbityplop dranzoodle. Worblesnack zizzlefrap, glimberwoosh snoodlepop krimbleflop. Frizzlewump, glorbitysnack, dringlewobble snoof.",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course",
        description: "Blibberflunk drozzlewhip, skreebop wuzzlenorf, crindleplunk zopadoodle. Jibberflop snarglequix, plizzlewharf drabblewoop. Frizzlekrimp zundleflip, whizzlepop gloopersnack, bringlefroop snoozlekrink.",
        lessons: "6 Lessons",
        level: "Amateur",
    },
    {
        image: d,
        title: "App Tour",
        description: "Snizzlewump glimmerflap, dribblezink frozzleplunk, quibbletrap snoorblewoosh. Wizzlefrump krindlewhack, zopplegorp flibblemunch, glimberwhip snoozleflip",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
    {
        image: quiz,
        title: "Quiz",
        description: "Womblefrizz snoodlequack, grizzleplunk dribberflap, snorflequib zopplefrink. Frizzleklap blooberwump, skindlewharp dribblezorb, snoozletrap glimberplop. Zogglefritz plizzleflamp, zindlekrimp snooflewhip, frizzletrap snargleflip",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course Welcome to Spicy Guitar Academy",
        description: "Blizzlefrink zopplewump, snoodleflip drabblewock, glimberkramp snoozletrap. Frizzleplop wibbleklunk, snarglewhip flizzleframp, krindlefizz snoozleplunk. Plizzlewhorf snibbletrap, dribblefrump snoozlewhack, zindleflax glimberflip",
        lessons: "16 lLssons",
        level: "Amateur",
    },
    {
        image: earTraining,
        title: "Ear Training",
        description: "Blorpfizzle whacklesnug, drabbleflonk snoofletrap, quizzleflop zindlewhack. Frabblenorp wizzleflick, glibblefroop zindlequack, snoodlefrimp dribblewomp. Wombleflip snarglequix, frizzlewhack blorplezorb, skizzleflap snozzlepuff.",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
    {
        image: b,
        title: "Join our  whatsapp group",
        description: "Zarflin wamble snoozetrop, kinkleblot flarbin doozlewhip. Gribbleflox zindlewump, prazzlequack flibbityplop dranzoodle. Worblesnack zizzlefrap, glimberwoosh snoodlepop krimbleflop. Frizzlewump, glorbitysnack, dringlewobble snoof.",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course",
        description: "Blibberflunk drozzlewhip, skreebop wuzzlenorf, crindleplunk zopadoodle. Jibberflop snarglequix, plizzlewharf drabblewoop. Frizzlekrimp zundleflip, whizzlepop gloopersnack, bringlefroop snoozlekrink.",
        lessons: "6 Lessons",
        level: "Amateur",
    },
    {
        image: d,
        title: "App Tour",
        description: "Snizzlewump glimmerflap, dribblezink frozzleplunk, quibbletrap snoorblewoosh. Wizzlefrump krindlewhack, zopplegorp flibblemunch, glimberwhip snoozleflip",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
    {
        image: quiz,
        title: "Quiz",
        description: "Womblefrizz snoodlequack, grizzleplunk dribberflap, snorflequib zopplefrink. Frizzleklap blooberwump, skindlewharp dribblezorb, snoozletrap glimberplop. Zogglefritz plizzleflamp, zindlekrimp snooflewhip, frizzletrap snargleflip",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course Welcome to Spicy Guitar Academy",
        description: "Blizzlefrink zopplewump, snoodleflip drabblewock, glimberkramp snoozletrap. Frizzleplop wibbleklunk, snarglewhip flizzleframp, krindlefizz snoozleplunk. Plizzlewhorf snibbletrap, dribblefrump snoozlewhack, zindleflax glimberflip",
        lessons: "16 lLssons",
        level: "Amateur",
    },
    {
        image: earTraining,
        title: "Ear Training",
        description: "Blorpfizzle whacklesnug, drabbleflonk snoofletrap, quizzleflop zindlewhack. Frabblenorp wizzleflick, glibblefroop zindlequack, snoodlefrimp dribblewomp. Wombleflip snarglequix, frizzlewhack blorplezorb, skizzleflap snozzlepuff.",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
    {
        image: b,
        title: "Join our  whatsapp group",
        description: "Zarflin wamble snoozetrop, kinkleblot flarbin doozlewhip. Gribbleflox zindlewump, prazzlequack flibbityplop dranzoodle. Worblesnack zizzlefrap, glimberwoosh snoodlepop krimbleflop. Frizzlewump, glorbitysnack, dringlewobble snoof.",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course",
        description: "Blibberflunk drozzlewhip, skreebop wuzzlenorf, crindleplunk zopadoodle. Jibberflop snarglequix, plizzlewharf drabblewoop. Frizzlekrimp zundleflip, whizzlepop gloopersnack, bringlefroop snoozlekrink.",
        lessons: "6 Lessons",
        level: "Amateur",
    },
    {
        image: d,
        title: "App Tour",
        description: "Snizzlewump glimmerflap, dribblezink frozzleplunk, quibbletrap snoorblewoosh. Wizzlefrump krindlewhack, zopplegorp flibblemunch, glimberwhip snoozleflip",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
    {
        image: quiz,
        title: "Quiz",
        description: "Womblefrizz snoodlequack, grizzleplunk dribberflap, snorflequib zopplefrink. Frizzleklap blooberwump, skindlewharp dribblezorb, snoozletrap glimberplop. Zogglefritz plizzleflamp, zindlekrimp snooflewhip, frizzletrap snargleflip",
        lessons: "16 Lessons",
        level: "Beginner",
    },
    {
        image: c,
        title: "Get your Free Course Welcome to Spicy Guitar Academy",
        description: "Blizzlefrink zopplewump, snoodleflip drabblewock, glimberkramp snoozletrap. Frizzleplop wibbleklunk, snarglewhip flizzleframp, krindlefizz snoozleplunk. Plizzlewhorf snibbletrap, dribblefrump snoozlewhack, zindleflax glimberflip",
        lessons: "16 lLssons",
        level: "Amateur",
    },
    {
        image: earTraining,
        title: "Ear Training",
        description: "Blorpfizzle whacklesnug, drabbleflonk snoofletrap, quizzleflop zindlewhack. Frabblenorp wizzleflick, glibblefroop zindlequack, snoodlefrimp dribblewomp. Wombleflip snarglequix, frizzlewhack blorplezorb, skizzleflap snozzlepuff.",
        lessons: "16 Lessons",
        level: "Intermediate",
    },
    {
        image: music2,
        title: "Get your Free Course",
        description: "Flizzleworp drabblequack, snoozlefrink wibbleflap, kraznibble floobersnack. Twizzleflomp glibberplunk, snoorflekrip brizzlewop, zindlefrap snoodlewhack. Grozzleflip blizzlekrink, drumblepuff snoozlepop skizzlefrip",
        lessons: "5 Lessons",
        level: "Advance",
    },
]


export const Beginners = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit lg:px-9 bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {courses.map((course, index) => (
                    course.level === "Beginner" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 80)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}


export const Amateur = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {courses.map((course, index) => (
                    course.level === "Amateur" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 70)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export const Intermediate = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {courses.map((course, index) => (
                    course.level === "Intermediate" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 80)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export const Advance = () => {
    return (
        <section className="mt-[51px]">
            <div className="flex justify-end mb-11">
                <Button className="w-fit bg-[#602712]">Take this Category</Button>
            </div>
            <section className="flex flex-col w-full gap-3.5">
                {courses.map((course, index) => (
                    course.level === "Advance" &&
                    <div key={index} className="flex gap-6 w-full h-[169px] max-h-[169px] bg-white drop-shadow-md rounded-lg py-2 pl-2 pr-6 cursor-pointer">
                        <Image
                            alt="image"
                            src={course.image}
                            className="h-full min-w-[242px] max-w-[242px] rounded-lg object-cover object-top"
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-[#602712] mb-2">{course.title}</h1>
                            <p className="font-semibold text-lg text-[#454545] mb-4">{course.description.slice(0, 80)}{course.description.length > 80 && "..."}</p>
                            <p className="font-bold text-base text-[#E89222] text-end">{course.lessons}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}