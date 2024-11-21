import React from 'react'
// import Layout from "./layout"
import {CarouselSpacing} from "@/app/admin/component/AdminCarousel";
import {Bunchbutts} from "@/app/admin/component/Bunchbutts";

const Page = () => {
    return (
        // <Layout>
        <div className="">
            <div className="px-5 flex flex-col mb-10">
                <span className="text-2xl font-medium">Welcome,</span>
                <span className="text-[18px]">Maradesa</span>
            </div>
            <CarouselSpacing/>
            <Bunchbutts/>
        </div>
        // </Layout>

    )
}
export default Page
