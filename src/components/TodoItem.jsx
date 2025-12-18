import { BsCircle, BsFillTrashFill, BsStar, BsCheckCircleFill, BsStarFill } from "react-icons/bs";
import { useTodo } from "../hook/UseTodo"
import { ColorScheme } from "../utility/Theme"

function TodoItem({ isCompleted, isImportant, onCompleted, onImportant, onDelete, children }){
    const circle = isCompleted ? <BsCheckCircleFill size={20}/> : <BsCircle size={20}/>
    const star = isImportant ? <BsStarFill size={24}  className="mr-8"/> : <BsStar size={24} className="mr-8"/>
    const lineThrough = isCompleted ? "line-through" : ""
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark

    return(
        <div className={`${colorScheme.bg_item} flex items-center p-4 rounded-md`}>
            <button className={`${colorScheme.button_text}`} onClick={onCompleted}>{circle}</button>
            <p className={`${colorScheme.text} text-left ml-4 w-full ${lineThrough}`}>{children}</p>
            <button className={`${colorScheme.button_text}`} onClick={onImportant}>{star}</button>
            <button className={`${colorScheme.button_text}`} onClick={onDelete}><BsFillTrashFill size={24} /></button>
        </div>
    )
}

export default TodoItem