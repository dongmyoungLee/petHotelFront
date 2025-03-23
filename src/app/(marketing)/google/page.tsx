'use client';

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {google} from "@/app/api/auth/auth";
//https://accounts.google.com/o/oauth2/v2/auth?client_id=67100741257-uqtf0bsgj7m65mj4pngnjvm43r57donn.apps.googleusercontent.com&redirect_uri=http://localhost:3000/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email
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