import { useState } from "react";
import axios from "axios";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:3000/todos", {
        name: inputValue,
      });

      setTodo([...todo, response.data.name]);
      setInputValue("");
    } catch (error) {
      console.error("Error creating todo", error);
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <p>Add Todo</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          onChange={handleInputChange}
          placeholder="add todo here"
          value={inputValue}
        />
        <button type="submit"> submit </button>
      </form>

      <h1>Todo list is here</h1>
      {todo.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </>
  );
};

export default Todo;
