
import { useEffect } from "react";

export default function useSEO({title, description}) {
    
    useEffect(() => {
        window.document.title = title
        window.document.querySelector('meta[name="description"]').setAttribute('content', description)
    }, [title, description])
    
}