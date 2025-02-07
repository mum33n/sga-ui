import {HomeCarousel} from "@/app/(student)/(home)/components/homeCarousel";
import {FaYoutube} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import rightColumn from "@/public/right_column.png"
import Image from "next/image";
import lesson1 from "@/public/lessons 1.png"
import tutorialCourses from "@/public/tutorialcourses.png"
import tutorialAudio from "@/public/tutorialaudio.png"
import studentForum from "@/public/studentforum 1.png"
import rightCol from "@/public/right-column.png"
import rightCol1 from "@/public/right-column (1).png"
import { Progress } from "@/components/ui/progress"
import StudentStorySlide from "@/app/(student)/(home)/components/StudentStorySlide";
import AboutSomeone from "@/app/(student)/(home)/components/AboutSomeone";

const numCount = [
    {
        title: "Reg. Students",
        count: "10,000+",
    },
    {
        title: "Paid Courses",
        count: "101,000+",
    },
    {
        title: "Free Lessons",
        count: "70+",
    },
]

const supportComp = [
    {
        image: lesson1,
        description: (<>Learn At Your <br /> Convenience And Pace.</>),
    },
    {
        image: tutorialCourses,
        description: (
            <>
                Hundreds Of Lessons <br />
                From Beginners To
                <br /> Advance.
            </>
        )
    },
    {
        image: tutorialAudio,

        description: (
            <>
                Backing Track With <br />
                Adjustable Tempo <br />
                Features.
            </>
        ),
    },
    {
        image: studentForum,
        description: (
            <>
                Join Our <br />
                Student Forum.
            </>
        ),
    },
]

const lessonCarousel = [
    {
        id: '1',
        title: 'Beginner',
        count: 60,
        color: '#7A402C'
    },
    {
        id: '2',
        title: 'Amateur',
        count: 10,
        color: '#744911'
    },
    {
        id: '3',
        title: '6 MONTH',
        count: 0,
        color: '#4B1E0E'
    },
    {
        id: '4',
        title: '12 MONTH',
        count: 0,
        color: '#200D06'
    },
]

