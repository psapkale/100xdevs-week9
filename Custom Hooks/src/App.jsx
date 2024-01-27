import { useEffect, useState } from 'react';
import './App.css';
import MyClass from './MyClass';
import MyFunction from './MyFunction';
import useTodos from './useTodos';
import Track from './Track';
import useOnline from './useOnline';
import useMousePointer from './useMousePointer';
import SearchBar from './SearchBar';

// class based components
// function App() {
//    const [renderComponent, setRenderComponent] = useState(false);

//    setInterval(() => {
//       // triggering a rerender
//       setRenderComponent((prev) => !prev);
//    }, 3000);

//    return (
//       <div>
//          Hello
//          <MyClass />
//          {renderComponent && <MyFunction />}
//       </div>
//    );
// }

// custom hooks
// function App() {
//    // autorefresh after 'n' seconds
//    const { todos, loading } = useTodos(5);

//    if (loading) {
//       return <div>Loading..</div>;
//    }

//    return (
//       <>
//          {todos.map((todo, i) => (
//             <Track key={i} todo={todo} />
//          ))}
//       </>
//    );
// }

// useOnline
// function App() {
//    const isOnline = useOnline();

//    return <div>{isOnline ? 'Online' : 'Offline'}</div>;
// }

// useMousePointer
// function App() {
//    const mouseLocation = useMousePointer();

//    return (
//       <div>
//          {mouseLocation?.x} - {mouseLocation?.y}
//       </div>
//    );
// }

// useInterval
// function App() {
//    const [count, setCount] = useState(0);

//    useInterval(() => {
//       setCount((c) => c + 1);
//    }, 1000);

//    return <div>Timer is at {count}</div>;
// }

// useDebounce
function App() {
   return (
      <div>
         <SearchBar />
      </div>
   );
}

export default App;
