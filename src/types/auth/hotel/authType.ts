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
    companyStatus: "PENDING" | "ACTIVE" | "INACTIVE";
    companyRegistrationDate: number;
}

interface Room {
    roomId: string;
    roomType: string;
    roomPrice: number;
    roomStatus: "AVAILABLE" | "OCCUPIED" | "MAINTENANCE";
    roomDescription: string;
    dayCare: "Yes" | "No";
    roomRegistrationDate: number;
}

interface Service {
    serviceId: string;
    serviceName: string;
    serviceDescription: string;
    servicePrice: number;
    serviceMemo: string;
}

export interface Hotel {
    hotelId: string;
    companyId: string | null;
    hotelName: string;
    hotelAddress: string;
    hotelPhone: string;
    hotelWebsite: string;
    hotelOwnerName: string;
    hotelProfileImg: string;
    rooms: Room[];
    services: Service[];
}