import { useEffect, useState } from "react";

/**
 * use case
 * 1. search input
 * 2. form validation
 * 3. autocomplete
 * 4. debounce button click
 * 5. debounce api call
 * 6. debounce event listener
 * 7. debounce state update
 * 8. debounce component render
 * 9. debounce component unmount
 */
/**
 * Debounce hook
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay: number){
    const [debounced, setDebounced] = useState<T>(value);

    useEffect(()=>{
        const handler = setTimeout(()=> setDebounced(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay])


    return debounced;
}
