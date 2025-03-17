import { useState } from 'react'

const Todo1 = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }



  const handleAdd = (e) => {
    e.preventDefault();


    if (formData.title.trim() === "" && formData.description.trim() === "") return;

    setTodos([...todos, formData]);
    setFormData({ title: "", description: "" })

  }

  const handleDelete = (index) => {

    setTodos(todos.filter((_, i) => i !== index));

  };

  return (
    <div>

      <label>Todo list app </label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label>description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <button onClick={handleAdd} > Add </button>
      <ul>
        {
          todos.map((todo, index) => (
            <li key={index} >

              <strong>{todo.title}</strong>
              <p>{todo.description}</p>

              <button onClick={() => handleDelete(index)}> Delete </button>
            </li>
          ))

        }
      </ul>

    </div>
  )
}

export default Todo1;