const Homepage = () => {
    return (
        <>
            <main className="font-montserrat ">
                <div className="bg-student-mobile h-[200px] md:h-[366px] lg:h-[631px] w-screen bg-cover bg-no-repeat bg-left-top flex flex-col justify-center items-center gap-6 mb-16">
                    <p className="text-2xl md:text-[40px] lg:text-[60px] text-white font-bold text-center md:leading-[50px] lg:leading-[70px]">
                        <span className="text-[#D1831F] lg:text-[65px] font-black">Learn </span>
                        Guitar With <br/>
                        Spicy Guitar Academy
                    </p>
                    <div
                        className="bg-[#E89222] px-4 lg:px-6 lg:py-3 h-10 rounded-lg text-white flex items-center justify-center font-semibold text-base lg:text-2xl">Your
                        Guitar Journey Starts Here!
                    </div>
                </div>

                <div className="mb-16 md:mb-[77px]">
                    <p className="text-[#2B1108] font-semibold text-[20px] lg:text-3xl text-center mb-12">JOIN US FOR FREE</p>
                    <div className="flex justify-center overflow-x-hidden">
                        <div
                            className="flex px-4 md:px-8 w-screen lg:w-[794px] justify-between text-[#636363] mb-8 lg:mb-12">
                            {
                                numCount.map((item, index) => (
                                    <div key={index}
                                         className="font-semibold text-xs md:text-xl lg:text-2xl flex flex-col items-center gap-1">
                                        <span>{item.title}</span>
                                        <span>{item.count}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <HomeCarousel/>
                    <div className="flex justify-center items-center mt-6">
                        <div className="w-screen md:w-[567px] flex px-4 relative items-center">
                            <div
                                className="w-full h-10 border-2 border-[#D1831F] rounded-full lg:rounded-2xl flex items-center pl-2.5 gap-2">
                                <FaYoutube
                                    color={"#FF0101"}
                                    width={18}
                                    height={12}
                                />
                                <span className="font-semibold text-[10px] md:text-[14px]">15K subscribers on YOUTUBE</span>
                            </div>
                            <div
                                className="h-9 w-[115px] md:w-[223px] rounded-full lg:rounded-2xl bg-[#D1831F] absolute right-4 top-0.5 text-white font-semibold text-[10px] md:text-[14px] flex items-center justify-center">
                                FREE Guitar Lessons
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-[#2B1108] font-semibold text-[20px] lg:text-3xl text-center mb-2">OUR MISSION</p>
                <div className="w-screen relative bg-[#2B1108] text-white pt-4 ">
                    <div className="pl-[18px] md:px-[55px] lg:pl-[67px] relative">
                        <div className="flex flex-col gap-3.5 md:pt-6">
                            <span className="w-[255px] md:w-[480px] lg:w-[550px] font-semibold text-base md:text-xl lg:text-2xl">Spicy Guitar Academy Is Aimed At Guiding Beginners To Fulfill Their Dream Of Becoming Professional Guitar Players.</span>
                            <span className="text-[#D1831F] font-semibold text-base md:text-xl lg:text-2xl lg:mt-5">- Guitarism, Igniting Creativity.</span>
                            <span className="lg:mt-12">
                              <Button className="font-semibold text-base lg:text-lg bg-[#D1831F] rounded-full">Create Account</Button>
                          </span>
                        </div>
                        <Image
                            src={rightColumn}
                            alt="image"
                            className="absolute lg:w-[373px] right-5 md:right-10 lg:right-20 top-40 md:-top-24 lg:-top-56"
                        />
                    </div>

                    <div className="flex justify-center">
                        <div
                            className="w-screen md:w-[680px] lg:w-[1232px] bg-white mt-[300px] md:mt-[59px] rounded-2xl p-9 flex flex-col items-center">
                            <p className="text-[#2B1108] font-bold text-[20px] md:text-[28px] lg:text-3xl leading-10 text-center mb-6 md:pt-4">HOW WE SUPPORT
                                YOUR <br className="lg:hidden" /> LEARNING JOURNEY</p>
                            <div className="flex flex-col lg:w-full lg:justify-between md:justify-center md:flex-row md:flex-wrap md:px-[50px]">
                                {
                                    supportComp.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center ">
                                            <Image
                                                alt="image"
                                                src={item.image}
                                                width={245}
                                                className="lg:h-[170px]"
                                            />
                                            <p className="text-[#2B1108] font-semibold text-lg text-center mb-2">{item.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className="w-screen bg-white mt-9 pt-16 text-black text-center {/*rounded-bl-3xl*/}">
                        <div className="w-screen bg-[#F0EAE8] py-11 mb-16">
                            <div className="flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-4 mb-11 text-xl md:text-[28px] font-semibold">
                                <span className="text-[#2B1108]">OVERCOME YOUR</span>
                                <span className="py-3 px-4 bg-[#2B1108] rounded-full md:rounded-2xl text-white">GUITAR STRUGGLES</span>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <p className="px-4 lg:pl-[95px] font-semibold text-lg md:text-[28px] lg:text-3xl md:leading-10 lg:w-[538px] lg:text-start text-[#401A0C] text-center mb-11">
                                    You&#39;re
                                    <span className="text-[#F7B500]"> never alone </span>
                                    on your guitar journey. Our dedicated team of instructors is on standby to help you
                                    overcome trouble spots.
                                </p>
                                <div className="px-4 lg:pr-[104px] mb-2.5 md:flex md:justify-center">
                                    <Image
                                        alt="image"
                                        src={rightCol}
                                        className="md:hidden"
                                    />
                                    <Image
                                        alt="image"
                                        src={rightCol1}
                                        className="hidden md:block"
                                    />
                                </div>
                            </div>

                            <Button className="rounded-full bg-[#D1831F] md:mt-9 lg:text-lg">Join Spicy Guitar Academy for
                                FREE</Button>
                        </div>

                        <div className="px-4 mb-16 md:flex md:flex-col items-center">
                            <div className="font-semibold text-base md:text-3xl flex gap-2 md:gap-4 items-center justify-center mb-6 lg:mb-9">
                                <span className="text-[#000000]">Lessons For</span>
                                <span className="text-white py-1.5 px-2.5 bg-[#2B1108] rounded-full md:rounded-2xl">All Skills Level</span>
                            </div>
                            <div className="flex md:w-[485px] lg:w-full md:items-center flex-wrap gap-3 lg:gap-10 justify-center">
                                {lessonCarousel.map((item, index) => (
                                    <div key={index}
                                         className={`w-[138px] md:w-[222px] lg:w-[275px] h-[110px] md:h-[176px] bg-custom-image bg-cover bg-no-repeat rounded-lg`}
                                         style={{
                                             backgroundColor: item.color,
                                             backgroundPosition: "-120% -110%",
                                         }}>
                                        <div
                                            className="w-full h-full opacity-80 pl-5 pr-4 flex items-start flex-col justify-center text-xs text-white rounded-lg"
                                            style={{backgroundColor: item.color}}>
                                            <p className="font-normal mb-1">Level</p>
                                            <h3 className="font-bold mb-3.5">{item.title.toUpperCase()}</h3>
                                            <Progress value={item.count}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <StudentStorySlide/>
                        <AboutSomeone/>
                    </div>
                </div>
            </main>
        </>

    );
}

export default Homepage