import { FunctionComponent, useState, ChangeEvent } from "react";

interface IProps {
  text: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, newTodo: string) => void;
}

const TodoItem: FunctionComponent<IProps> = ({ text, onDelete, onEdit }) => {
  const [newTodo, setNewTodo] = useState("");

  const onEditTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => onDelete(text)}>Delete</button>
      <button onClick={() => onEdit(text, newTodo)}>Edit</button>
      <input
        type="text"
        placeholder="edit todo"
        value={newTodo}
        onChange={onEditTodo}
      />
    </div>
  );
};

export default TodoItem;
