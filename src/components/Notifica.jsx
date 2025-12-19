import { useEffect, useState } from "react"
import "../style/Notifica.css"

function Notifica({ durata = 3000, onClose, children }){
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
        <div className={`notifica ${visibile ? "show" : ""}`}>
            {children}
        </div>
    )
}

export default Notifica