import React from 'react'
import {GrAnnounce} from "react-icons/gr";
import {subscriptionPlans} from "@/app/admin/component/AdminArrays";

const Subscription = () => {
    return (
        <section className="px-5">
            <h2 className="font-medium text-xl text-[#602712] mb-10">Subscription plans</h2>
            <div
                className="flex gap-1 py-1.5 h-[51px] border border-[#602712] rounded-lg items-center justify-center mb-12">
                <GrAnnounce size={24} strokeWidth={1} color={'#602712'}/>
                <span className="text-[#602712] text-2xl">Promo</span>
            </div>
            <div className="flex flex-col flex-wrap gap-3.5 py-5 border border-[#602712] rounded-lg items-center justify-center mb-12">
                {
                    subscriptionPlans.map((subscriptionPlan, index) => (
                        <div
                            key={index}
                            className="w-48 h-56 rounded-lg border border-[#C4AAA1] relative flex flex-col items-center"
                        >
                            <p className="bg-[#D1831F] px-[10px] py-[6px] rounded-tl-lg rounded-br-lg text-white font-semibold text-xs absolute top-0 right-0">
                                {subscriptionPlan.discount}%
                                OFF
                            </p>
                            <p className="mt-7 font-medium text-[#895543]">{subscriptionPlan.duration} MONTH PLAN</p>
                            <p className="font-bold text-2xl text-[#602712] mt-6">#{subscriptionPlan.price}</p>
                            <button
                                className="bg-[#602712] w-[155px] h-10 rounded-lg text-white font-medium mt-11">Edit
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Subscription
