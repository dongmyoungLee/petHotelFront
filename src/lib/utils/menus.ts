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
                    url: "#",
                }
            ],
        },
        {
            title: "Hotels",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "호텔조회",
                    url: "/adminPage/hotel",
                },
                {
                    title: "호텔추가",
                    url: "/adminPage/hotel/new",
                }
            ],
        },
        {
            title: "Rooms",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "객실조회",
                    url: "#",
                },
                {
                    title: "객실추가",
                    url: "#",
                }
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