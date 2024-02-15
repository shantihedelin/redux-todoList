import { addTodo, removeTodo, toggleComplete } from "@/redux/todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleOnChange(e) {
    setNewTodo(e.target.value);
  }

  function handleAddTodo() {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  }

  function handleToggleComplete(id) {
    dispatch(toggleComplete(id));
  }

  function handleRemoveTodo(id) {
    dispatch(removeTodo(id));
  }

  return (
    <>
    <h1>To Do App</h1>
      <div>
        <div>
          <input
            className=""
            type="text"
            value={newTodo}
            placeholder="Enter your todo"
            onChange={handleOnChange}
          />{" "}
          &nbsp;
          <button onClick={handleAddTodo}>Add todo</button>
        </div>
        <div>
          <ul className="flex flex-col space-y-2 mt-10">
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.todoTitle} &nbsp;
                <button onClick={() => handleToggleComplete(todo.id)}>
                  Complete
                </button>
                <button onClick={() => handleRemoveTodo(todo.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
