'use server';

import {UserSignupRequest, UserSignupResponse} from '@/types/auth/user/authType';
import {signup} from '@/app/api/auth/user/auth';
import {emailCheck} from "@/lib/utils/reg";
import {AxiosError, AxiosResponse} from "axios";

export async function signupAction(prevState: any, formData: FormData) {
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

    await new Promise(resolve => setTimeout(resolve, 1000));

    const userSignupRequest: UserSignupRequest = {
        userEmail,
        userPwd,
        userName,
        userPhone,
        userAddr,
        role: "CUSTOMER",
        status: "PENDING",
    };

    let signUpResponse: UserSignupResponse;

    try {
        signUpResponse = await signup(userSignupRequest);
        return { type: 'success', message: '회원가입 완료' };
    } catch (error) {
        if (error instanceof AxiosError) {
            return { type: 'error', message: error.response?.data || '회원가입 중 오류가 발생했습니다.' };
        } else {
            return { type: 'error', message: '회원가입 중 예상치 못한 오류가 발생했습니다.' };
        }
    }
}


