import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { removeTodo, toggleTodo } from "../store/todos/todos-actions";
import { selectVisibleTodos } from '../store/todos/todos-selectors';



export const TodoList = () => {
  const dispatch = useDispatch();
  const { filter } = useParams();
  const todos = useSelector(state => selectVisibleTodos(state, filter));


  return (
    <ul>
      {todos.map((todo) => (
        <li style={{marginTop: '5px'}} key={todo.title}>
          <div className="ui big message" >
            <input
              // className="ui checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            &nbsp;&nbsp;
            {todo.title}{" "}
            <button className="circular ui icon right floated button" onClick={() => dispatch(removeTodo(todo.id))}><i class="trash icon"></i></button>
          </div>
        </li>
      ))}
    </ul>
  );
};
