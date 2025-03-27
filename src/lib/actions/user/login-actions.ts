'use server';

import {cookies} from 'next/headers';
import {userLogin} from '@/app/api/auth/user/auth';
import {AxiosResponse} from "axios";
import {useUserInfo} from "@/hooks/useUserInfo";

export async function loginAction(prevState, formData: FormData) {
    const userEmail = formData.get('email') as string;
    const userPwd = formData.get('password') as string;
    const { setUserInfo } = useUserInfo.getState();

    if (!userEmail || !userPwd) {
        return { type: 'error', message: '이메일과 비밀번호를 입력해주세요.' };
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const response: AxiosResponse = await userLogin({ userEmail : userEmail, userPwd: userPwd });
    const loginResponse = response.data;

    console.log(loginResponse)


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

    //사용자 정보를 zustand에 저장

    setUserInfo({
        role: loginResponse.role,
        id: loginResponse.id,
        profileUrl: loginResponse.profileUrl,
        userName: loginResponse.name,
    });


    // return { type: 'success', message: '로그인 완료' };
    // 🚀 클라이언트에서 Zustand에 저장할 수 있도록 사용자 정보 반환
    return {
        type: 'success',
        message: '로그인 완료',
        userInfo: {
            role: loginResponse.role,
            id: loginResponse.id,
            email: loginResponse.email,
            userName: loginResponse.name,
        },
    };

}