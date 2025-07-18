const cache = new Map<string, unknown>();

export function useCache<T>(key: string, fetcher: () => Promise<T>): T {
    if(cache.has(key)){
        return cache.get(key) as T;
    }

    const Promise = fetcher().then(data => {
        cache.set(key, data);
        return data;
    });

    cache.set(key, Promise);
    throw Promise;
}