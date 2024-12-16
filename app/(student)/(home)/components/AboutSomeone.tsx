import React from 'react'

const AboutSomeone = () => {
    return (
        <section>
            <h1 className="text-center text-[#401A0C] font-semibold text-xl md:text-3xl mt-5 mb-[35px]">ABOUT OC <br
                className="md:hidden"/> OMOFUMA</h1>
            <div className="overflow-x-hidden">
                <p className="whitespace-nowrap w-screen font-semibold text-base md:text-2xl animate-marquee mb-[37px] italic">I am
                    a <span className="text-[#E89222]">  teacher </span>| guitarist | songwriter | artist | family man.
                </p>
                <p className="font-normal text-xs md:text-base text-end animate-marquee pl-[50px] w-[660px]">I started Spicy Guitar Academy in 2016 -
                    but began teaching way before that.<br className="hidden"/>I carefully design my courses to help you
                    make the best out of your guitar <br className="hidden"/> time! My lessons feel like private lessons
                    and are just as effective. Some of <br className="hidden"/> them are free. Teaching the world how to
                    play guitar is what I&#39;ll do forever.
                </p>
                <section className="flex gap-[110px] animate-marquee mt-[100px]">
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold text-2xl">8 YEARS</span>
                        <span className="font-semibold text-lg whitespace-nowrap">Of Online Lessons</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold text-2xl">26+ YEARS</span>
                        <span className="font-semibold text-lg whitespace-nowrap">Teaching Guitar</span>
                    </div>
                </section>
            </div>

        </section>
    )
}
export default AboutSomeone