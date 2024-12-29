'use client'
import {useRouter} from "next/navigation";
import React from "react";

export const StudentBackButton = () => {
    const router = useRouter();
    const handleBack = () => {
        if (window.history.length >= 1) {
            router.back(); // Go to the previous page
        } else {
            router.push('/admin/page.tsx'); // Fallback route
        }
    };

    return (
        <button
            className="text-base text-[#602712] cursor-pointer"
            onClick={handleBack}>
            Back
        </button>
    )
}