import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function Footer() {
  const [todos, setTodos] = useContext(DataContext);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const handleDelete = () => {
    setTodos(newTodosComplete());
    localStorage.removeItem(`todoStore${[newTodosComplete()]}`);
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>Nothing To Do !</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
              checked={checkAll}
              onChange={handleCheckAll}
            />
            ALL
          </label>
          <p>You have {newTodosComplete().length} to do</p>
          <button id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
