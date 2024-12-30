'use client';

import React from "react";
import FreeCourseRightSideBar from "../../../components/FreeCourseRightSideBar";


interface FreeCourseLayoutProps {
    children: React.ReactNode;
}

const FreeCourseLayout = ({ children }: FreeCourseLayoutProps) => {
    return (
        <section className="flex bg-[#FFF8F0]">
            {children}
            <FreeCourseRightSideBar />
        </section>
    );
};

export default FreeCourseLayout;
