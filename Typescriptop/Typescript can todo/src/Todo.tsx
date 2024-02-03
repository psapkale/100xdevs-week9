interface TodoType {
   title: string;
   description: string;
   done: boolean;
}

interface TodoInput {
   todo: TodoType;
}

const Todo = ({ todo }: TodoInput) => {
   return (
      <div>
         <h1>{todo.title}</h1>
         <h3>{todo.description}</h3>
         <h3>{todo.done}</h3>
      </div>
   );
};

export default Todo;
