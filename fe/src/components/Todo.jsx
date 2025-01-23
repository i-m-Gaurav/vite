import { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todos");
      setTodos(response.data.data);
    } catch (error) {
      console.error("Failed to fetch todos", error);
      setError("Failed to fetch todos");
    } finally {
      setLoading("failed to fetch the todos")
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:3000/api/todos", {
        name: inputValue,
      });
      setTodos(prevTodos => [...prevTodos, response.data]);
      setInputValue("");
    } catch (error) {
      console.error("Failed to create todos", error);
      setError("Failed to create todo");
    }
  };

  // const handleAddTodo = async (e) => {
  //   e.preventDefault();
  
  //   const totalTodos = 1_000_000; // Total number of todos to create
  //   const batchSize = 100; // Number of todos to create in each batch
  //   const delay = 100; // Delay between batches (in milliseconds)
  
  //   try {
  //     for (let i = 0; i < totalTodos; i += batchSize) {
  //       const batch = [];
  //       for (let j = 0; j < batchSize; j++) {
  //         const todoName = `Todo ${i + j + 1}`; // Generate a unique todo name
  //         batch.push(
  //           axios.post("http://localhost:3000/api/todos", {
  //             name: todoName,
  //           })
  //         );
  //       }
  
  //       // Send the current batch of requests concurrently
  //       await Promise.all(batch);
  
  //       // Add a delay between batches to avoid overwhelming the server
  //       await new Promise((resolve) => setTimeout(resolve, delay));
  
  //       console.log(`Created ${i + batchSize} todos so far...`);
  //     }
  
  //     console.log("All todos created successfully!");
  //   } catch (error) {
  //     console.error("Failed to create todos", error);
  //     setError("Failed to create todos");
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("failed to delete",error);
      setError("Failed to delete todo");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>

      <List 
        todos={todos}
        loading={loading}
        error={error}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;
