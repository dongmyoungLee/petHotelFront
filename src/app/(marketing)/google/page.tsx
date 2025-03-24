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
            console.log(err);
        })
    }, []);

    return (
        <h2>로그인 중 입니다..</h2>
    );
}