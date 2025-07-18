import { useState } from "react";

export function useClipboard(){
    const [copied, setCopied] = useState(false);
    
    const copy = async (text: string)=> {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=> setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    return { copied, copy };
}