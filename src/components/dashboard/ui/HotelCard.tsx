import {Hotel} from "@/types/auth/hotel/authType";
import {HotelEditDialog} from "@/components/common/HotelEditDialog";
import {Dialog} from "@/types/auth/common/authType";

export default async function HotelCard({hotel, token} : { hotel: Hotel, token: string | undefined }) {

    const dialogData: Dialog = {
        title : '수정',
        key: 'hotel',
        description: '수정 하실 호텔의 정보를 입력 해주세요.',
        contents : ['hotelName', 'hotelAddress', 'hotelPhone', 'hotelWebsite','hotelProfileImg','hotelOwnerName'],
        korContent: ['업체명', '주소', '연락처', '사이트', '사진', '대표자'],
        token: token,
    }


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
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold mb-2 text-[#8b74ff]">{hotel.hotelName}</h2>
                    <HotelEditDialog data={dialogData} hotel={hotel} />
                </div>
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
