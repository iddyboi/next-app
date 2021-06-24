import { useState, useEffect, ChangeEvent, FormEvent } from "react";

import { Container } from "../../styles/utility-styles";
import CustomButton from "../../components/UI/Button";
import TodoItem from "../../components/Todo/TodoItem";
function spotify() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<string[] | null>([]);

  const todoTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTodos((prevState) => [...prevState, todoText]);
    setTodoText("");
  };
  const onDeleteHandler = (text: string) => {
    const deleteItems = todos.filter((todo) => todo !== text);
    setTodos(deleteItems);
  };
  const onEditHandler = (text: string, newTodo: string) => {
    setTodos((prev) => prev.map((todo) => (todo === text ? newTodo : todo)));
  };
  return (
    <>
      <Container>
        <p>Todo list</p>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={todoText}
            onChange={todoTextHandler}
          />
          <CustomButton type="submit">Add</CustomButton>
        </form>
        {todos?.map((todo) => (
          <TodoItem
            onEdit={onEditHandler}
            onDelete={onDeleteHandler}
            key={todo}
            text={todo}
          />
        ))}
      </Container>
    </>
  );
}

export default spotify;
