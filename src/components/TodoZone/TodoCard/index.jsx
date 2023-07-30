import { useRef, useState } from "react";
import { useTodo } from "../../../hooks/TodosHook/useTodo";

import "./styles.css";

export const TodoCard = ({ TodoKey }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { addTodoInformation, todos, deleteTodo } = useTodo();
  const { title, description, status, createdAt } = todos.get(TodoKey);

  const handleChange = async () => {
    const formData = formRef?.current;
    const data = {
      title: formData.title.value,
      status: formData.status.value,
      description: formData.description.value,
      createdAt: createdAt,
    };
    await addTodoInformation(data, TodoKey);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    deleteTodo(TodoKey);
  };

  const formRef = useRef();
  return (
    <div className="card">
      <header className="cardHead">
        <button
          onClick={() => setIsDisabled(!isDisabled)}
          type="button"
          className="editTodoButton"
          title="Botão de editar todo"
        >
          {isDisabled ? "🖊" : "💾"}
        </button>
      </header>
      <form ref={formRef} onChange={handleChange}>
        <div className="cardBody">
          <input
            maxLength={35}
            name="title"
            placeholder="Informe um titulo"
            ref={formRef}
            defaultValue={title}
            className="input"
            disabled={isDisabled}
          />

          <textarea
            maxLength={85}
            name="description"
            ref={formRef}
            defaultValue={description}
            placeholder="Informe a descrição da tarefa"
            disabled={isDisabled}
          />

          <select
            name="status"
            ref={formRef}
            defaultValue={status}
            disabled={isDisabled || !formRef?.current?.title?.value}
          >
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
            onClick={handleClick}
          >
            🗑️
          </button>
        </div>
      </form>
    </div>
  );
};
