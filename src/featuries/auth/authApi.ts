import {instance} from "../../common/constans/instance";
import {AxiosResponse} from "axios";

export type ResponseType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
    token: string;
    tokenDeathTime: number;
};

export type RegistrationRequestType = {
    email: string
    password: string
}

export type LoginType = {
    email: string
    password: string
    rememberMe: string
}


export const authApi = {
    authMe: () => {
        return instance.post<{}, AxiosResponse<ResponseType>>(`auth/me`);
    },
    loggedIn: (data: LoginType) => {
        return instance.post(`auth/login`, data)
    },
    register: (data: RegistrationRequestType) => instance.post(`auth/register`, data),
};
