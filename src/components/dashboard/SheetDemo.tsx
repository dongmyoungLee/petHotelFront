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

export function SheetDemo(props) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // 기본 제출 방지
        console.log('폼 제출됨:', formData);
        setOpen(false);
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
                <Button variant="outline">{props.data.title}</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{props.data.title}</SheetTitle>
                    <SheetDescription>
                        {props.data.description}
                    </SheetDescription>
                </SheetHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 p-4">
                        {props.data.contents.map((item, idx) => (
                            <div key={item + idx} className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor={item} className="text-right">
                                    {item}
                                </Label>
                                <Input id={item} onChange={handleChange} className="input-primary col-span-3" />
                            </div>
                        ))}
                    </div>
                    <SheetFooter>
                        {/*<SheetClose asChild>*/}
                            <Button className="text-gray-100 cursor-pointer" type="submit">저장</Button>
                        {/*</SheetClose>*/}
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    )
}
