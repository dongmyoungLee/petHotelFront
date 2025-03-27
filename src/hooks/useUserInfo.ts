import { create } from 'zustand'
import {persist} from "zustand/middleware";
import {AdminInfoState, UserInfo, UserInfoState} from "@/types/auth/user/authType";

const defaultState: UserInfo = { role: '', id: '', email: '', userName: '' };
const defaultAdminState: UserInfo = { role: '', id: '', email: '', userName: '' };

const useUserInfo = create<UserInfoState>()(
    persist(
        (set) => ({
            userInfo: defaultState,
            setUserInfo: (userInfo) => set({ userInfo }),
            deleteUserInfo: () => set({ userInfo: defaultState }),
        }),
        { name: 'user-info-storage' } // localStorage에 저장
    )
);

const useAdminInfo = create<AdminInfoState>()(
    persist(
        (set) => ({
            adminInfo: defaultAdminState,
            setAdminInfo: (adminInfo) => set({ adminInfo }),
            deleteAdminInfo: () => set({ adminInfo: defaultAdminState }),
        }),
        { name: 'admin-info-storage' }
    )
);

export {useUserInfo, useAdminInfo};
