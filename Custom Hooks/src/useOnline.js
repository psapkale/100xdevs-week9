import { useEffect, useState } from 'react';

const useOnline = () => {
   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

   useEffect(() => {
      const handleOnline = () => {
         setIsOnline(true);
      };

      window.addEventListener('online', handleOnline);

      const handleOffline = () => {
         setIsOnline(false);
      };
      window.addEventListener('offline', handleOffline);

      return () => {
         window.removeEventListener('online', handleOnline);
         window.removeEventListener('offline', handleOffline);
      };
   }, []);

   return isOnline;
};

export default useOnline;
