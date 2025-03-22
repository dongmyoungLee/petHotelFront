import {LoginRequest, LoginResponse, TokenRequest, TokenResponse} from "@/types/auth/authType";
import {apiClient} from "@/app/api/apiClientAxios";
import {AxiosResponse} from "axios";

// 로그인 요청
export async function login({ userEmail, userPwd }: LoginRequest): Promise<LoginResponse> {
    try {
        const response = await apiClient.post<LoginResponse>('/api/v1/auth',  { userEmail, userPwd }, {
            withCredentials : true
        });
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;  // 에러 처리
    }
}

// 토큰 유효성 검사
export async function validToken(token: TokenRequest): Promise<TokenResponse> {
    try {
        const response: AxiosResponse<any> = await apiClient.post<TokenResponse>('/api/v1/auth/validToken', { token });
        return response.data;
    } catch (error) {
        console.error("Valid token error:", error);
        throw error;
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

// 테스트 메서드
export async function testMethod(token?: string): Promise<any> {
    try {
        const response = await apiClient.get<any>('/api/v1/auth/test', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Test method error:", error);
        throw error;
    }
}
