export function useCookies(){
    const getCookie = (name: string) => {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        return match ? decodeURIComponent(match[2]) : null;
    }

    const setCookie = (name: string, value: string, days: number) => {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    }

    const deleteCookie = (name: string) => {
        setCookie(name, "", -1);
    }

    return { getCookie, setCookie, deleteCookie };
}