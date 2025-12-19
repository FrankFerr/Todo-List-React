import { useEffect, useState } from "react"
import "../style/Notifica.css"

function Notifica({ durata = 3000, onClose, bgColor, textColor, children }){
    const [visibile, setVisibile] = useState(false)

    useEffect(() => {
        setVisibile(true)

        const timeout = setTimeout(() => {
            setVisibile(false)
        }, durata - 400)

        const cleanup = setTimeout(onClose, durata)

        return () => {
            clearTimeout(timeout)
            clearTimeout(cleanup)
        }

    }, [durata, onClose])

    return (
        <div className={`notifica ${visibile ? "show" : ""} py-3 px-6 ${bgColor} ${textColor} fixed top-5 right-5 rounded-md`}>
            {children}
        </div>
    )
}

export default Notifica