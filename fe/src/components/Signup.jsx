import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        formData
      );
      console.log("User Created", response.data);

      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("can't save user", error);
    }
  };

  return (
    <>
      <h1>Sign up here.</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Example name"
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Example name"
        />
        <button type="submit">Save User</button>
      </form>
    </>
  );
};

export default Signup;
