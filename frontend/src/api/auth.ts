import axiosInstance from "./axiosInstance";

export const login = async (username: string, password: string) => {
    const response = await axiosInstance.post("/api/auth/login/", { username, password });
    return response.data;
};

export const register = async (username: string, email: string, password: string) => {
    const response = await axiosInstance.post("/api/auth/register/", { username, email, password });
    return response.data;
};
