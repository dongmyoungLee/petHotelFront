import {Hotel, HotelRequest, HotelSignupRequest, HotelSignupResponse} from "@/types/auth/hotel/authType";
import {LoginRequest, UserInfoTokenType} from "@/types/auth/user/authType";
import {fetchData} from "@/app/api/apiClient";


// export async function hotelLogin(request : LoginRequest): Promise<UserInfoTokenType> {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//
//     const response: AxiosResponse = await apiClient.post<AxiosResponse>('/api/v1/companys/login',  request, {
//         withCredentials : true
//     });
//     return response.data;
// }

export async function hotelLogin(request: LoginRequest): Promise<UserInfoTokenType> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return  await fetchData<UserInfoTokenType>('/api/v1/companys/login', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // withCredentials 설정
    });

}

// export async function hotelSignup(request : HotelSignupRequest): Promise<HotelSignupResponse> {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//
//     const response: AxiosResponse = await apiClient.post<AxiosResponse>('/api/v1/companys',  request);
//     return response.data;
// }

export async function hotelSignup(request: HotelSignupRequest): Promise<HotelSignupResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return  await fetchData<HotelSignupResponse>('/api/v1/companys', {
        method: 'POST',
        body: JSON.stringify(request),
    });
}

export async function getHotelByCompany(token: string | undefined): Promise<Hotel[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return fetchData<Hotel[]>(`/api/v1/hotels/${token}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: "force-cache"
    });
}

export async function createHotel(request: HotelRequest, token: string | undefined): Promise<Hotel> {
    return fetchData<Hotel>('/api/v1/hotels', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}