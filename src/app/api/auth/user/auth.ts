import {
    LoginRequest,
    LoginResponse,
    TokenRequest,
    TokenResponse, UserAuthority, UserInfoTokenType,
    UserSignupRequest,
    UserSignupResponse
} from "@/types/auth/user/authType";
import {apiClient} from "@/app/api/apiClientAxios";
import {AxiosResponse} from "axios";
import {HotelSignupResponse} from "@/types/auth/hotel/authType";
import {fetchData} from "@/app/api/apiClient";


// export async function userLogin(request : LoginRequest): Promise<UserInfoTokenType> {
//     const response: AxiosResponse =  await apiClient.post<AxiosResponse>('/api/v1/auth',  request, {
//         withCredentials : true
//     });
//
//     return response.data;
// }
//
//
// export async function refresh(token: String): Promise<TokenResponse> {
//     const response: AxiosResponse = await apiClient.post<TokenResponse>('/api/v1/auth/refresh', { token });
//     return response.data;
// }
//
// export async function parseToken(token: String): Promise<UserAuthority> {
//     const response: AxiosResponse = await apiClient.post<AxiosResponse>('/api/v1/auth/validToken', { token });
//     return response.data;
// }
//
//
// export async function logout(token: TokenRequest): Promise<any> {
//     const response: AxiosResponse =  await apiClient.post<AxiosResponse>('/api/v1/auth/logout', {}, {
//         withCredentials: true
//     });
//     return response.data;
// }
//
//
// export async function signup(request : UserSignupRequest): Promise<UserSignupResponse> {
//     const response:AxiosResponse =  await apiClient.post<AxiosResponse>('/api/v1/users',  request);
//     return response.data;
// }
//
// export async function kakao(code: string|null): Promise<UserInfoTokenType> {
//     const response: AxiosResponse = await apiClient.get<AxiosResponse>(`/api/v1/auth/kakao?code=${code}`);
//     return response.data;
// }
//
// export async function google(code: string|null): Promise<UserInfoTokenType> {
//     const response: AxiosResponse = await apiClient.get<AxiosResponse>(`/api/v1/auth/google?code=${code}`);
//     return response.data;
// }
//
// export async function naver(code: string|null): Promise<UserInfoTokenType> {
//     const response: AxiosResponse = await apiClient.get<AxiosResponse>(`/api/v1/auth/naver?code=${code}`);
//     return response.data;
//
// }
// 로그인 요청
export async function userLogin(request: LoginRequest): Promise<UserInfoTokenType> {
    return await fetchData<UserInfoTokenType>('/api/v1/auth', {
        method: 'POST',
        body: JSON.stringify(request)
    });
}

// 토큰 갱신
export async function refresh(token: string): Promise<TokenResponse> {
    return  await fetchData<TokenResponse>('/api/v1/auth/refresh', {
        method: 'POST',
        body: JSON.stringify({ token })
    });
}

// 토큰 파싱
export async function parseToken(token: string): Promise<UserAuthority> {
    return  await fetchData<UserAuthority>('/api/v1/auth/validToken', {
        method: 'POST',
        body: JSON.stringify({ token })
    });
}

// 로그아웃
export async function logout(token: TokenRequest): Promise<any> {
    return  await fetchData<any>('/api/v1/auth/logout', {
        method: 'POST',
        body: JSON.stringify({})
    });
}

// 회원가입
export async function signup(request: UserSignupRequest): Promise<UserSignupResponse> {
    return await fetchData<UserSignupResponse>('/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(request)
    });
}

export async function kakao(code: string | null): Promise<UserInfoTokenType> {
    return await fetchData<UserInfoTokenType>(`/api/v1/auth/kakao?code=${code}`, {
        method: 'GET'
    });
}

export async function google(code: string | null): Promise<UserInfoTokenType> {
    return  await fetchData<UserInfoTokenType>(`/api/v1/auth/google?code=${code}`, {
        method: 'GET'
    });
}

export async function naver(code: string | null): Promise<UserInfoTokenType> {
    return  await fetchData<UserInfoTokenType>(`/api/v1/auth/naver?code=${code}`, {
        method: 'GET'
    });

}

export async function getRequest(code: string | null): Promise<UserInfoTokenType> {
    return  await fetchData<UserInfoTokenType>(`/api/v1/auth/naver?code=${code}`, {
        method: 'GET'
    });
}

