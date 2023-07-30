import { useContext } from "react";
import { TodoContext, TodoProvider } from "../../context/TodosContext/TodosContext";

const useTodoContext = () => {
  const context = useContext(TodoContext);
  const { todos, addNewTodo, addTodoInformation, deleteTodo } = context;

  return { todos, addNewTodo, addTodoInformation, deleteTodo };
};

export { useTodoContext, TodoProvider };
