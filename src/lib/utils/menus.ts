import {BookOpen, Bot, Frame, LifeBuoy, Map, PieChart, Send, Settings2, SquareTerminal} from "lucide-react";

export const menus = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "예약현황",
                    url: "/dashboard/reservation",
                }
            ],
        },
        {
            title: "Hotel",
            url: "#",
            icon: Bot,
            isActive: true,
            items: [
                {
                    title: "호텔정보",
                    url: "/dashboard/hotel",
                },
                // {
                //     title: "호텔추가",
                //     url: "/dashboard/hotel/new",
                // }
            ],
        },
        {
            title: "Rooms",
            url: "#",
            isActive: true,
            icon: BookOpen,
            items: [
                {
                    title: "객실정보",
                    url: "/dashboard/room",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "Mypage",
                    url: "#",
                }
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}