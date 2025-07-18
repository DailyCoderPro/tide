import { API_AUTH_LOGIN_URL, API_AUTH_REGISTER_URL, DEFAULT_ROLES } from "@/constants/apiConstants";

const login = async (email: string, password: string) => {
    const response = await fetch(API_AUTH_LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify({ name: email, password: password }),
    });
    return response.json();
};

const register = async (username: string,email: string, password: string) => {
    const response = await fetch(API_AUTH_REGISTER_URL, {
        method: 'POST',
        body: JSON.stringify({ username: username, email: email, password: password, roles: DEFAULT_ROLES }),
    });
    return response.json();
};

export { login, register };