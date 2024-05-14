import { useState } from "react";
import { HeadingTitle } from "../components/HeadingTitle";
import { Edit } from "../components/Edit";
import { Button } from "../components/Button";

export const Home = () => {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [updatedTask, setUpdatedTask] = useState("");

  const onChange = (e) => {
    setItem(e.target.value);
  };

  const todoItems = (e) => {
    const todo = [...todos, { id: crypto.randomUUID(), title: item }];
    item.length > 0 && setTodos(todo);
    setItem("");
  };

  //Delete To-do

  const deleteTodo = (id) => {
    setTodos((t) => {
      return t.filter((todo) => todo.id !== id);
    });
  };

  //edit todo

  const editTodo = (id) => {
    setEdit(id);
  };

  //Cancel Function
  const cancel = () => {
    setEdit(null);
  };

  //Update Change
  const updateChange = (id) => {
    updatedTask.length > 0 &&
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: updatedTask } : todo
        )
      );
    setUpdatedTask("");
    cancel();
  };

  return (
    <div className="todo-container">
      <HeadingTitle title="Things To-Do" />
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
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id === edit ? (
                <Edit
                  value={updatedTask}
                  editChange={(e) => setUpdatedTask(e.target.value)}
                />
              ) : (
                <label>
                  <input type="checkbox" />
                  {todo.title}
                </label>
              )}

              {todo.id === edit ? (
                <div className="ED-btn">
                  <Button
                    styleName="edit-btn"
                    buttonName="Update"
                    buttonRun={() => updateChange(todo.id)}
                  />
                  <Button
                    styleName="del-btn"
                    buttonName="Cancel"
                    buttonRun={cancel}
                  />
                </div>
              ) : (
                <div className="ED-btn">
                  <Button
                    styleName="edit-btn"
                    buttonName="Edit"
                    buttonRun={() => editTodo(todo.id)}
                  />
                  <Button
                    styleName="del-btn"
                    buttonName="Delete"
                    buttonRun={() => deleteTodo(todo.id)}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
