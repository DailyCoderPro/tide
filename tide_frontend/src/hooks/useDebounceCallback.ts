import { useCallback, useEffect, useRef } from "react";

export function useDebounceCallback<T extends unknown[]>(callback: (...args: T) => void, delay: number) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const debounceFn = useCallback((...args: T) => {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => callback(...args), delay);
    }, [callback, delay]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return debounceFn;
}