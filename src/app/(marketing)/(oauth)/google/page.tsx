'use client';

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {google} from "@/app/api/auth/user/auth";
import {useUserInfo} from "@/hooks/useUserInfo";
import {UserInfo} from "@/types/auth/user/authType";

export default function Google() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const code = searchParams.get('code');
    const { setUserInfo } = useUserInfo();

    useEffect(() => {
        google(code)
            .then((res: UserInfo) => {
                setUserInfo({
                    role: res.role,
                    id: res.id,
                    email: res.email,
                    userName: res.userName,
                });
                router.push('/test');
            }).catch((err) => {
            window.alert("인증 정보가 올바르지 않거나 잘못된 접근입니다.");
        })
    }, []);

    return (
        <h2>로그인 중 입니다..</h2>
    );
}