import HotelCard from "@/components/dashboard/HotelCard";
import {SheetDemo} from "@/components/dashboard/SheetDemo";
import {cookies} from "next/headers";
import {Dialog} from "@/types/auth/common/authType";
import {getHotelByCompany} from "@/app/api/auth/hotel/auth";
import {Hotel} from "@/types/auth/hotel/authType";

export default async function HotelPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    const dialogData: Dialog = {
        title : '호텔 추가',
        description: '입점 하실 호텔의 정보를 입력 해주세요.',
        contents : ['업체명', '주소', '연락처', '사이트','대표자'],
    }

    let data:Hotel[] = [];

    try {
        data = await getHotelByCompany(token);
    } catch (error) {
        data = [];
        console.log(error)
    }

    return (
        <>
            <div className="w-full flex justify-end mb-5 pr-5">
                <SheetDemo data={dialogData} />
            </div>
            <div className="w-full flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    {data.map((item: Hotel, idx: number) => (
                        <div key={`${idx}-h-new`}>
                            <HotelCard />
                        </div>
                    ))}
                </div>

                {/*<div className="bg-[#f5f5f5]/80 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />*/}
            </div>
        </>
    );
}