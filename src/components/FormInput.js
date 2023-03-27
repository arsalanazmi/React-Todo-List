import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "./DataProvider";

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);

  const [todoName, setTodoName] = useState();
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        text="text"
        name="todos"
        id="todos"
        ref={todoInput}
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        placeholder="What needs to be done ?"
        required
      />
      <button type="submit">Create</button>
    </form>
  );
}
