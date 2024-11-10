import React from 'react'
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import AdminSidebar from "@/app/admin/component/AdminSidebar";

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}
export default Layout
