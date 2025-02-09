
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);

  const [storedData, setStoredData] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  const setValue = (value) => {
    setStoredData(value);
    localStorage.setItem(key, JSON.stringify(value)); // Save value in localStorage
  };

  return [storedData, setValue];
}

export default useLocalStorage;
