import { useTodo } from "../../hooks/TodosHook/useTodo";

import { TodoCard } from "../TodoCard";

import "./styles.css";

export const TodoZone = ({ title, status, borderColor }) => {
  const { todos, addNewTodo } = useTodo();

  return (
    <section data-testid={`zone-${status}`}>
      <header
        data-testid={`header-zone-${status}`}
        className="header"
        style={{ borderBottom: `${borderColor} 2px solid` }}
      >
        <h1 data-testid={`header-zone-title-${status}`} className="todoZoneTitle">
          {title}
        </h1>
        {status === "todo" && (
          <button
            type="button"
            data-testid={`header-zone-button-${status}`}
            className="newTodoButton"
            id="button-new-todo"
            onClick={() => addNewTodo()}
            aria-label="adicionar todo"
            tabIndex={0}
          >
            +
          </button>
        )}
      </header>

      <div className="overflow" data-testid={`overflow-zone-${status}`}>
        {[...todos.keys()].map((key, index) => {
          const isCurrentState = status === todos.get(key)?.status;
          if (isCurrentState) {
            return <TodoCard key={`todo-${index}`} id={`todo-${index}`} TodoKey={key} />;
          }
        })}
      </div>
    </section>
  );
};
