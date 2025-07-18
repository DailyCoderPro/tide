import { useEffect, useState } from "react";

export function useThrottle<T>(value: T, delay: number){
    const [throttled, setThrottled] = useState<T>(value);
    const [lastExecuted, setLastExecuted] = useState<number>(Date.now());

    useEffect(()=>{
        const handler = setTimeout(()=>{
            if(Date.now() - lastExecuted >= delay){
                setThrottled(value);
                setLastExecuted(Date.now())
            }
        }, delay - (Date.now() - lastExecuted));
        return () => clearTimeout(handler);
    }, [value, delay, lastExecuted]);

    return throttled;
}