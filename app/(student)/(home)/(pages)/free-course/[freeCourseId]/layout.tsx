'use client';
import React from "react";
import FreeCourseRightSideBar from "@/app/(student)/(home)/(pages)/free-course/[freeCourseId]/components/FreeCourseRightSideBar";

type FreeCourseLayoutProps = {
    children: React.ReactNode;
    active?: boolean;
    setActive?: (active: boolean) => void;
};

const FreeCourseLayout = ({ children, active, setActive }: FreeCourseLayoutProps) => {
    return (
        <section className="flex bg-[#FFF8F0]">
            {children}
            <FreeCourseRightSideBar active={active} setActive={setActive} />
        </section>
    );
};

export default FreeCourseLayout;