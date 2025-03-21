'use server';

import { cookies } from 'next/headers';
import { LoginResponse } from '@/types/auth/authType';
import { login } from '@/api/auth/auth';

export async function loginFormAction(prevState, formData: FormData) {
    const userEmail = formData.get('email') as string;
    const userPwd = formData.get('password') as string;

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!userEmail || !userPwd) {
        return { type: 'error', message: '이메일과 비밀번호를 입력해주세요.' };
    }
    try {
        const loginResponse: LoginResponse = await login({ userEmail : "pajang1515@daum.net", userPwd: "password123" });

        const cookieStore = await cookies();
        const accessTokenExpires = new Date();
        const refreshTokenExpires = new Date();

        const expires = new Date();
        accessTokenExpires.setMinutes(expires.getMinutes() + 30);
        refreshTokenExpires.setDate(expires.getDate() + 7);

        cookieStore.set('access_token', loginResponse.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            expires: accessTokenExpires,
        });

        cookieStore.set('refresh_token', loginResponse.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            expires: refreshTokenExpires,
        });

        return { type: 'success', message: '로그인 완료' };
    } catch (error) {
        return { type: 'error', message: '로그인 정보가 맞지 않습니다.' };
    }
}