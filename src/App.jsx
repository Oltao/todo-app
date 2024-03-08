import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setItem(e.target.value);
  };

  const todoItems = (e) => {
    const todo = [...todos, { id: crypto.randomUUID(), title: item }];
    item.length > 0 && setTodos(todo);
    setItem("");
  };

  const deleteTodo = (id) => {
    setTodos((t) => {
      return t.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="todo-container">
      <h1>Things to-do</h1>
      <input
        type="text"
        placeholder="Enter Your Things To-do"
        value={item}
        onChange={onChange}
      />
      <button className="btn" onClick={todoItems}>
        Add Task
      </button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" />
                {todo.title}
                <button className="del-btn" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
