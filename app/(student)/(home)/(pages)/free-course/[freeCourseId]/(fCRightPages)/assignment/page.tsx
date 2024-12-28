import React from 'react'
import {StudentBackButton} from "@/app/(student)/(home)/components/StudentBackButton";
import {Button} from "@/components/ui/button";
import {CgAttachment} from "react-icons/cg";

const assignmentStore = [
    {
        question: "",
        remark: "Welldone student, you may proceed to the next course. You have a 4 star rating.",
        rating: "",
        status: "answered",
    },
    {
        question: "",
        remark: "Welldone student, you may proceed to the next course. You have a 4 star rating.",
        rating: "",
        status: "answered",
    },
    {
        question: "Record for 3 minutes stretch, an audio of you playing the Major Scale Finger Exercise. The least Tempo that is accepted is 100 bpm.",
        remark: "",
        rating: "",
        status: "unanswered",
    },
    {
        question: "Record for 3 minutes stretch, an audio of you playing the Major Scale Finger Exercise. The least Tempo that is accepted is 100 bpm.",
        remark: "",
        rating: "",
        status: "unanswered",
    },
]

const Assignment = () => {
    return (
        <>
            <section className="w-full pt-9 pl-[44px] pr-[52px] font-poppins overflow-x-hidden">
                <StudentBackButton/>
                <h1 className="text-[24px] text-[#602712] font-bold mt-5 mb-4">Assignments
                    ({assignmentStore.length})</h1>
                <section className="flex flex-col gap-8">
                    {assignmentStore.map((assignment, index) => (
                        <div key={index}
                             className="w-full rounded-lg p-6 border border-[#602712] flex gap-[38px] overflow-x-hidden">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-[20px] text-[#602712]">Question {index + 1}</h2>
                                <p className="text-sm text-[#60271280] w-[426px]">
                                    {assignment.status === 'answered'
                                        ? assignment.remark
                                        : assignment.status === 'unanswered'
                                            ? assignment.question
                                            : null
                                    }
                                </p>
                                {assignment.status === 'unanswered' && (
                                    <div className="flex gap-4 mt-[10px]">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Ask question"
                                                className="w-[324px] h-[42px] bg-[#1E1E1E0D] pl-6 rounded-lg"
                                            />
                                            <CgAttachment color="#602712"
                                                          className="absolute right-5 top-3 cursor-pointer"/>
                                        </div>
                                        <Button className="bg-[#602712] px-7">Submit</Button>
                                    </div>
                                )}
                            </div>
                            {assignment.status === 'answered' && (
                                <div className="w-[154px] h-[71px] bg-[#6027121A]"></div>
                            )}
                        </div>
                    ))}
                </section>
            </section>
        </>


    )
}
export default Assignment
