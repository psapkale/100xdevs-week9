import { useEffect, useState } from 'react';

const useDebounce = (value, timeout) => {
   const [debouncedValue, setDebouncedValue] = useState(value);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setDebouncedValue(value);
      }, timeout);

      return () => {
         clearTimeout(timeoutId);
      };
   }, [value]);

   return debouncedValue;
};

export default useDebounce;
