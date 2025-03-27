import axiosInstance from "./axiosInstance";
import { Trip } from "../types";

export const fetchTrips = async (): Promise<Trip[]> => {
    const response = await axiosInstance.get("/api/trips/");
    return response.data;
};
