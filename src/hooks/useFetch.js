import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return [data, loading, error];
}

export default useFetch;
