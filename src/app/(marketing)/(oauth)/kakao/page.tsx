'use client';

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {kakao} from "@/app/api/auth/user/auth";
import {UserInfo} from "@/types/auth/user/authType";
import {useStore} from "@/hooks/useStore";
import {useAdminInfo, useUserInfo} from "@/hooks/useUserInfo";
import {AxiosResponse} from "axios";

export default function KaKao() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const code = searchParams.get('code');
    const { setUserInfo } = useUserInfo();

    useEffect(() => {
        kakao(code)
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
                router.push('/');
            })
    }, [code]);

    return (
        <h2>로그인 중 입니다..</h2>
    );
}