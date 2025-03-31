'use server';

import {HotelRequest} from "@/types/auth/hotel/authType";
import {revalidatePath} from "next/cache";
import {createHotel} from "@/app/api/auth/hotel/auth";

export async function HotelAddAction(request: HotelRequest, token: string|undefined) {
    try {
        const response = await createHotel(request, token);
        revalidatePath("/dashboard/hotel");
        return response;
    } catch (error) {
        throw error;
    }
}