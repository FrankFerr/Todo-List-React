export const saveState = (value, key) => {
    try{
        const serilizedState = JSON.stringify(value)
        localStorage.setItem(key, serilizedState)
    }
    catch (err){
        console.error("Errore durante il salvataggio dello stato", err)
    }
}

export const loadState = (key) => {
    try{
        const serilizedState = localStorage.getItem(key)

        if(serilizedState === null || serilizedState === undefined){
            return undefined
        }

        return JSON.parse(serilizedState)
    }
    catch(err){
        console.error("Errore durante il caricamento dello stato", err)
        return undefined
    }
}