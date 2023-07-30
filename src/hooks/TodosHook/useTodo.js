import { useContext } from "react";
import { TodoContext } from "../../context/TodosContext/index";

export const useTodo = () => {
  const context = useContext(TodoContext);
  const { todos, addNewTodo, addTodoInformation, deleteTodo } = context;

  return { todos, addNewTodo, addTodoInformation, deleteTodo };
};
