import React, { useState } from "react";
import { Search } from "lucide-react";
import useNormalAxios from "../hooks/useNormalAxios";


const SearchBar = ({ placeholder = "Search...",setCard }) => {
    const [query, setQuery] = useState("");
    const [load,setLoad]=useState(false)
    const instance = useNormalAxios();
    const handleSubmit = (e) => {
        setLoad(true)
        e.preventDefault();
        if(!query) return setLoad(false)
        instance.get(`/search?search=${query}`)
            .then(res => {
                setCard(res.data)
                setLoad(false)
                
            })

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-md border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm"
        >
            {/* Icon */}
            <div className="pl-3 text-gray-400">
                <Search size={18} />
            </div>

            {/* Input */}
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
            />

            {/* Button (submits form) */}
            <button
                type="submit"
                className="bg-sky-500 text-white px-5 py-2 font-medium hover:bg-sky-900 transition-all duration-300 cursor-pointer "
            >{
                load?"searching...":"search"
            }
                
            </button>
        </form>
    );
};

export default SearchBar;



