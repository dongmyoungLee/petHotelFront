'use client';

import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage} from "@/components/ui/breadcrumb";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function AppHeader() {
    const [pathSegments, setPathSegments] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname)
        if (pathname) {
            setPathSegments(pathname.split('/').filter(segment => segment));
        }
    }, [pathname]);

    const getBreadcrumbText = (segment) => {
        switch (segment) {
            case 'reservation':
                return '예약현황';
            case 'hotel':
                return '호텔조회';
            case 'new':
                return '호텔추가';
            default:
                return segment;
        }
    };


    return (
        <header className="w-full flex h-16 shrink-0 items-start gap-2">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                    <BreadcrumbList>
                        {/*<BreadcrumbItem className="hidden md:block">*/}
                        {/*    <BreadcrumbLink href="#">*/}
                        {/*        {getBreadcrumbText(pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : '')}*/}
                        {/*    </BreadcrumbLink>*/}
                        {/*</BreadcrumbItem>*/}
                        {/*<BreadcrumbSeparator className="hidden md:block" />*/}
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                {getBreadcrumbText(pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : '')}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
}