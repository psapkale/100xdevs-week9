import { useEffect } from 'react';

function MyFunction() {
   useEffect(() => {
      console.log('body useEffect');

      return () => {
         console.log('cleanup useEffect');
      };
   }, []);

   return <div>From MyFunction component</div>;
}

export default MyFunction;
