import {SheetForm} from "@/components/dashboard/ui/SheetForm";
import {Dialog} from "@/types/auth/common/authType";
import HotelList from "@/components/dashboard/hotel/hotel-list";
import {Suspense} from "react";
import Loading from "@/app/(auth)/dashboard/room/loading";
import {getAccessToken} from "@/lib/utils/cookieUtils";

export default async function HotelPage() {
    const token: string|undefined = await getAccessToken();

    // test ->
    const dialogData: Dialog = {
        title : '호텔 추가',
        key: 'hotel',
        description: '입점 하실 호텔의 정보를 입력 해주세요.',
        contents : ['hotelName', 'hotelAddress', 'hotelPhone', 'hotelWebsite','hotelProfileImg','hotelOwnerName'],
        korContent: ['업체명', '주소', '연락처', '사이트', '사진', '대표자'],
        token: token,
    }

    return (
        <>
            <div className="w-full flex justify-end mb-5 pr-5">
                <SheetForm data={dialogData} />
            </div>
            <div className="w-full flex flex-1 flex-col gap-4 p-4 pt-0">
                <Suspense fallback={<Loading />}>
                    <HotelList token={token}/>
                </Suspense>
            </div>

        </>
    );
}