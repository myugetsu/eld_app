import { useState } from "react";
import { login } from "../api/auth";

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);

    const loginUser = async (username: string, password: string) => {
        const data = await login(username, password);
        setToken(data.access);
    };

    return { token, loginUser };
};
