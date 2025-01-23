import PropTypes from "prop-types";

const List = ({ todos, onDelete }) => {


  return (
    <div>
      {Array.isArray(todos) && todos.length > 0 ? (
        <ul>
          {todos.slice().reverse().map((todo) => (
            <li key={todo.id}>
              <h3>{todo.name}</h3>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
};

List.propTypes = {
  loading: PropTypes.bool.isRequired, // 'loading' must be a boolean and is required
  error: PropTypes.string, // 'error' is optional and should be a string
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 'id' can be a string or number
      name: PropTypes.string.isRequired, // 'name' must be a string
    })
  ).isRequired, // 'todos' must be an array and is required
  onDelete: PropTypes.func.isRequired, // 'onDelete' must be a function and is required
};

export default List;