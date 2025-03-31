import {getHotelByCompany} from "@/app/api/auth/hotel/auth";
import {Hotel} from "@/types/auth/hotel/authType";
import HotelCard from "@/components/dashboard/ui/HotelCard";

async function HotelList({ token }: { token: string | undefined }) {
    let data: Hotel[];

    try {
        data = await getHotelByCompany(token);
    } catch (error) {
        data = [];
        console.log(error)
    }


    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            {data.map((item: Hotel, idx: number) => (
                <div key={`${idx}-h-new`}>
                    <HotelCard hotel={item} />
                </div>
            ))}
        </div>
    );
}

export default HotelList;