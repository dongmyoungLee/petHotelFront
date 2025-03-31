import {Hotel} from "@/types/auth/hotel/authType";

export default async function HotelCard({hotel} : { hotel: Hotel }) {
    return (
        <div className="w-full h-full shadow-sm rounded-xl flex flex-col">
            <div className="relative w-full aspect-video mb-4">
                <img
                    src="https://dnvefa72aowie.cloudfront.net/origin/article/202010/ba45503df6dbb48f978e90c1a3b626f24459b842d54ca9b40707ad02cc68c10e.webp?q=95&s=1440x1440&t=inside"
                    alt="호텔 프로필"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-tl-md rounded-tr-md"
                    loading="lazy"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-[#8b74ff]">{hotel.hotelName}</h2>

                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">주소:</span> {hotel.hotelAddress}
                </p>

                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">연락처:</span> {hotel.hotelPhone}
                </p>

                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">웹사이트:</span>{" "}
                    <a
                        href={hotel.hotelWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        {hotel.hotelWebsite}
                    </a>
                </p>

                <p className="text-gray-600">
                    <span className="font-semibold">대표자:</span> {hotel.hotelOwnerName}
                </p>
            </div>
        </div>
    );
}
