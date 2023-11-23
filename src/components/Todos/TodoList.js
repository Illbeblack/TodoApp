import Todo from "./Todo.js";
import styles from './TodoList.module.css'

function TodoList ({todos, deleteTodo, toggleTodo}) {
    return <div className={styles.todoLostContainer}>
        {todos[0] ? todos.map((val) => <Todo toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={val.id} todoObj={val} />) : <h2>Todo list is empty</h2>}
        
    </div> 
}

export default TodoList