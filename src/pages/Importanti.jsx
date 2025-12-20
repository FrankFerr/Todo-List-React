import Navbar from "../components/Navbar"
import { onAdd } from "../redux/TodoSlice"
import { useDispatch, useSelector } from "react-redux"
import TodoItemContainer from "../components/TodoItemContainer"
import NewTodo from "../components/NewTodo"
import { useTodo } from "../hook/UseTodo"
import { ColorScheme } from "../utility/Theme"
import SimpleModal from "../components/SimpleModal"
import SearchBar from "../components/SearchBar"
import { useState } from "react"

function Importanti(){
    const dispatch = useDispatch()
    const { 
        theme, 
        closeTodoModal,
        openTodoModal,
        isTodoModalOpen,
        isOnLimit 
    } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark
    const [textFilter, setTextFilter] = useState(null)
    let todos = useSelector((state) => state.todos.value)
    todos = textFilter ? todos.filter((todo) => todo.text.search(textFilter) != -1) : todos


    const addTodo = (todoText) => {
        if(isOnLimit()){
            openTodoModal()
            return null
        }

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
    
    const onSearchBarChange = (text) => {
        if(text.trim() == ""){
            setTextFilter(null)
        } else {
            setTextFilter(text)
        }
    }

    return (
        <>
            <SimpleModal isOpen={isTodoModalOpen} onClose={closeTodoModal}>
                <h1 className="text-white text-lg font-bold">Limite Todo raggiunto</h1>
                <p className="text-white">Hai raggiunto il limite di 5 todo, non puoi aggiungerne altri</p>
            </SimpleModal>
            
            <Navbar></Navbar>
            <div className="flex flex-row justify-between">
                <h1 className={`${colorScheme.h1} text-4xl font-bold mb-4 text-left`}>Importanti</h1>
                <SearchBar handleChange={onSearchBarChange}></SearchBar>
            </div>

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