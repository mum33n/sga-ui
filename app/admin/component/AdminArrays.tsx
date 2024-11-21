import {AdminNavsContents, FreeCourses} from "@/app/admin/component/AdminNavsContents";
import React from "react";
import {
    AdvanceContent,
    AmateurContent,
    BeginnerContent,
    IntermediateContent
} from "@/app/admin/component/CategoryContents";
import {AllContent, PendingContent, SuccessfulContent} from "@/app/admin/(pages)/subscriptions/transactionsTabContent";

interface AdminCarouselItem {
    title: string;
    count: number;
    color: string;
    content?: React.ReactNode;
}

interface categoryCoursesItem {
    title: string;
    count?: number;
    content?: React.ReactNode;
    head?: string;
    image?: string;
    description?: string;
    lesson?: number
}

interface bunchButtItem {
    title: string;
    color: string;
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
        content: <BeginnerContent />
    },
    {
        title: 'Amateur',
        count: 30,
        color: '#FFFFFF',
        content: <AmateurContent />
    },
    {
        title: 'Intermediate',
        count: 40,
        color: '#F0EAE8',
        content: <IntermediateContent />
    },
    {
        title: 'Advance',
        count: 50,
        color: '#FFFFFF',
        content: <AdvanceContent />
    },
]

export const categoryCoursesBeginner: categoryCoursesItem[] = [
    {
        title: 'Guitar Essentials for Beginners',
        description: 'Dive into the world of guitar with this beginner-friendly course. Learn the fundamentals of guitar playing, including basic chords, strumming techniques, and simple songs. Perfect for those with no prior experience, this course sets the foundation for a lifelong journey in music.',
        lesson: 4,
        image: '/music.jpg'
    },
    {
        title: 'Mastering the Piano: Intermediate Techniques',
        description: 'Take your piano skills to the next level with intermediate techniques designed to improve your playing accuracy, speed, and expression. Covering advanced chords, scales, and sight-reading exercises, this course is ideal for pianists who want to develop their musical style and tackle more challenging pieces.',
        lesson: 3,
        image: '/music1.jpg'
    },
    {
        title: 'The Art of Drumming: Rhythm and Percussion',
        description: 'Discover the rhythm and energy of drumming with our percussion-focused course. Students will learn essential drumming techniques, explore various genres and rhythms, and work on exercises to improve timing, coordination, and drum set skills. Suitable for all levels, this course will inspire your inner drummer.',
        lesson: 16,
        image: '/music2.jpg'
    },
    {
        title: 'Jazz Saxophone Workshop',
        description: 'Designed for saxophone players interested in jazz, this course covers improvisation, jazz scales, and stylistic techniques. Participants will explore jazz standards, learn to build solos, and understand jazz theory fundamentals. This workshop is perfect for players looking to bring creativity and flair to their saxophone skills.',
        lesson: 18,
        image: '/music3.jpeg'
    },
]

export const subscriptionPlans = [
    {
        discount: 10,
        duration: 1,
        price: '1,000',
    },
    {
        discount: 20,
        duration: 3,
        price: '2,000',
    },
    {
        discount: 30,
        duration: 6,
        price: '3,550',
    }
]

export const subscriptionTabs = [
    {
        title: 'All',
        color: '#F0EAE8',
        content: <AllContent />
    },
    {
        title: 'Successful',
        color: '#F0EAE8',
        content: <SuccessfulContent />
    },
    {
        title: 'Pending',
        color: '#F0EAE8',
        content: <PendingContent />
    },
]


const now = new Date();
const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
}).format(now);

const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
}).format(now);


export const transactionLineUp = [
    {
        transactionReferences: "SGA.N4.78782108",
        emailAdded: "michelle.rivera@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Done"
    },
    {
        transactionReferences: "Approved: Adm Taiwo",
        emailAdded: "abcd@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "SGA.N4.78782108",
        emailAdded: "efgh@example.com",
        status: "pending",
        date: formattedDate,
        time: formattedTime,
        transactionType: "Purchased Spicy Unit\n",
        finalResult: "Pending"
    },
    {
        transactionReferences: "Approved: Adm Segun",
        emailAdded: "wxyz@example.com",
        status: "successful",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Received"
    },
    {
        transactionReferences: "SGA.N4.78782108-2025",
        emailAdded: "mnop@example.com",
        status: "pending",
        date: formattedDate,
        time: formattedTime,
        transactionType: "12 month sub plan",
        finalResult: "Pending"
    },
]
