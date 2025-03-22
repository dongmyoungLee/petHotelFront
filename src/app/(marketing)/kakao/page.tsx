'use client';

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {kakao} from "@/app/api/auth/auth";

export default function KaKao() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const code = searchParams.get('code');

    useEffect(() => {
        kakao(code)
        .then((res) => {
            router.push('/test');
        }).catch((err) => {
            console.log(err);
        })
    }, [code]);

    return (
        <h2>로그인 중 입니다..</h2>
    );
}