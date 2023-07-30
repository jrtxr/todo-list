import { createContext, useCallback, useState } from "react";

export const TodoContext = createContext();

const LOCALSTORAGE_KEY = "@todolist:todos";

export const TodoProvider = ({ children }) => {
  const [todos, settodos] = useState(() => {
    const localtodos = localStorage.getItem(LOCALSTORAGE_KEY);
    if (localtodos) {
      return new Map(JSON.parse(localtodos));
    }
    return new Map();
  });

  const getCreatAt = () => {
    const now = Date.now();
    const newDate = new Date(now);

    return newDate.toLocaleString();
  };

  const addNewTodo = useCallback(async () => {
    const key = Math.floor(Math.random() * Date.now()).toString(10);
    const newTodo = {
      title: "",
      status: "todos",
      description: "",
      creatAt: getCreatAt(),
      assigned: "",
    };
    settodos(new Map(todos.set(key, newTodo)));
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([...todos]));
  }, [todos]);

  const addTodoInformation = useCallback(
    async (data, key) => {
      settodos(new Map(todos.set(key, data)));
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([...todos]));
    },
    [todos]
  );

  const deleteTodo = useCallback(
    async (key) => {
      todos.delete(key);
      settodos(new Map(todos));
      if (todos.size < 1) {
        localStorage.removeItem(LOCALSTORAGE_KEY);
        return;
      }
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([...todos]));
    },
    [todos]
  );

  return (
    <TodoContext.Provider value={{ todos: todos, addNewTodo, addTodoInformation, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
