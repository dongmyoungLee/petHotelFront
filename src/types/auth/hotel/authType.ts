export interface HotelSignupRequest {
    companyEmail: string;
    companyPwd: string;
    companyName: string;
    companyPhone: string;
    role: "CUSTOMER" | "ADMIN";
    status: "PENDING" | "ACTIVE" | "INACTIVE";
}
export interface HotelSignupResponse {
    companyId: string;
    companyEmail: string;
    companyName: string;
    companyPhone: string;
    userAddr: string;
    companyStatus: "PENDING" | "ACTIVE" | "INACTIVE";
    companyRegistrationDate: number;
}
