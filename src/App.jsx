import { NewTodo } from './components/NewTodo'
import { TodoList } from './components/TodoList'
import { Filters } from './components/Filters';

import "./index.css";

export default function App() {
  return (
    <div className='wrap'>
      <h1>Redux Todo App</h1>
      <div className="ui container">
        <NewTodo />
        <Filters />
        <TodoList />
      </div>
    </div >
  );
}
