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

export interface UserSignupRequest {
    userEmail: string;
    userPwd: string;
    userName: string;
    userPhone: string;
    userAddr: string;
    role: "CUSTOMER" | "ADMIN";
    status: "PENDING" | "ACTIVE" | "INACTIVE";
}

export interface UserSignupResponse {
    userId: string;
    userEmail: string;
    userName: string;
    userPhone: string;
    userAddr: string;
    userStatus: "PENDING" | "ACTIVE" | "INACTIVE";
    userRegistrationDate: number;
}