import { createContext, useContext, useState } from "react";
import { Trip } from "../types";

type TripContextType = {
    trips: Trip[];
    setTrips: (trips: Trip[]) => void;
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [trips, setTrips] = useState<Trip[]>([]);
    return <TripContext.Provider value={{ trips, setTrips }}>{children}</TripContext.Provider>;
};

export const useTrips = () => {
    const context = useContext(TripContext);
    if (!context) throw new Error("useTrips must be used within TripProvider");
    return context;
};
