import  { useEffect, useState } from "react";

const List = () => {
  const [todos, setTodos] = useState([]); // State to store todos
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch todos from the backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/todos"); // Replace with your backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.data); // Update state with fetched todos
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchTodos();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display todos
  return (
    <div>
      <h1>Todo List</h1>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
};

export default List;