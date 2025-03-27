import {
    LoginRequest,
    LoginResponse,
    TokenRequest,
    TokenResponse,
    UserSignupRequest,
    UserSignupResponse
} from "@/types/auth/user/authType";
import {apiClient} from "@/app/api/apiClientAxios";
import {AxiosResponse} from "axios";
import {HotelSignupResponse} from "@/types/auth/hotel/authType";

// 로그인 요청
export async function userLogin(request : LoginRequest): Promise<AxiosResponse> {
    try {
        return await apiClient.post<AxiosResponse>('/api/v1/auth',  request, {
            withCredentials : true
        });
    } catch (error) {
        return error;
    }
}


// 토큰 갱신
export async function refresh(token: TokenRequest): Promise<TokenResponse> {
    try {
        const response: AxiosResponse<any> = await apiClient.post<TokenResponse>('/api/v1/auth/refresh', { token });
        return response.data;
    } catch (error) {
        console.error("Refresh token error:", error);
        throw error;
    }
}

// 토큰 파싱
export async function parseToken(token: TokenRequest): Promise<AxiosResponse> {
    try {
        const response: AxiosResponse = await apiClient.post<AxiosResponse>('/api/v1/auth/validToken', { token });
        return response.data;
    } catch (error) {
        return error;
    }
}

// 로그아웃
export async function logout(token: TokenRequest): Promise<AxiosResponse> {
    try {
        return await apiClient.post<AxiosResponse>('/api/v1/auth/logout', {}, {
            withCredentials: true
        });
    } catch (error) {
        console.error("logout error:", error);
    }
}

// 회원가입
export async function signup(request : UserSignupRequest): Promise<AxiosResponse> {
    try {
        return await apiClient.post<AxiosResponse>('/api/v1/users',  request);
    } catch (error) {
        return error;
    }

}

export async function kakao(code: string): Promise<AxiosResponse> {
    try {
        const response = await apiClient.get<AxiosResponse>(`/api/v1/auth/kakao?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Test method error:", error);
        throw error;
    }
}

export async function google(code: string): Promise<AxiosResponse> {
    try {
        const response = await apiClient.get<AxiosResponse>(`/api/v1/auth/google?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Test method error:", error);
        throw error;
    }
}

export async function naver(code: string): Promise<AxiosResponse> {
    try {
        const response = await apiClient.get<AxiosResponse>(`/api/v1/auth/naver?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Test method error:", error);
        throw error;
    }
}
