import axiosInstance from "./axiosInstance";
import { Log } from "../types";

export const fetchLogs = async (tripId: number): Promise<Log[]> => {
    const response = await axiosInstance.get(`/api/logs/${tripId}/`);
    return response.data;
};
