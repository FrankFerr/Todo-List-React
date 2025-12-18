import { useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { completed, important, onDelete } from "../redux/TodoSlice"

function TodoItemContainer({ todo }){
    const [todoItem, setTodo] = useState(todo)
    const dispatch = useDispatch()

    const onCompleted = () => {
        dispatch(completed(todoItem.id))

        setTodo({...todoItem, isCompleted: !todoItem.isCompleted})
    }

    const onImportant = () => {
        dispatch(important(todoItem.id))

        setTodo({...todoItem, isImportant: !todoItem.isImportant})
    }

    const onDeleteTodo = () => {
        dispatch(onDelete(todoItem.id))
    }

    return <TodoItem 
                isCompleted={todoItem.isCompleted}
                isImportant={todoItem.isImportant}
                onCompleted={onCompleted}
                onImportant={onImportant}
                onDelete={onDeleteTodo}
           >{todoItem.text}</TodoItem>
}

export default TodoItemContainer