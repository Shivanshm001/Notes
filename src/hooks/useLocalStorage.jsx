import { useEffect, useState } from 'react';


export const useLocalStorage = (key, initalValue) => {
    const storedValue = localStorage.getItem(key);
    const initialStoredValue = storedValue ? JSON.parse(storedValue) : initalValue;

    const [value, setValue] = useState(initialStoredValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]
}