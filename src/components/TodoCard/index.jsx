import { useRef, useState } from "react";
import { useTodo } from "../../hooks/TodosHook/useTodo";

import "./styles.css";

export const TodoCard = ({ TodoKey }) => {
  const { addTodoInformation, todos, deleteTodo } = useTodo();
  const todo = todos.get(TodoKey);
  const { title, description, status, createdAt, isNotEditable } = todo ? todo : {};
  const [isDisabled, setIsDisabled] = useState(isNotEditable);

  const handleSave = async () => {
    const formData = formRef?.current;
    setIsDisabled(!isDisabled);

    const data = {
      title: formData.title.value,
      status: formData.status.value,
      description: formData.description.value,
      createdAt: createdAt,
      isNotEditable: !isDisabled,
    };

    await addTodoInformation(data, TodoKey);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    deleteTodo(TodoKey);
  };

  const formRef = useRef();
  return (
    <div className="card" data-testid={`card`}>
      <header className="cardHead" data-testid={`card-header`}>
        <button
          data-testid={`header-button-save-and-edit`}
          onClick={handleSave}
          type="button"
          className="editTodoButton"
          title="Botão de editar todo"
          tabIndex={4}
          aria-label="editar todo"
          id={`button-edit-todo-${TodoKey}`}
        >
          {isNotEditable ? "🖊" : "💾"}
        </button>
      </header>
      <form ref={formRef} data-testid={`form`}>
        <div className="cardBody" data-testid={`cardBody`}>
          <input
            data-testid={`input-title`}
            maxLength={35}
            name="title"
            placeholder="Informe um titulo"
            ref={formRef}
            defaultValue={title}
            className="input"
            disabled={isNotEditable}
            tabIndex={1}
            id={`input-title-todo-${TodoKey}`}
          />

          <textarea
            data-testid={`text-area-description`}
            maxLength={85}
            name="description"
            ref={formRef}
            defaultValue={description}
            placeholder="Informe a descrição da tarefa"
            disabled={isNotEditable}
            id={`input-description-todo-${TodoKey}`}
            tabIndex={2}
          />

          <select
            data-testid={`select-status`}
            name="status"
            ref={formRef}
            defaultValue={status}
            disabled={isNotEditable}
            tabIndex={3}
            id={`input-status-todo-${TodoKey}`}
          >
            <option id="option-1" value="todo">
              Todos
            </option>
            <option id="option-2" value="doing">
              Fazendo
            </option>
            <option id="option-3" value="complete">
              Concluída
            </option>
          </select>
        </div>
        <footer className="cardFooter" data-testid={`card-footer`}>
          <span>Criado em {createdAt}</span>
          <button
            data-testid={`footer-button`}
            title="botão de excluir todo"
            className="exluirTodoButton"
            type="button"
            onClick={handleDelete}
            tabIndex={5}
            aria-label="Excluir todo"
            id={`button-delete-todo-${TodoKey}`}
          >
            🗑️
          </button>
        </footer>
      </form>
    </div>
  );
};
