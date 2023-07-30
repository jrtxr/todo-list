import { useRef } from "react";
import { useTodoContext } from "../../../hooks/TodosHook/TodosHook";
import { useModalContext } from "../../../hooks/ModalHook/ModalHook";

import "./styles.css";
import { Modal } from "../../Modal";

export const TodoCard = ({ TodoKey }) => {
  const { addTodoInformation, todos, deleteTodo } = useTodoContext();
  const { setIsOpen, isOpen } = useModalContext();
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

  const openModalTodo = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const formRef = useRef();
  return (
    <div className="card">
      <form ref={formRef} onChange={handleOnChange}>
        <div className="cardHead">
          <button onClick={openModalTodo} className="openModalButton">
            Abrir
          </button>
        </div>
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
      {isOpen && (
        <Modal>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>{status}</span>
          <span>{creatAt}</span>
        </Modal>
      )}
    </div>
  );
};
