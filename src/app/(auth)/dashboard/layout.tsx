import {AppSidebar} from "@/components/dashboard/ui/app-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import AppHeader from "@/components/dashboard/ui/app-header";

export default function DashBoardLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <AppHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>

    );
}
