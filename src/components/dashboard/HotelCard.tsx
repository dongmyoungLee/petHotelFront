'use client';

import {useEffect, useState} from "react";
import Image from "next/image";

export default function HotelCard() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>;
    }

    return (
        <div className="w-full h-full shadow-sm rounded-xl flex flex-col">
            <div className="relative w-full aspect-video mb-4">
                <Image
                    src="https://dnvefa72aowie.cloudfront.net/origin/article/202010/ba45503df6dbb48f978e90c1a3b626f24459b842d54ca9b40707ad02cc68c10e.webp?q=95&s=1440x1440&t=inside"
                    alt="호텔 프로필"
                    fill
                    className="object-cover rounded-tl-md rounded-tr-md"
                    priority
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-[#8b74ff]">강아지 천국 호텔</h2>

                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">주소:</span> 서울시 강남구 역삼동 123-45
                </p>

                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">연락처:</span> 02-123-4567
                </p>

                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">웹사이트:</span>{" "}
                    <a
                        href="https://www.dogheavenhotel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        www.dogheavenhotel.com
                    </a>
                </p>

                <p className="text-gray-600">
                    <span className="font-semibold">대표자:</span> 김사장
                </p>
            </div>
        </div>
    );
}
