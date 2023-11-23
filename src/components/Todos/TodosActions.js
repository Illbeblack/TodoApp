import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import Button from "../UI/Button"

function TodosActions({resetTodos, deletComplitedTodos, completedTodos}) {
    return <div>
        <Button title='Reset all todos' onClick={resetTodos}><RiRefreshLine/></Button>
        <Button title='Clear completed todos' onClick={deletComplitedTodos} disabled={!completedTodos}><RiDeleteBin2Line /></Button>
    </div>
}

export default TodosActions