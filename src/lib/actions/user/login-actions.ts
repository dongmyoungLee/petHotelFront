'use server';

import { cookies } from 'next/headers';
import { LoginResponse } from '@/types/auth/user/authType';
import { userLogin } from '@/app/api/auth/user/auth';
import {AxiosResponse} from "axios";

export async function loginAction(prevState, formData: FormData) {
    const userEmail = formData.get('email') as string;
    const userPwd = formData.get('password') as string;

    if (!userEmail || !userPwd) {
        return { type: 'error', message: '이메일과 비밀번호를 입력해주세요.' };
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const response: AxiosResponse = await userLogin({ userEmail : userEmail, userPwd: userPwd });
    const loginResponse = response.data;

    if (response.status !== 200) {
        return {type: 'error', message: '로그인 정보가 올바르지 않습니다.'};
    }

    const cookieStore = await cookies();
    const accessTokenExpires = new Date();
    const refreshTokenExpires = new Date();

    const expires = new Date();
    accessTokenExpires.setMinutes(expires.getMinutes() + 30);
    refreshTokenExpires.setDate(expires.getDate() + 7);

    cookieStore.set('access_token', loginResponse.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        expires: accessTokenExpires,
    });

    cookieStore.set('refresh_token', loginResponse.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        expires: refreshTokenExpires,
    });

    if (cookieStore.get("access_token")?.value === undefined || cookieStore.get("refresh_token")?.value === undefined) {
        return { type: 'error', message: '로그인 중 에러가 발생하였습니다.' };
    }

    return { type: 'success', message: '로그인 완료' };


}