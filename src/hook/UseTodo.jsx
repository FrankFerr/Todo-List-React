import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodo = () => {
    const context =  useContext(TodoContext)

    if(!context)
        console.error("useTodo deve essere usato dentro TodoProvider")

    return context
}