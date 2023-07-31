import { createContext, useCallback, useEffect, useState } from "react";

export const TodoContext = createContext();

const LOCAL_STORAGE_KEY = "@todolist:todos";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localTodos ? new Map(JSON.parse(localTodos)) : new Map();
  });

  const getCreatedAt = () => {
    const now = Date.now();
    const newDate = new Date(now);
    return newDate.toLocaleString();
  };

  const saveToLocalStorage = useCallback((updatedTodos) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...updatedTodos]));
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos, saveToLocalStorage]);

  const addNewTodo = useCallback(() => {
    const key = crypto.randomUUID();
    const newTodo = {
      title: "",
      status: "todo",
      description: "",
      createdAt: getCreatedAt(),
      isNotEditable: false,
    };
    setTodos(new Map(todos.set(key, newTodo)));
  }, [todos]);

  const addTodoInformation = useCallback(
    (data, key) => {
      const updatedTodos = new Map(todos);
      updatedTodos.set(key, data);
      setTodos(updatedTodos);
    },
    [todos]
  );

  const deleteTodo = useCallback(
    (key) => {
      const updatedTodos = new Map(todos);
      updatedTodos.delete(key);
      setTodos(updatedTodos);
      if (updatedTodos.size < 1) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } else {
        saveToLocalStorage(updatedTodos);
      }
    },
    [todos, saveToLocalStorage]
  );

  return (
    <TodoContext.Provider value={{ todos, addNewTodo, addTodoInformation, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
