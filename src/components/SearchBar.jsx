import { BsSearch } from "react-icons/bs";

function SearchBar({ handleChange }){
    return (
        <div className="flex flex-row h-8">
            <input className="rounded-md p-3" type="text" placeholder="Cerca nei todo" onChange={(e) => handleChange(e.target.value)}></input>
            <BsSearch className="-translate-x-7 translate-y-2" />
        </div>
    )
}

export default SearchBar