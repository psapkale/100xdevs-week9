import { useEffect, useState } from 'react';

const useMousePointer = () => {
   const [mouseLocation, setMouseLocation] = useState(null);

   useEffect(() => {
      const handleMouseMove = (e) => {
         setMouseLocation({
            x: e.clientX,
            y: e.clientY,
         });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return mouseLocation;
};

export default useMousePointer;
