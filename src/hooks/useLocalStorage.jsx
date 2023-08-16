import React, { useState } from 'react'

const useLocalStorage = (key, initalValue) => {
    const storedValue = localStorage.getItem(key);
    const [value, setValue] = useState([]);
    return [value, setValue];
}

export default useLocalStorage