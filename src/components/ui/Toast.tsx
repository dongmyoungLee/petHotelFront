// src/components/ui/Toast.tsx
"use client"

import { useTheme } from "next-themes"
import { Toaster } from "sonner"

export const Toast = () => {
    const { theme = "system" } = useTheme();


    return (
        <Toaster
            theme={theme as "system" | "light" | "dark" | undefined}
            position="top-center"
            duration={2000}
            richColors
            toastOptions={{
                style: {
                    backgroundColor: "white", // 배경을 흰색으로 설정
                    border: "1px solid", // 테두리 색상
                },
                classNames: {
                    success: "border-green-500 text-green-700", // 초록색 테두리
                    error: "border-red-500 text-red-700",      // 빨간색 테두리
                    warning: "border-yellow-500 text-yellow-700", // 노란색 테두리
                    info: "border-blue-500 text-blue-700",     // 파란색 테두리
                },
            }}
        />
    )
}
