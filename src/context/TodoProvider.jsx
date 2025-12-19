import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import { ColorScheme } from "../utility/Theme";
import { useSelector } from "react-redux";

export function TodoProvider({ children }){
    const [theme, setTheme] = useState("dark")
    const [isWelcomeModalOpen, setWelcomeModalOpen] = useState(true)
    const [isTodoModalOpen, setTodoModalOpen] = useState(false)
    const countTodo = useSelector((state) => state.todos.value.length)
    const userId = 1
    
    const onCloseWelcomeModal = () => {
        setWelcomeModalOpen(false)
    }

    const closeTodoModal = () => {
        setTodoModalOpen(false)
    }

    const openTodoModal = () => {
        setTodoModalOpen(true)
    }
    
    const isOnLimit = () => {
        return countTodo == 5
    }

    useEffect(() => {
        document.body.style.backgroundColor = theme == "dark" ? ColorScheme.dark.body : ColorScheme.light.body
    }, [theme])

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
    }

    return (
        <TodoContext.Provider 
            value={{ 
                theme, 
                changeTheme, 
                isWelcomeModalOpen, 
                onCloseWelcomeModal,
                closeTodoModal,
                openTodoModal,
                isTodoModalOpen,
                isOnLimit,
                userId
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}