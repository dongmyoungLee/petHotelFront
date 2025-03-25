import {apiClient} from "@/app/api/apiClientAxios";
import {HotelSignupRequest, HotelSignupResponse} from "@/types/auth/hotel/authType";
import {AxiosResponse} from "axios";
import {LoginRequest, LoginResponse} from "@/types/auth/user/authType";

export async function hotelLogin(request : LoginRequest): Promise<AxiosResponse> {
    try {
        return await apiClient.post<AxiosResponse>('/api/v1/companys/login',  request, {
            withCredentials : true
        });
    } catch (error) {
        return error;
    }
}

export async function hotelSignup(request : HotelSignupRequest): Promise<AxiosResponse> {

    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        return  await apiClient.post<AxiosResponse>('/api/v1/companys',  request);
    } catch (error) {
        return error;
    }
}