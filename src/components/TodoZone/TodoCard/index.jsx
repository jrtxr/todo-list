import { useRef } from "react";
import { useTodo } from "../../../hooks/TodosHook/useTodo";

import "./styles.css";

export const TodoCard = ({ TodoKey }) => {
  const { addTodoInformation, todos, deleteTodo } = useTodo();
  const { title, description, status, creatAt } = todos.get(TodoKey);

  const handleOnChange = async () => {
    const formData = formRef?.current;
    const data = {
      title: formData.title.value,
      status: formData.status.value,
      description: formData.description.value,
      creatAt: creatAt,
    };
    await addTodoInformation(data, TodoKey);
  };

  const handleOnClick = async (event) => {
    event.preventDefault();
    deleteTodo(TodoKey);
  };

  const formRef = useRef();
  return (
    <div className="card">
      <form ref={formRef} onChange={handleOnChange}>
        <div className="cardBody">
          <input
            maxLength={35}
            name="title"
            placeholder="Informe um titulo"
            ref={formRef}
            defaultValue={title}
            className="input"
          />

          <textarea
            maxLength={85}
            name="description"
            ref={formRef}
            defaultValue={description}
            placeholder="Informe a descrição da tarefa"
          />

          <select name="status" ref={formRef} defaultValue={status}>
            <option value="todo">Todos</option>
            <option value="doing">Fazendo</option>
            <option value="complete">Concluída</option>
          </select>
        </div>
        <div className="cardFooter">
          <span>Criado em {creatAt}</span>
          <button className="exluirTodoButton" type="button" onClick={handleOnClick}>
            Excluir
          </button>
        </div>
      </form>
    </div>
  );
};
