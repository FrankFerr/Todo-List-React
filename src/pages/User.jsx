import Navbar from "../components/Navbar"
import { ColorScheme } from "../utility/Theme"
import { useTodo } from "../hook/UseTodo"
import { useParams } from "react-router-dom"
import UserProfile from "../components/UserProfile"

function User(){
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark
    const { userId } = useParams()
    
    return (
        <>
            <Navbar></Navbar>
            <h1 className={`${colorScheme.h1} text-4xl font-bold mb-4 text-left`}>Il mio profilo</h1>
            <hr className={`${colorScheme.hr} mb-4`}/>

            <UserProfile userId={userId}></UserProfile>
        </>
    )
}

export default User