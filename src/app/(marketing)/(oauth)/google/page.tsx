'use client';

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {google} from "@/app/api/auth/auth";

export default function Google() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const code = searchParams.get('code');

    useEffect(() => {
        google(code)
            .then((res) => {
                router.push('/test');
            }).catch((err) => {
            window.alert("인증 정보가 올바르지 않거나 잘못된 접근입니다.");
        })
    }, []);

    return (
        <h2>로그인 중 입니다..</h2>
    );
}