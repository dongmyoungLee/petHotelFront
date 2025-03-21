export interface LoginRequest {
    userEmail : string,
    userPwd: string
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    role: string;
    id: string;
    name: string;
    email: string;
}

export interface TokenRequest {
    token: string;
}

export interface TokenResponse {
    accessToken: string|null;
    message: string;
    statusCode: string;
}