import React, { useState } from "react";

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState("");

  function handleTodo(event) {
    event.preventDefault();
    const todo = { id: Date.now(), text: newtodo };
    setTodos([...todos, todo]);
    setNewtodo("");
  }

  function handleTodoDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={newtodo}
          placeholder="enter text"
          onChange={(e) => setNewtodo(e.target.value)}
        />
        <button disabled={newtodo.length === 0} onClick={handleTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
