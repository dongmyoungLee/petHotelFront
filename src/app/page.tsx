'use client';

import mainLogo from '@/assets/main-logo.webp';
import Image from "next/image";
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import Link from "next/link";
import KaKaoIcon from "@/components/icons/KaKaoIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import naverLogo from "@/assets/icon/naver-logo.webp";
import {LoginResponse} from "@/types/auth/authType";

import {emailCheck, passCheck} from "@/lib/utils/Reg";
import {useToast} from "@/hooks/useToast";
import {login} from "@/api/auth/auth";
import {useActionState, useEffect, useState} from "react";
import {loginFormAction} from "@/lib/actions/login-form-actions";
import LoginFormSubmit from "@/components/auth/LoginFormSubmit";


export default function Home() {
    const { addToast } = useToast();

    const [state, formAction, pending] = useActionState(loginFormAction, { message: null, type: null });



    useEffect(() => {
        if (state.message !== null) {
            addToast({message : state.message, type : state.type});
        }

    }, [state]);


    return (
        <>
        <main className='flex flex-col  items-center w-full h-screen pt-[3vh]'>
              <section className="section-center-layout mb-4">
                  <Image className="w-full transform scale-90" src={mainLogo} alt="애견호텔 로고" priority />
              </section>

              <section className="mb-6">
                  <h1 className="text-4xl md:text-5xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 drop-shadow-lg">
                      PETHOTEL
                  </h1>
              </section>

              <section className="section-center-layout flex flex-col">
              <form action={formAction}>
                  <div className="w-full grid items-center gap-1.5 mb-4">
                      <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">이메일</Label>
                      <Input className="input-primary px-3 py-6" name="email"  id="email" placeholder="이메일을 입력해주세요." />
                  </div>

                  <div className="w-full grid items-center gap-1.5 mb-6">
                      <Label className="text-gray-600 text-xs font-semibold" htmlFor="password">비밀번호</Label>
                      <Input className="input-primary px-3 py-6" type="password" name="password" id="password" placeholder="이메일을 입력해주세요." />
                  </div>

                  <div className="w-full flex flex-col mb-6">
                      <LoginFormSubmit />
                  </div>

                  <div className="w-full flex items-center gap-6 mb-6">
                      <div className="h-px flex-3 bg-[#eaedf4]"></div>
                      <div className="">
                          <p className="text-[#5c667b] flex-3">소셜 계정으로 간편 로그인</p>
                      </div>
                      <div className="h-px flex-3 bg-[#eaedf4]"></div>
                  </div>

                  <div className="w-full flex justify-center gap-5">
                      <Button className="bg-kakao sns_btn_layout" asChild>
                          <Link href="/kakao">
                              <KaKaoIcon className="size-5" />
                          </Link>
                      </Button>
                      <Button className="bg-google sns_btn_layout" asChild>
                          <Link href="/google">
                              <GoogleIcon className="size-5" />
                          </Link>
                      </Button>
                      <div className="sns_btn_layout bg-primary relative">
                          <Image fill src={naverLogo} sizes="100%" alt="네이버로그인로고" priority />
                      </div>
                      <Button className="bg-apple sns_btn_layout" asChild>
                          <Link href="/apple">
                              <AppleIcon className="size-5 fill-white" />
                          </Link>
                      </Button>
                  </div>
              </form>
          </section>
        </main>
        </>
    );
}
