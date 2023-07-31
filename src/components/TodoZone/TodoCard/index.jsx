import { useRef, useState } from "react";
import { useTodo } from "../../../hooks/TodosHook/useTodo";

import "./styles.css";

export const TodoCard = ({ TodoKey }) => {
  const { addTodoInformation, todos, deleteTodo } = useTodo();
  const { title, description, status, createdAt, isEditable } = todos.get(TodoKey);
  const [isDisabled, setIsDisabled] = useState(isEditable);

  const handleSave = async () => {
    const formData = formRef?.current;
    setIsDisabled(!isDisabled);

    const data = {
      title: formData.title.value,
      status: formData.status.value,
      description: formData.description.value,
      createdAt: createdAt,
      isEditable: !isDisabled,
    };

    await addTodoInformation(data, TodoKey);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    deleteTodo(TodoKey);
  };

  const formRef = useRef();
  return (
    <div className="card">
      <header className="cardHead">
        <button
          onClick={handleSave}
          type="button"
          className="editTodoButton"
          title="Botão de editar todo"
        >
          {isEditable ? "🖊" : "💾"}
        </button>
      </header>
      <form ref={formRef}>
        <div className="cardBody">
          <input
            maxLength={35}
            name="title"
            placeholder="Informe um titulo"
            ref={formRef}
            defaultValue={title}
            className="input"
            disabled={isEditable}
          />

          <textarea
            maxLength={85}
            name="description"
            ref={formRef}
            defaultValue={description}
            placeholder="Informe a descrição da tarefa"
            disabled={isEditable}
          />

          <select name="status" ref={formRef} defaultValue={status} disabled={isEditable}>
            <option value="todo">Todos</option>
            <option value="doing">Fazendo</option>
            <option value="complete">Concluída</option>
          </select>
        </div>
        <div className="cardFooter">
          <span>Criado em {createdAt}</span>
          <button
            title="botão de excluir todo"
            className="exluirTodoButton"
            type="button"
            onClick={handleDelete}
          >
            🗑️
          </button>
        </div>
      </form>
    </div>
  );
};
