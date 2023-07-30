import { useTodoContext } from "../../hooks/TodosHook/TodosHook";
import { TodoCard } from "./TodoCard";

import "./styles.css";

export const TodoZone = ({ title, status }) => {
  const { todos, addNewTodo } = useTodoContext();
  const colorCaradBorder = new Map([
    ["todo", "white"],
    ["doing", "blue"],
    ["complete", "green"],
  ]);

  return (
    <section>
      <div className="head" style={{ borderBottom: `${colorCaradBorder.get(status)} 2px solid` }}>
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
