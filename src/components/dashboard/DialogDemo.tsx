'use client';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState} from "react";

export function DialogDemo(props) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // 기본 제출 방지
        console.log('폼 제출됨:', formData);
        // setOpen(false);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">{props.data.title}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{props.data.title}</DialogTitle>
                    <DialogDescription>{props.data.description}</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        {props.data.contents.map((item, idx) => (
                            <div key={`idx-${item}`} className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor={item} className="text-right">
                                    {item}
                                </Label>
                                <Input id={item} onChange={handleChange} className="input-primary col-span-3" />
                            </div>
                        ))}
                    </div>
                    <DialogFooter>
                        <Button className="text-gray-100" type="submit">저장</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}