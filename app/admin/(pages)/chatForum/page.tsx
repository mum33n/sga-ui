import React from 'react'
import {FaUserFriends} from "react-icons/fa";
import {chatCategories} from "@/app/admin/component/AdminArrays";

const ChatForum = () => {
    return (
        <>
            <p className="text-xl font-medium text-[#602712] mb-6 px-5">Chat Forum</p>
            <section className="flex flex-col md:flex-row items-center gap-6 md:gap-16 px-5">
                {chatCategories.map((category, index) => (
                    <div key={index} className="w-48 h-[195px] drop-shadow-sm bg-white relative rounded-xl flex flex-col items-center gap-12 cursor-pointer">
                        <div className="w-48 h-16 bg-[#602712] rounded-t-xl"/>
                        <div className="bg-white rounded-full w-fit p-3 absolute top-10 left-16">
                            <FaUserFriends size={30} color={"#602712"}/>
                        </div>
                        <p className="text-[#602712] text-2xl font-medium">{category.category}</p>
                    </div>
                ))}

            </section>
        </>
    )
}
export default ChatForum
