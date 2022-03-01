import { useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const [todoText, setToDoText] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeHandler = (e) => {
    const newtodoText = e.target.value;
    console.log(newtodoText);
    setToDoText(newtodoText);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setToDoText("");
  };

  const renderTodos = () => {
    if (todos.length <= 0) {
      return <p>Add tasks to your list</p>;
    }

    return (
      <ul className="list-group">
        {todos.map((todo, i) => (
          <li className="list-group-item" key={i}>
            {todo}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="todoText" className="form-label">
              Stuff I need to do today
            </label>
            <input
              type="text"
              className="form-control"
              id="todoText"
              value={todoText}
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {renderTodos()}
      </div>
    </div>
  );
}

export default App;
