import {apiClient} from "@/app/api/apiClientAxios";
import {Hotel, HotelSignupRequest, HotelSignupResponse} from "@/types/auth/hotel/authType";
import {AxiosResponse} from "axios";
import {LoginRequest, UserInfoTokenType} from "@/types/auth/user/authType";

export async function hotelLogin(request : LoginRequest): Promise<UserInfoTokenType> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response: AxiosResponse = await apiClient.post<AxiosResponse>('/api/v1/companys/login',  request, {
        withCredentials : true
    });
    return response.data;
}

export async function hotelSignup(request : HotelSignupRequest): Promise<HotelSignupResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response: AxiosResponse = await apiClient.post<AxiosResponse>('/api/v1/companys',  request);
    return response.data;
}

export async function getHotelByCompany(token: string|undefined): Promise<Hotel[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response: AxiosResponse = await apiClient.get<AxiosResponse>(`/api/v1/hotels/${token}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    return response.data;
}

