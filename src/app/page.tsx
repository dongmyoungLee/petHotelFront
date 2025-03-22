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
import {useToast} from "@/hooks/useToast";
import {useActionState, useEffect} from "react";
import {loginFormAction} from "@/lib/actions/login-form-actions";
import LoginFormSubmit from "@/components/auth/LoginFormSubmit";
import LoginCommonTemplate from "@/components/auth/LoginCommonTemplage";
import LoginForm from "@/components/auth/LoginForm";


export default function LoginHome() {
    const { addToast } = useToast();

    const [state, formAction, pending] = useActionState(loginFormAction, { message: null, type: null });



    useEffect(() => {
        if (state.message !== null) {
            addToast({message : state.message, type : state.type});
        }

    }, [state]);


    return (
        <>
            <main>
                <LoginCommonTemplate />
                      <section className="section-center-layout flex flex-col">
                            <form action={formAction}>
                                <LoginForm isHotel={false} />
                           </form>
                      </section>
            </main>
        </>
    );
}
