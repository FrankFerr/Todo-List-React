import Navbar from "../components/Navbar"
import { onAdd } from "../redux/TodoSlice"
import { useDispatch, useSelector } from "react-redux"
import TodoItemContainer from "../components/TodoItemContainer"
import NewTodo from "../components/NewTodo"
import { useTodo } from "../hook/UseTodo"
import { ColorScheme } from "../utility/Theme"

function Importanti(){
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.value)
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark


    const addTodo = (todoText) => {
        const id = Math.floor(Math.random() * 1000)

        // const todoItem = new Todo(id, todoText, false, false)
        const todoItem = {
            id: id,
            text: todoText,
            isCompleted: false,
            isImportant: true
        }

        dispatch(onAdd(todoItem))
    }

    return (
        <>
            <Navbar></Navbar>
            <h1 className={`${colorScheme.h1} text-4xl font-bold mb-4 text-left`}>Importanti</h1>
            <hr className={`${colorScheme.hr} mb-4`}/>

            <div className="new-todo-container flex flex-col justify-between">
                <div className={`h-full overflow-y-auto mb-4 rounded-2xl ${colorScheme.list_todo_border} border-2 ${colorScheme.list_todo_shadow}`} >
                    {
                        todos.filter((todo) => todo.isImportant == true)
                             .map((todo) => <TodoItemContainer todo={todo} key={todo.id}/>)
                    }
                </div>
                <NewTodo onAdd={addTodo}></NewTodo>
            </div>
        </>
    )
}

export default Importanti