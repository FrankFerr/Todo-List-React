import { createPortal } from "react-dom"

function WelcomeModal({ isOpen, onClose, children }){
    if(!isOpen) return null

    return createPortal(
        <div className="bg-[rgba(0,0,0,0.5)] fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center">
            <div className="p-8 rounded-lg bg-zinc-700">
                {children}
                <button className="px-4 py-2 rounded-md mt-4 bg-gray-900" onClick={onClose}>Chiudi</button>
            </div>
        </div>
        , document.body)
}

export default WelcomeModal