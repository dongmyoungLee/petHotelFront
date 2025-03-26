import {AppSidebar} from "@/components/dashboard/app-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import AppHeader from "@/components/dashboard/app-header";

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
