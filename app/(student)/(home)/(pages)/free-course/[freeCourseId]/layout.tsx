'use client';
import React from "react";
import FreeCourseRightSideBar
    from "@/app/(student)/(home)/(pages)/free-course/[freeCourseId]/components/FreeCourseRightSideBar";

export default function FreeCourseLayout(x: {
    children: React.ReactNode;
    active?: boolean;
    setActive?: (active: boolean) => void;
}) {

    return (
        <section className="flex bg-[#FFF8F0]">
            {x.children}
            <FreeCourseRightSideBar active={x.active} setActive={x.setActive} />
        </section>
    );
}
