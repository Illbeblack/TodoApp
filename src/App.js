import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import TodoForm from './components/Todos/TodoForm.js';
import TodoList from './components/Todos/TodoList.js';
import TodosActions from './components/Todos/TodosActions.js';

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHendler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}
    ))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deletComplitedTodosHandler = () => {
    setTodos(todos.filter((todo)=> !todo.isCompleted))
  }

  const completedTodoCount = todos.filter((todo)=> todo.isCompleted).length

  return <div className="App">
    <h1>TodoApp</h1>
    <TodoForm addTodo = {addTodoHendler}/>
    {!!todos.length && <TodosActions completedTodos={!!completedTodoCount} resetTodos={resetTodosHandler} deletComplitedTodos={deletComplitedTodosHandler}/>}
    <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
    {completedTodoCount > 0 && <p>You have completed {completedTodoCount} {completedTodoCount > 1 ? 'todos' : 'todo'}</p>}
  </div>;
}

export default App;
