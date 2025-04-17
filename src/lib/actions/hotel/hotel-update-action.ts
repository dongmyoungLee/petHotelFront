'use server';

import {ApiCommonResponse, HotelUpdateRequest} from "@/types/auth/hotel/authType";
import {revalidatePath} from "next/cache";
import {updateHotel} from "@/app/api/auth/hotel/auth";

export async function HotelUpdateAction(request: HotelUpdateRequest, token: string|undefined): Promise<ApiCommonResponse> {
    try {
        const response: ApiCommonResponse = await updateHotel(request, token);
        revalidatePath("/dashboard/hotel");
        return response;
    } catch (error) {
        throw error;
    }
}