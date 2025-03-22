import type {Metadata} from "next";
import "@/app/globals.css";
import {Toaster} from "@/components/ui/sonner";
import {Toast} from "@/components/ui/Toast";
import Script from "next/script";


export const metadata: Metadata = {
    title: "PetHotel | 강아지, 고양이 및 대형견을 위한 프리미엄 예약 서비스",
    description: "PetHotel에서는 강아지, 고양이, 대형견을 위한 친화적인 호텔 객실 예약, 컨시어지 서비스, 애완동물 케어 및 교통 서비스를 제공합니다. 애완동물 주인과 호텔 직원 모두를 위한 맞춤형 경험을 제공합니다.",
    keywords: "애완동물 호텔, 강아지 호텔, 고양이 호텔, 대형견 호텔, 애완동물 예약, 애완동물 케어, 애완동물 컨시어지, 호텔 예약, 애완동물 교통, 애완동물 친화적 숙소",
    openGraph: {
        type: "website",
        url: "",
        title: "PetHotel | 강아지, 고양이 및 대형견을 위한 프리미엄 예약 서비스",
        description: "PetHotel에서는 강아지, 고양이, 대형견을 위한 친화적인 호텔 객실 예약, 컨시어지 서비스, 애완동물 케어 및 교통 서비스를 제공합니다. 애완동물 주인과 호텔 직원 모두를 위한 맞춤형 경험을 제공합니다.",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "PetHotel 배너 이미지",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PetHotel | 강아지, 고양이 및 대형견을 위한 프리미엄 예약 서비스",
        description: "PetHotel에서는 강아지, 고양이, 대형견을 위한 친화적인 호텔 객실 예약, 컨시어지 서비스, 애완동물 케어 및 교통 서비스를 제공합니다.",
        images: "/images/pethotel-banner.jpg",
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <Script
              async
              src='https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js'
              integrity='sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh'
              crossOrigin='anonymous'
          ></Script>
      </head>
      <body>
        {children}
        <Toast />
      </body>
    </html>
  );
}
