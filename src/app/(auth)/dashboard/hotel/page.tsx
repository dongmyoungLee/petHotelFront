import {DialogDemo} from "@/components/dashboard/DialogDemo";
import HotelCard from "@/components/dashboard/HotelCard";

export default function HotelPage() {
    const dialogData = {
        title : '호텔 추가',
        description: '입점 하실 호텔의 정보를 입력 해주세요.',
        contents : ['업체명', '주소', '연락처', '웹사이트','대표자'],
    }
    return (
        <>
            <div className="w-full flex justify-end mb-5 pr-5">
                <DialogDemo data={dialogData} />
            </div>
            <div className="w-full flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    {/*<div className="bg-[#f5f5f5]/80 aspect-video rounded-xl">*/}
                    {/*    <HotelCard />*/}
                    {/*</div>*/}
                    <HotelCard />
                    <HotelCard />
                </div>

                {/*<div className="bg-[#f5f5f5]/80 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />*/}
            </div>
        </>
    );
}