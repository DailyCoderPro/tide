import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T){
    const [storedValue, setStoredValue] = useState<T>(()=>{
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(storedValue));
    },[storedValue, key]);

    return [storedValue, setStoredValue];
}