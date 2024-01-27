import { useEffect, useState } from 'react';
import axios from 'axios';

function useTodos(n) {
   const [loading, setLoading] = useState(true);
   const [todos, setTodos] = useState([]);

   function getData() {
      // axios
      //    .get('https://sum-server.100xdevs.com/todos')
      //    .then((res) => {
      //       setTodos(res.data.todos);
      //       setLoading(false);
      //    })
      //    .catch((e) => {
      //       console.error(e);
      //       return;
      //    });

      setTimeout(() => {
         setTodos([
            {
               title: 'op',
            },
         ]);
         setLoading(false);
      }, 500);
   }

   useEffect(() => {
      const timer = setInterval(() => {
         getData();
      }, n * 1000);
      getData();

      return () => {
         clearInterval(timer);
      };
   }, [n]);

   return { todos, loading };
}

export default useTodos;
