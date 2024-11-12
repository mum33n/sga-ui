import {AdminNavsContents, FreeCourses} from "@/app/admin/component/AdminNavsContents";
import React from "react";

interface AdminCarouselItem {
    title: string;
    count: number;
    color: string;
}

interface categoryCoursesItem {
    title: string;
    count: number;
    content: React.ReactNode;
    head: string;
}

interface bunchButtItem {
    title: string;
    color: string;
}

interface adminPagesNavItem {
    title: string;
    count: number;
}

export const carouselArrays: AdminCarouselItem[] = [
    {
        title: 'All students',
        count: 670,
        color: '#FDF4E9'
    },
    {
        title: 'Subscribers',
        count: 500,
        color: '#F4C991'
    },
    {
        title: 'All courses',
        count: 350,
        color: '#ECD9D2'
    },
    {
        title: 'All tutors',
        count: 126,
        color: '#cdbbb4'
    }
]

export const bunchButtsArrays: bunchButtItem[] = [
    {
        title: 'Assignment',
        color: '#AB8071'
    },
    {
        title: 'Questions',
        color: '#613D30'
    },
    {
        title: 'Support',
        color: '#552514'
    },
    {
        title: 'Chat Forum',
        color: '#3C2F2A'
    }
]

export const adminPagesNavArrays: categoryCoursesItem[] = [
    {
        title: 'Category courses',
        count: 45,
        content: <AdminNavsContents />,
        head: 'Courses'
    },
    {
        title: 'Free courses',
        count: 30,
        content: <FreeCourses />,
        head: 'Free Courses'
    },
    {
        title: 'Featured courses',
        count: 27,
        content: <AdminNavsContents />,
        head: 'Featured Courses'
    },
]

export const categoryCoursesArray: AdminCarouselItem[] = [
    {
        title: 'Beginner',
        count: 20,
        color: '#F0EAE8',
    },
    {
        title: 'Amateur',
        count: 30,
        color: '#FFFFFF',
    },
    {
        title: 'Intermediate',
        count: 40,
        color: '#F0EAE8',
    },
    {
        title: 'Advance',
        count: 50,
        color: '#FFFFFF',
    },
]

export const freeCoursesArray = [
    {
        title: 'Free Courses',
        url: ''

    }
]