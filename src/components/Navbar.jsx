import "../style/Navbar.css"
import { Link } from "react-router-dom"
import { FaHouse, FaStar, FaSun, FaMoon } from "react-icons/fa6"
import { useTodo } from "../hook/UseTodo"
import { ColorScheme } from "../utility/Theme"
import { BsCheckCircleFill } from "react-icons/bs";

function Navbar(){
    const { theme, changeTheme } = useTodo()
    const dropShadow = "drop-shadow-[0_0_6px_rgba(240,240,240,0.8)]"
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark

    return (
        <nav className={`${colorScheme.navbar} sidebar w-44 h-screen fixed top-0 left-0`}>
            <h1 className={`${colorScheme.h1} text-xl font-bold mt-5 mb-5`}>ToDo List</h1>
            <ul className={`${colorScheme.ul}`}>
                <Link to={"/"}><li className={`hover:${colorScheme.bg_li}`}><FaHouse className="mr-4"/>La mia giornata</li></Link>
                <Link to={"/importanti"}><li className={`hover:${colorScheme.bg_li}`}><FaStar className="mr-4"/>Importanti</li></Link>
                <Link to={"/completati"}><li className={`hover:${colorScheme.bg_li}`}><BsCheckCircleFill className="mr-4"/>Completati</li></Link>
            </ul>

            <div className="flex flex-row gap-6 justify-center mt-4">
                <button onClick={() => changeTheme("light")} className={`${colorScheme.button_text} ${theme == "light" ? dropShadow : ""} hover:drop-shadow-[0_0_6px_rgba(240,240,240,0.8)]`}><FaSun size={24}/></button>
                <button onClick={() => changeTheme("dark")} className={`${colorScheme.button_text} ${theme == "dark" ? dropShadow : ""} hover:drop-shadow-[0_0_6px_rgba(240,240,240,0.8)]`}><FaMoon size={24}/></button>
            </div>
        </nav>
    )
}

export default Navbar