'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { kakao } from "@/app/api/auth/user/auth";
import { useUserInfo } from "@/hooks/useUserInfo";
import { UserInfoTokenType } from "@/types/auth/user/authType";

function KakaoAuth() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const code = searchParams.get('code');
    const { setUserInfo } = useUserInfo();

    useEffect(() => {
        if (!code) {
            window.alert("인증 코드가 없습니다.");
            router.push('/');
            return;
        }

        kakao(code)
            .then((res: UserInfoTokenType) => {
                setUserInfo({
                    role: res.role,
                    id: res.id,
                    email: res.email,
                    userName: res.userName,
                });

                router.push('/test');
            })
            .catch(() => {
                window.alert("인증 정보가 올바르지 않거나 잘못된 접근입니다.");
                router.push('/');
            });
    }, [code, router, setUserInfo]);

    return <h2>로그인 중 입니다..</h2>;
}

export default function KaKao() {
    return (
        <Suspense fallback={<h2>로딩 중...</h2>}>
            <KakaoAuth />
        </Suspense>
    );
}
