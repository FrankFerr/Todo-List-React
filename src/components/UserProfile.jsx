import { ColorScheme } from "../utility/Theme"
import { useTodo } from "../hook/UseTodo"

function UserProfile({ user }){
    const { theme } = useTodo()
    const colorScheme = theme == "light" ? ColorScheme.light : ColorScheme.dark
    
    return (
        <>
            <div className="w-full py-5 grid grid-cols-2 gap-y-4">
                <div className="col-span-2">
                    <label className={colorScheme.text} htmlFor="name">Name</label><br/>
                    <input name="name" className={`p-2 w-2/5 ${colorScheme.bg_input} ${colorScheme.text} rounded-md border-2 ${colorScheme.border_input}`} type="text" value={user.name} readOnly></input>
                </div>
                <div>
                    <label className={colorScheme.text} htmlFor="username">Username</label><br/>
                    <input name="username" className={`p-2 w-3/4 ${colorScheme.bg_input} ${colorScheme.text} rounded-md border-2 ${colorScheme.border_input}`} type="text" value={user.username} readOnly></input>
                </div>
                <div>
                    <label className={colorScheme.text} htmlFor="email">Email</label><br/>
                    <input name="email" className={`p-2 w-3/4 ${colorScheme.bg_input} ${colorScheme.text} rounded-md border-2 ${colorScheme.border_input}`} type="text" value={user.email} readOnly></input>
                </div>
            </div>
        </>
    )
}

export default UserProfile