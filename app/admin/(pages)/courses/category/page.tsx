'use client';

import React from 'react'
import {CoursesTabs} from "@/app/admin/component/CoursesTabs";
import {categoryCoursesArray} from "@/app/admin/component/AdminArrays";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const Category = () => {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length >= 1) {
            router.back(); // Go to the previous page
        } else {
            router.push('/admin/page.tsx'); // Fallback route
        }
    };

    return (
        <div className="px-5">
            <div className="flex justify-between items-center">
                <button
                    className="text-lg text-[#602712] cursor-pointer"
                    onClick={handleBack}
                >
                    Back
                </button>
                <Link href={"/form"} passHref>
                    <Button className="bg-[#602712] text-[16px]">
                        <Plus/> Add course
                    </Button>
                </Link>
            </div>
            <CoursesTabs courses={categoryCoursesArray} />
        </div>
    )
}
export default Category
