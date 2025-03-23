import {
    LoginRequest,
    LoginResponse,
    TokenRequest,
    TokenResponse,
    UserSignupRequest,
    UserSignupResponse
} from "@/types/auth/authType";
import {apiClient} from "@/app/api/apiClientAxios";
import {AxiosResponse} from "axios";

// 로그인 요청
export async function login(request : LoginRequest): Promise<LoginResponse> {
    // try {
        const response = await apiClient.post<LoginResponse>('/api/v1/auth',  request, {
            withCredentials : true
        });
        return response.data;
    // } catch (error : any) {
    //     console.error("Login error:", error);
    //     throw error;  // 에러 처리
    // }
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

// 회원가입
export async function signup(request : UserSignupRequest): Promise<UserSignupResponse> {
    try {
        const response = await apiClient.post<UserSignupResponse>('/api/v1/users',  request);
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;  // 에러 처리
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

export async function kakao(code: string): Promise<any> {
    try {
        const response = await apiClient.get<any>(`/api/v1/auth/kakao?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Test method error:", error);
        throw error;
    }
}

export async function google(code: string): Promise<any> {
    try {
        const response = await apiClient.get<any>(`/api/v1/auth/google?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Test method error:", error);
        throw error;
    }
}
