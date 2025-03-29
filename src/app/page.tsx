'use client';

import {useToast} from "@/hooks/useToast";
import {useActionState, useEffect, useState} from "react";
import {loginAction} from "@/lib/actions/user/login-actions";
import LoginCommonTemplate from "@/components/auth/LoginCommonTemplage";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import LoginFormSubmit from "@/components/auth/LoginFormSubmit";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import KaKaoIcon from "@/components/icons/KaKaoIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Image from "next/image";
import naverLogo from "@/assets/icon/naver-logo.webp";
import AppleIcon from "@/components/icons/AppleIcon";
import {useRouter} from "next/navigation";
import {useUserInfo} from "@/hooks/useUserInfo";


export default function LoginHome() {
    const { addToast } = useToast();
    const router = useRouter();

    const [state, formAction] = useActionState<any, FormData>(loginAction, { message: null, type: null, userInfo: null });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserInfo } = useUserInfo();


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const kakaoLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
    };

    const googleLogin = () => {
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

    };

    const naverLogin = () => {
        window.location.href =`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}`
    }

    const appleLogin = () => {
        addToast({message : "홈페이지 배포 후 추가 예정인 기능입니다.", type : "error"});
    }


    useEffect(() => {
        if (state.message !== null) {
            if (state.type === "success") {
                // ✅ Zustand에 사용자 정보 저장
                setUserInfo(state.userInfo);

                setTimeout(() => {
                    router.push('/');
                }, 500);
            }

            addToast({message : state.message, type : state.type});
        }

    }, [state]);



    return (
        <>
            <main>
                <LoginCommonTemplate />
                      <section className="section-center-layout flex flex-col">
                            {/*<form action={formAction}>*/}
                            <form action={formAction}>
                                <fieldset className="border-0 p-0">
                                    <legend className="sr-only">'로그인 정보 입력'</legend>
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
                                            autoComplete="new-password"
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
                                        <Link href="/user" className="flex-1 flex justify-center items-center">
                                            <span className="text-[#5c667b] cursor-pointer">회원가입</span>
                                        </Link>
                                        <div className="w-[1px] h-5 bg-[#5c667b] mx-2"></div>
                                        <Link href="/" className="flex-1 flex justify-center items-center">
                                            <span className="text-[#5c667b] cursor-pointer">회원찾기</span>
                                        </Link>
                                        <div className="w-[1px] h-5 bg-[#5c667b] mx-2"></div>
                                        <Link href="/hotel" className="flex-1 flex justify-center items-center">
                                            <span className="text-[#5c667b] cursor-pointer">호텔 로그인</span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="w-full flex items-center gap-6 mb-6">
                                    <div className="h-px flex-3 bg-[#eaedf4]"></div>
                                    <div className="">
                                        <p className="text-[#5c667b] flex-3">소셜 계정으로 간편 로그인</p>
                                    </div>
                                    <div className="h-px flex-3 bg-[#eaedf4]"></div>
                                </div>

                                <div className="w-full flex justify-center gap-5 mb-6">
                                    <Button onClick={kakaoLogin} className="bg-kakao sns_btn_layout" asChild>
                                        {/*<Link href="/kakao">*/}
                                            <KaKaoIcon className="size-5" />
                                        {/*</Link>*/}
                                    </Button>
                                    <Button onClick={googleLogin} className="bg-google sns_btn_layout" asChild>
                                        {/*<Link href="/google">*/}
                                            <GoogleIcon className="size-5" />
                                        {/*</Link>*/}
                                    </Button>
                                    <div onClick={naverLogin} className="sns_btn_layout bg-primary relative">
                                        <Image fill src={naverLogo} sizes="100%" alt="네이버로그인로고" priority />
                                    </div>
                                    <Button onClick={appleLogin} className="bg-apple sns_btn_layout" asChild>
                                        {/*<Link href="/apple">*/}
                                            <AppleIcon className="size-5 fill-white" />
                                        {/*</Link>*/}
                                    </Button>
                                </div>

                           </form>
                      </section>
            </main>
        </>
    );
}
