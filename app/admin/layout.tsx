import React from 'react'
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import AdminSidebar from "@/app/admin/component/AdminSidebar";
import {Bell, Search} from 'lucide-react';

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main className="overflow-x-hidden">
                <section className="flex mb-9 justify-between w-screen px-5 py-4 border-b border-b-[#1C1C1C1A]">
                    <SidebarTrigger className="md:hidden" />
                    <div className="hidden md:flex gap-4 justify-center items-center">
                        <Bell style={{ width: '20px', height: '20px' }} />
                        <span className="text-[#1C1C1C66] text-sm font-normal">Transactions</span>
                    </div>
                    <div className="pr-[260px] flex items-center gap-5">
                        <div className="relative px-2 invisible md:visible">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[462px] h-9 bg-[#1C1C1C0D] rounded-lg text-base font-normal pl-7"
                            />
                            <Search
                                size={16}
                                color="#1C1C1C33"
                                className="absolute top-2.5 left-4"
                            />
                        </div>
                        <Bell style={{width: '20px', height: '20px'}}/>
                    </div>
                </section>
                {children}
            </main>
        </SidebarProvider>
    )
}
export default Layout
