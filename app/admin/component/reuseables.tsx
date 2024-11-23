'use client'
import {useRouter} from "next/navigation";
import React from "react";

export const BackButton = () => {
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
            className="text-base text-[#602712] cursor-pointer px-5 mb-8"
            onClick={handleBack}>
            Back
        </button>
    )
}