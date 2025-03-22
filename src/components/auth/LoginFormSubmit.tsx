'use client';

import {FormStatusNotPending, FormStatusPending, useFormStatus} from "react-dom";
import {Button} from "@/components/ui/button";

export default function LoginFormSubmit() {
    const { pending } : FormStatusPending | FormStatusNotPending = useFormStatus();
    return  <Button disabled={pending} type="submit" className="w-full py-6 cursor-pointer text-gray-100">로그인</Button>
}