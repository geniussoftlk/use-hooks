import { useState } from 'react';

// Hook
const useSessionStorage = (key: string, initialValue: string): [string, Function] => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from session storage by key
            if (window !== undefined) {
                const item = window.sessionStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            }
            // Parse stored json or if none return initialValue
            return initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to sessionStorage.
    const setValue = (value: string | Function) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to session storage
            if (window !== undefined) {
                window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
};

export default useSessionStorage;
