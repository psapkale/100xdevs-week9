import './App.css';
import Todo from './Todo';

function App() {
   const todo = {
      title: 'title',
      description: 'description',
      done: false,
   };

   return (
      <div>
         Hello
         <Todo todo={todo} />
      </div>
   );
}

export default App;
