import {SheetDemo} from "@/components/dashboard/ui/SheetDemo";
import {cookies} from "next/headers";
import {Dialog} from "@/types/auth/common/authType";
import HotelList from "@/components/dashboard/hotel/hotel-list";
import {Suspense} from "react";
import Loading from "@/app/(auth)/dashboard/room/loading";

export default async function HotelPage() {
    const cookieStore = await cookies();
    const token: string|undefined = cookieStore.get("access_token")?.value;

    const dialogData: Dialog = {
        title : '호텔 추가',
        description: '입점 하실 호텔의 정보를 입력 해주세요.',
        contents : ['업체명', '주소', '연락처', '사이트','대표자'],
    }

    return (
        <>
            <div className="w-full flex justify-end mb-5 pr-5">
                <SheetDemo data={dialogData} />
            </div>
            <div className="w-full flex flex-1 flex-col gap-4 p-4 pt-0">
                <Suspense fallback={<Loading />}>
                    <HotelList token={token}/>
                </Suspense>

                {/*<div className="bg-[#f5f5f5]/80 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />*/}
            </div>

        </>
    );
}