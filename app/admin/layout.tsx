import React from 'react'
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import AdminSidebar from "@/app/admin/component/AdminSidebar";
import { Bell } from 'lucide-react';

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main className="overflow-x-hidden">
                <section className="flex justify-between w-screen px-5 pt-11 pb-6">
                    <SidebarTrigger />
                    <Bell style={{ width: '20px', height: '20px' }} />
                </section>
                {children}
            </main>
        </SidebarProvider>
    )
}
export default Layout
