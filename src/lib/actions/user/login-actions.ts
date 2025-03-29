'use server';

import {cookies} from 'next/headers';
import {userLogin} from '@/app/api/auth/user/auth';
import {AxiosResponse} from "axios";
import {useUserInfo} from "@/hooks/useUserInfo";
import {UserInfoTokenType} from "@/types/auth/user/authType";

export async function loginAction(prevState: any, formData: FormData) {
    const userEmail: string | null = formData.get('email')?.toString() || null;
    const userPwd: string | null = formData.get('password')?.toString() || null;
    const { setUserInfo } = useUserInfo.getState();

    if (!userEmail || !userPwd) {
        return { type: 'error', message: '이메일과 비밀번호를 입력해주세요.' };
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    let loginResponse: UserInfoTokenType;

    try {
        loginResponse = await userLogin({ userEmail : userEmail, userPwd: userPwd });
    } catch (error) {
        return {type: 'error', message: '로그인 정보가 올바르지 않습니다.'};
    }

    const cookieStore = await cookies();
    const accessTokenExpires = new Date();
    const refreshTokenExpires = new Date();

    const expires = new Date();
    accessTokenExpires.setMinutes(expires.getMinutes() + 30);
    refreshTokenExpires.setDate(expires.getDate() + 7);

    const accessTokenCookieOptions: Partial<any> = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        expires: accessTokenExpires,
    };

    const refreshTokenCookieOptions: Partial<any> = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        expires: refreshTokenExpires,
    };

    cookieStore.set('access_token', loginResponse.accessToken, accessTokenCookieOptions);
    cookieStore.set('refresh_token', loginResponse.refreshToken, refreshTokenCookieOptions);


    if (cookieStore.get("access_token")?.value === undefined || cookieStore.get("refresh_token")?.value === undefined) {
        return { type: 'error', message: '로그인 중 에러가 발생하였습니다.' };
    }

    setUserInfo({
        role: loginResponse.role,
        id: loginResponse.id,
        email: loginResponse.email,
        userName: loginResponse.userName,
    });

    return {
        type: 'success',
        message: '로그인 완료',
        userInfo: {
            role: loginResponse.role,
            id: loginResponse.id,
            email: loginResponse.email,
            userName: loginResponse.userName,
        },
    };

}