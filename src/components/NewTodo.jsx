import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useTodo } from "../hook/UseTodo"
import { ColorScheme } from "../utility/Theme"

function NewTodo({ onAdd }){
    const [todoText, setTodoText] = useState("")
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark


    const addTodo = () => {
        if(todoText.trim() === "")
            return null

        onAdd(todoText)
        setTodoText("")
    }

    return(
        <>
            <div className={`${colorScheme.new_todo_bg} w-full h-40 rounded-2xl flex items-center justify-center`}>
                <textarea onChange={(e) => setTodoText(e.target.value)} value={todoText} className={`${colorScheme.new_todo_text} ${colorScheme.new_todo_bg_txt} w-4/5 h-2/3 resize-none rounded-2xl p-3 border ${colorScheme.new_todo_border} focus:outline-none focus:ring-2 focus:${colorScheme.new_todo_ring}`} placeholder="Cosa devi fare oggi?"/>
                <button onClick={addTodo}>
                    <BsFillSendFill size={28} className="ml-4 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                </button>
            </div>
        </>
    )
}

export default NewTodo