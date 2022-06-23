import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";


export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form className="ui fluid action input" onSubmit={handleSubmit}>
      <input required type="text" name="title" placeholder="new todo" />
      <button className="ui button" type="submit" value="Add Todo">Add</button>
    </form>
  );
};