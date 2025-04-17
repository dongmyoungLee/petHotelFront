"use client";

import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useEffect, useState} from "react";
import {ApiCommonResponse, Hotel, HotelUpdateRequest} from "@/types/auth/hotel/authType";
import {DialogType} from "@/types/auth/common/authType";
import {AlertDialogDemo} from "@/components/common/AlertDialogDemo";
import {HotelUpdateAction} from "@/lib/actions/hotel/hotel-update-action";
import {useToast} from "@/hooks/useToast";

export function HotelEditDialog({ data, hotel }: { data: DialogType, hotel: Hotel }) {
    const [open, setOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    const [popupAlertText, setPopupAlertText] = useState<string>('');
    const [popupText, setPopupText] = useState<string>('');
    const [popupType, setPopupType] = useState<number>(0);
    const { addToast } = useToast();

    useEffect(() => {
        const initialFormData = data.contents.reduce((acc:any, item: string) => {
            acc[item] = (hotel as Record<string, any>)[item] ?? '';
            return acc;
        }, {} as { [key: string]: string });
        setFormData(initialFormData);
    }, [])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const request: HotelUpdateRequest = {
            hotelId: hotel.hotelId,
            companyId: hotel.companyId,
            hotelName: formData.hotelName,
            hotelAddress: formData.hotelAddress,
            hotelPhone: formData.hotelPhone,
            hotelWebsite: formData.hotelWebsite,
            hotelOwnerName: formData.hotelOwnerName,
            hotelProfileImg: formData.hotelProfileImg
        }

        const res: ApiCommonResponse = await HotelUpdateAction(request, data.token);

        if (res.statusCode === 'OK') {
            setOpen(false);
            addToast({message : "호텔이 수정 되었습니다.", type : "success"});
        }
        console.log(res);
    }

    function confirmPopupSendData(type: number) {
        setConfirmOpen(true);

        if (type === 0) {
            setPopupType(0);
            setPopupText('정말 삭제 하시겠습니까 ?');
            setPopupAlertText('호텔 관련 모든 데이터가 삭제 됩니다.');
        } else {
            setPopupType(1);
            setPopupText('수정 하시겠습니까 ?');
            setPopupAlertText('호텔 정보가 수정 됩니다.');
        }
    }

    function testes() {
        debugger
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">{data.title}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{data.title}</DialogTitle>
                    <DialogDescription>
                        {data.description}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 p-4 pb-0">
                        {data.contents.map((item: string, idx: number) => (
                            <div key={`${idx}-menu-item`} className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor={item} className="text-right">
                                    {data.korContent[idx]}
                                </Label>
                                <Input id={item} value={formData[item]} onChange={handleChange} className="input-primary col-span-3" />
                            </div>
                        ))}
                    </div>
                </form>
                <DialogFooter className="p-4 pt-0 pb-0">
                    <Button className="cursor-pointer" onClick={() => confirmPopupSendData(0)} type="submit">삭제</Button>
                    <Button className="cursor-pointer" onClick={() => confirmPopupSendData(1)} type="submit">저장</Button>

                    {/* modal area ..*/}
                    <div className="hidden">
                        <AlertDialogDemo
                            open={confirmOpen}
                            onOpenChange={setConfirmOpen}
                            onConfirm={handleSubmit}
                            alertMsg={popupAlertText}
                            alertContentMsg={popupText}
                        />
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}
