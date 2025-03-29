'use server';

import {emailCheck} from "@/lib/utils/reg";
import {HotelSignupRequest, HotelSignupResponse} from "@/types/auth/hotel/authType";
import {hotelSignup} from "@/app/api/auth/hotel/auth";
import {AxiosError, AxiosResponse} from "axios";

export async function hotelSignupAction(prevState: any, formData: FormData) {
    const companyEmail: string | null = formData.get('email')?.toString() || null;
    const companyPwd: string | null = formData.get('password')?.toString() || null;
    const passwordCheck: string | null = formData.get('passwordCheck')?.toString() || null;
    const companyName: string | null = formData.get('name')?.toString() || null;
    const companyPhone: string | null = formData.get('phone')?.toString() || null;

    if (!companyEmail || !companyPwd || !passwordCheck || !companyName || !companyPhone) {
        return { type: 'error', message: '모든 정보를 입력 하셔야 합니다.' };
    }

    if (!emailCheck(companyEmail)) {
        return { type: 'error', message: '이메일 형식으로 입력 해주세요.' };
    }

    if (companyPwd.length < 6) {
        return { type: 'error', message: '비밀번호는 6글자 이상 입력 해주세요.' };
    }

    if (companyPwd !== passwordCheck) {
        return { type: 'error', message: '비밀번호 확인을 다시 확인 해주세요.' };
    }

    const hotelSignupRequest: HotelSignupRequest = {
        companyEmail,
        companyPwd,
        companyName,
        companyPhone,
        role: "ADMIN",
        status: "ACTIVE",
    };

    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        const response: HotelSignupResponse = await hotelSignup(hotelSignupRequest);
        return { type: 'success', message: '회원가입 완료' };
    } catch (error) {
        if (error instanceof AxiosError) {
            return { type: 'error', message: error.response?.data || '회원가입 중 오류가 발생했습니다.' };
        } else {
            return { type: 'error', message: '회원가입 중 예상치 못한 오류가 발생했습니다.' };
        }
    }
}