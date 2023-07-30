import { useTodoContext } from "../../hooks/TodosHook/TodosHook";
import { TodoCard } from "./TodoCard";

import "./styles.css";

export const TodoZone = ({ title, status }) => {
  const { todos, addNewTodo } = useTodoContext();
  return (
    <section>
      <h1>{title}</h1>
      {[...todos.keys()].map((key, index) => {
        const isCurrentState = status === todos.get(key).status;
        if (isCurrentState) {
          return <TodoCard key={`Todo-${index}`} TodoKey={key} />;
        }
      })}
      {status === "todos" && <button onClick={addNewTodo}>Nova tarefa +</button>}
    </section>
  );
};
