'use client';

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {useState} from "react";
import {Dialog} from "@/types/auth/common/authType";
import {UserInfo} from "@/types/auth/user/authType";
import {useStore} from "@/hooks/useStore";
import {useAdminInfo} from "@/hooks/useUserInfo";
import {Hotel, HotelRequest} from "@/types/auth/hotel/authType";
import {HotelAddAction} from "@/lib/actions/hotel/hotel-add-action";
import {AlertDialogDemo} from "@/components/common/AlertDialogDemo";

export function SheetForm({ data }: { data: Dialog }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [confirmOpen, setConfirmOpen] = useState(false);

    const adminInfo:UserInfo|undefined = useStore(useAdminInfo, (state) => {
        return state.adminInfo;
    });



    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const request: HotelRequest = {
            companyId: adminInfo?.id ?? '',
            hotelName: formData.hotelName,
            hotelAddress: formData.hotelAddress,
            hotelPhone: formData.hotelPhone,
            hotelWebsite: formData.hotelWebsite,
            hotelOwnerName: formData.hotelOwnerName,
            hotelProfileImg: formData.hotelProfileImg,
            rooms: [],
            services: [],
        }

        try {
            const res: Hotel = await HotelAddAction(request, data.token);
            setOpen(false);
        } catch (err) {
            console.log(err);
        }



    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline">{data.title}</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{data.title}</SheetTitle>
                    <SheetDescription>
                        {data.description}
                    </SheetDescription>
                </SheetHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 p-4">
                        {data.contents.map((item: string, idx: number) => (
                            <div key={`${idx}-menu-item`} className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor={item} className="text-right">
                                    {data.korContent[idx]}
                                </Label>
                                <Input id={item} onChange={handleChange} className="input-primary col-span-3" />
                            </div>
                        ))}
                    </div>
                    <SheetFooter>
                        <Button className="text-gray-100 cursor-pointer" type="button" onClick={() => setConfirmOpen(true)}>저장</Button>

                        {/* modal area ..*/}
                        <div className="hidden">
                            <AlertDialogDemo
                                open={confirmOpen}
                                onOpenChange={setConfirmOpen}
                                onConfirm={handleSubmit}
                                alertMsg="정말 추가 하시겠습니까 ?"
                                alertContentMsg="입력하신 호텔이 추가 됩니다."
                            />
                        </div>
                    </SheetFooter>
                </form>
            </SheetContent>

        </Sheet>
    )
}
