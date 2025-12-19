import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"
import TodoItemContainer from "../components/TodoItemContainer"
import { useTodo } from "../hook/UseTodo"
import { ColorScheme } from "../utility/Theme"

function Completati(){
    const todos = useSelector((state) => state.todos.value)
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark

    return (
        <>
            <Navbar></Navbar>
            <h1 className={`${colorScheme.h1} text-4xl font-bold mb-4 text-left`}>Completati</h1>
            <hr className={`${colorScheme.hr} mb-4`}/>

            <div className="new-todo-container flex flex-col justify-between">
                <div className={`h-full overflow-y-auto mb-4 rounded-2xl ${colorScheme.list_todo_border} border-2 ${colorScheme.list_todo_shadow}`} >
                    {
                        todos.filter((todo) => todo.isCompleted == true)
                             .map((todo) => <TodoItemContainer todo={todo} key={todo.id}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Completati