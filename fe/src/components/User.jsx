import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Users List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ---- {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default User;
