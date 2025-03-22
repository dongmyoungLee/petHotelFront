'use server';

import {LoginResponse, UserSignupRequest} from '@/types/auth/authType';
import {login, signup} from '@/app/api/auth/auth';
import {emailCheck} from "@/lib/utils/Reg";
import {redirect} from "next/navigation";

export async function signupAction(prevState, formData: FormData) {
    const userEmail = formData.get('email') as string;
    const userPwd = formData.get('password') as string;
    const userPwdCheck = formData.get('passwordCheck') as string;
    const userName = formData.get('name') as string;
    const userPhone = formData.get('phone') as string;
    const userAddr = formData.get('address') as string;

    if (!userEmail || !userPwd || !userPwdCheck || !userName || !userPhone || !userAddr) {
        return { type: 'error', message: '모든 정보를 입력 하셔야 합니다.' };
    }

    if (!emailCheck(userEmail)) {
        return { type: 'error', message: '이메일 형식으로 입력 해주세요.' };
    }

    if (userPwd.length < 6) {
        return { type: 'error', message: '비밀번호는 6글자 이상 입력 해주세요.' };
    }

    if (userPwd !== userPwdCheck) {
        return { type: 'error', message: '비밀번호 확인을 다시 확인 해주세요.' };
    }

    const userSignupRequest: UserSignupRequest = {
        userEmail,
        userPwd,
        userName,
        userPhone,
        userAddr,
        role: "CUSTOMER",
        status: "PENDING",
    };

    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        const signUpResponse: LoginResponse = await signup(userSignupRequest);


        return { type: 'success', message: '회원가입 완료' };
    } catch (error) {
        console.log(error);
        return { type: 'error', message: '에러' };
    }
}


