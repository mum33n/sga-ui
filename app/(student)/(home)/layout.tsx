import React from "react";
import { Montserrat, Inter, Poppins } from 'next/font/google';
import Header from "@/components/common/Header";
import Footer from "@/app/(student)/(home)/components/Footer";
import StudentSideBar from "@/app/(student)/(home)/components/StudentSideBar";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat', // Define as CSS variable
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            style={{ overflowX: "hidden" }}
            className={`${montserrat.variable} ${inter.variable} ${poppins.variable}`}
        >
        <body className="min-h-screen font-montserrat overflow-x-hidden">
            <Header />
            <section className="flex bg-[#FFF8F0]">
                <StudentSideBar />
                {children}
            </section>
            <Footer />
        </body>
        </html>
    );
}
