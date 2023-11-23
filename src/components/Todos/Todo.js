import styles from './Todo.module.css'
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo ({todoObj, deleteTodo, toggleTodo}) {
    return <div className={`${styles.todo} ${todoObj.isCompleted ? styles.completedTodo : ''}`}>
        <RiTodoFill className={styles.todoIcon}/>
        <div className={styles.todoText}>{todoObj.text}</div>
        <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todoObj.id)}/>
        <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todoObj.id)}/>
    </div>
}

export default Todo