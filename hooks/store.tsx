import { useState, createContext, FunctionComponent, ReactNode } from "react";
import { TodoInterface } from "../interfaces/TodoInterface";

type TodoContext = { todo: TodoInterface[]; addTodo: (text: string) => void };

export const myContext = createContext<TodoContext>({
  todo: [],
  addTodo: (text: string) => void {},
});

interface IProps {
  children: ReactNode;
}

const TodoContextProvider: FunctionComponent<IProps> = ({ children }) => {
  const [todo, setTodo] = useState<TodoInterface[]>([
    {
      id: "1212",
      todo: "clean",
      completed: false,
    },
  ]);

  const addTodo = (text: string) =>
    setTodo([...todo, { todo: text, completed: false }]);

  return (
    <myContext.Provider value={{ todo, addTodo }}>
      {children}
    </myContext.Provider>
  );
};

export default TodoContextProvider;
