export async function fetchUserData(userId){
    try{
        const api = `https://jsonplaceholder.typicode.com/users/${userId}`

        const res = await fetch(api)
        const data = await res.json()

        return data
    }
    catch(err){
        console.error("Problemi durante il caricamento dei dati dell'utente: ", err)
        return {}
    }
}