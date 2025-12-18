import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import { ColorScheme } from "../utility/Theme";

export function TodoProvider({ children }){
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        document.body.style.backgroundColor = theme == "dark" ? ColorScheme.dark.body : ColorScheme.light.body
    }, [theme])

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
    }

    return (
        <TodoContext.Provider value={{ theme, changeTheme }}>
            {children}
        </TodoContext.Provider>
    )
}