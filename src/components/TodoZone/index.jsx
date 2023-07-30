import { useTodo } from "../../hooks/TodosHook/useTodo";

import { TodoCard } from "./TodoCard";

import "./styles.css";

export const TodoZone = ({ title, status, borderColor }) => {
  const { todos, addNewTodo } = useTodo();

  return (
    <section>
      <div className="head" style={{ borderBottom: `${borderColor} 2px solid` }}>
        <h1 className="todoZoneTitle">{title}</h1>
        {status === "todo" && (
          <button className="newTodoButton" onClick={addNewTodo}>
            +
          </button>
        )}
      </div>

      <div className="overflow">
        {[...todos.keys()].map((key, index) => {
          const isCurrentState = status === todos.get(key).status;
          if (isCurrentState) {
            return <TodoCard key={`todo-${index}`} TodoKey={key} />;
          }
        })}
      </div>
    </section>
  );
};
