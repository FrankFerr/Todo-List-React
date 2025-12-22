import Navbar from "../components/Navbar"
import { ColorScheme } from "../utility/Theme"
import { useTodo } from "../hook/UseTodo"
import UserProfile from "../components/UserProfile"
import { fetchAllUser, fetchUserData } from "../utility/FetchUser"
import { useEffect, useState } from "react"

function User(){
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark
    const [userId, setUserId] = useState(0)
    const [userData, setUserData] = useState({})
    const [userList, setUserList] = useState([])
    const [userSelect, setUserSelect] = useState(0)
    
    useEffect(() => {
        fetchAllUser().then((data) => setUserList(data))
    }, [])

    useEffect(() => {
        if(userId != 0){
            fetchUserData(userId).then((data) => setUserData(data))
        }
    }, [userId])
    
    const onSelectChange = (e) => {
        setUserSelect(e.target.value)
        setUserId(e.target.value)
    }

    return (
        <>
            <Navbar></Navbar>
            <h1 className={`${colorScheme.h1} text-4xl font-bold mb-4 text-left`}>Lista utenti</h1>
            <hr className={`${colorScheme.hr} mb-4`}/>

            <div className={`flex items-center justify-between h-full overflow-y-auto mb-4 rounded-2xl ${colorScheme.list_todo_border} border-2 ${colorScheme.list_todo_shadow}`}>
                <select className={`h-10 w-1/3 ml-4 rounded-md border-2 ${colorScheme.border_select} ${colorScheme.bg_select} ${colorScheme.text}`} value={userSelect} onChange={onSelectChange}>
                    <option  value={0}></option>
                    {
                        userList.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
                <UserProfile user={userData}></UserProfile>
            </div>
        </>
    )
}

export default User