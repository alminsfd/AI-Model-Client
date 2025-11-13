
// right code
import React, { useEffect, useState } from "react";
import useNormalAxios from "../hooks/useNormalAxios";
import Card from "../components/Card";
import Loader from "../features/Loader";
import SearchBar from "../components/Searchbar";

const Viewmodels = () => {
    const [cards, setCard] = useState([]);
    const [frameworks, setFrameworks] = useState(["All"]); 
    const [selectedFramework, setSelectedFramework] = useState("All");
    const [load, setLoad] = useState(true);
    const instance = useNormalAxios();

    useEffect(() => {
        setLoad(true);
        instance
            .get("/allmodels")
            .then((res) => {
                const allModels = res.data;
                setCard(allModels);

                
                const uniqueFrameworks = [
                    "All",
                    ...new Set(allModels.map((model) => model.framework)),
                ];
                setFrameworks(uniqueFrameworks);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoad(false));
    }, []);

    
    const filteredCards =
        selectedFramework === "All"
            ? cards
            : cards.filter((c) => c.framework === selectedFramework);

    if (load) return <Loader />;

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-50 via-slate-100 to-slate-200 px-4 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 max-w-6xl mx-auto">
                <div className="flex-1 w-full">
                    <SearchBar setCard={setCard} />
                </div>

                <div className="relative">
                    <select
                        value={selectedFramework}
                        onChange={(e) => setSelectedFramework(e.target.value)}
                        className="w-56 sm:w-64 appearance-none bg-white/90 backdrop-blur-lg border border-gray-300 text-gray-800 text-base font-medium rounded-xl px-5 py-3 shadow-md hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300 cursor-pointer"
                    >
                        {frameworks.map((fw) => (
                            <option key={fw} value={fw}>
                                {fw}
                            </option>
                        ))}
                    </select>

                    <svg
                        className="w-5 h-5 text-gray-500 absolute right-5 top-6 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            <Card cards={filteredCards} />
        </div>
    );
};

export default Viewmodels;




