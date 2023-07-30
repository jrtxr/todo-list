import { useRef } from "react";
import "./styles.css";
import { useTodoContext } from "../../../hooks/TodosHook/TodosHook";

export const TodoCard = ({ TodoKey }) => {
  const { addTodoInformation, todos, deleteTodo } = useTodoContext();
  const { title, description, status, creatAt, assigned } = todos.get(TodoKey);

  const handleOnChange = async () => {
    const formData = formRef.current;
    const data = {
      title: formData.title.value,
      status: formData.status.value,
      description: formData.description.value,
      assigned: formData.assigned.value,
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
          <select name="status" ref={formRef} defaultValue={status}>
            <option value="todo">Todos</option>
            <option value="doing">Fazendo</option>
            <option value="complete">Concluída</option>
          </select>
          <textarea
            maxLength={85}
            name="description"
            ref={formRef}
            defaultValue={description}
            placeholder="Informe a descrição da tarefa"
          />
          <input
            name="assigned"
            ref={formRef}
            defaultValue={assigned}
            placeholder="Informe o responsável pela tarefa"
          />
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
