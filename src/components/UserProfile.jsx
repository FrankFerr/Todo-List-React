import { ColorScheme } from "../utility/Theme"
import { useTodo } from "../hook/UseTodo"
import { useEffect, useState } from "react"
import { fetchUserData } from "../utility/FetchUser"

function UserProfile({ userId }){
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark
    const [userData, setUserData] = useState({})
    
    useEffect(() => {
        fetchUserData(userId).then((data) => setUserData(data))
    }, [userId])

    return (
        <div className={`h-full overflow-y-auto mb-4 rounded-2xl ${colorScheme.list_todo_border} border-2 ${colorScheme.list_todo_shadow}`}>
            {userData.name}<br />
            {userData.username}<br />
            {userData.email}<br />
        </div>
    )
}

export default UserProfile