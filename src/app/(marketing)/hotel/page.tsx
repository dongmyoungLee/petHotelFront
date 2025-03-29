'use client';

import LoginCommonTemplate from "@/components/auth/LoginCommonTemplage";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import LoginFormSubmit from "@/components/auth/LoginFormSubmit";
import Link from "next/link";
import {useActionState, useEffect, useState} from "react";
import {useToast} from "@/hooks/useToast";
import {useRouter} from "next/navigation";
import {hotelLoginAction} from "@/lib/actions/hotel/hotel-login-action";
import {useAdminInfo, useUserInfo} from "@/hooks/useUserInfo";

export default function HotelLoginHome() {
    const { addToast } = useToast();
    const { setAdminInfo } = useAdminInfo();
    const router = useRouter();

    const [state, formAction, pending] = useActionState<any, FormData>(hotelLoginAction, { message: null, type: null, adminInfo: null });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (state.message !== null) {
            if (state.type === "success") {
                setAdminInfo(state.adminInfo);
                setTimeout(() => {
                    router.push('/');
                }, 500);
            }

            addToast({message : state.message, type : state.type});
        }

    }, [state]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        <>
            <LoginCommonTemplate isHotel={true} />

            <section className="section-center-layout flex flex-col">
                <form action={formAction}>
                    <fieldset className="border-0 p-0">
                        <legend className="sr-only">'호텔 로그인 정보 입력'</legend>
                        <div className="w-full grid items-center gap-1.5 mb-4">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">이메일</Label>
                            <Input
                                className="input-primary px-3 py-6"
                                name="email"
                                id="email"
                                placeholder="이메일을 입력해주세요."
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className="w-full grid items-center gap-1.5 mb-6">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="password">비밀번호</Label>
                            <Input
                                className="input-primary px-3 py-6"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="비밀번호를 입력해주세요."
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </fieldset>

                    <div className="w-full flex flex-col mb-6">
                        <LoginFormSubmit />
                    </div>
                    <div className="w-full mb-6">
                        <div className="w-full flex justify-center">
                            <Link href="/hotel/signup" className="flex-1 flex justify-center items-center">
                                <span className="text-[#5c667b] italic cursor-pointer">호텔 입점을 원하시나요 ?</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );

}