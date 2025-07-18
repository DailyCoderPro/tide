import { useEffect, useState } from "react";

export function useFetch<T> (url: string, options?: RequestInit){
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        let active  = true;
        setLoading(true);
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if(active){
                    setData(data);
                }
            })
            .catch(err => {
                if(active) {
                    setError(err);
                }
            })
            .finally(()=>{
                if(active) {
                    setLoading(false);
                }
            })
            return () => {
                active = false;
            }
    }, [url, options]);

    return { data, loading, error };
}