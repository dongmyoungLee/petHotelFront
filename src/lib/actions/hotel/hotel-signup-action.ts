'use server';

import {emailCheck} from "@/lib/utils/reg";
import {HotelSignupRequest} from "@/types/auth/hotel/authType";
import {hotelSignup} from "@/app/api/auth/hotel/auth";
import {AxiosResponse} from "axios";

export async function hotelSignupAction(prevState, formData: FormData) {
    const companyEmail: string = formData.get('email');
    const companyPwd: string = formData.get('password');
    const passwordCheck: string = formData.get('passwordCheck');
    const companyName: string = formData.get('name');
    const companyPhone: string = formData.get('phone');

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

    const response: AxiosResponse = await hotelSignup(hotelSignupRequest);

    if (response.status !== 201) {
        return { type: 'error', message: response.response.data };
    }

    return { type: 'success', message: '회원가입 완료' };
}