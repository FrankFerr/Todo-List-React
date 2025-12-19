import Navbar from "../components/Navbar"
import { ColorScheme } from "../utility/Theme"
import { useTodo } from "../hook/UseTodo"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchUserData } from "../utility/FetchUser"

function User(){
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark
    const { userId } = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetchUserData(userId).then((data) => setUserData(data))
    }, [userId])
    
    return (
        <>
            <Navbar></Navbar>
            <h1 className={`${colorScheme.h1} text-4xl font-bold mb-4 text-left`}>Il mio profilo</h1>
            <hr className={`${colorScheme.hr} mb-4`}/>

            <div className={`h-full overflow-y-auto mb-4 rounded-2xl ${colorScheme.list_todo_border} border-2 ${colorScheme.list_todo_shadow}`}>
                {userData.name}<br />
                {userData.username}<br />
                {userData.email}<br />
            </div>
        </>
    )
}

export default User