// import React, { useEffect, useState } from 'react';
// import useNormalAxios from '../hooks/useNormalAxios';
// import Card from '../components/Card';
// import Loader from '../features/Loader';
// import SearchBar from '../components/Searchbar';



// const Viewmodels = () => {

//     const [cards, setCard] = useState([])
//     const instance = useNormalAxios()
//     const [load, setLoad] = useState(true)

//     useEffect(() => {
//         setLoad(true)
//         instance.get('/allmodels')
//             .then(data => {
//                 setCard(data.data)
//             })
//             .catch(err => console.error(err))
//             .finally(() => setLoad(false));
//     }, [])


//     if (load) {
//         return <Loader></Loader>
//     }

//     return (
//         <div>
//             <div className='flex items-center justify-around mt-10' >
//                 <SearchBar setCard={setCard} ></SearchBar>
//                 <select defaultValue="Pick a Framework" className="select select-info">
//                     <option disabled={true}>Pick a Framework</option>
//                     <option>React</option>
//                     <option>Vue</option>
//                     <option>Angular</option>
//                 </select>
//             </div>
//             <Card cards={cards} ></Card>
//         </div>
//     );
// };

// export default Viewmodels;


import React, { useEffect, useState } from "react";
import useNormalAxios from "../hooks/useNormalAxios";
import Card from "../components/Card";
import Loader from "../features/Loader";
import SearchBar from "../components/Searchbar";

const Viewmodels = () => {
    const [cards, setCard] = useState([]);
    const instance = useNormalAxios();
    const [load, setLoad] = useState(true);
    const [framework, setFramework] = useState("All");

    useEffect(() => {
        setLoad(true);
        instance
            .get("/allmodels")
            .then((data) => {
                setCard(data.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoad(false));
    }, []);

    if (load) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-50 via-slate-100 to-slate-200 px-4 py-10">
            {/* Header + Filter Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 max-w-6xl mx-auto">
                {/* Search bar */}
                <div className="flex-1 w-full">
                    <SearchBar setCard={setCard} />
                </div>

                {/* Filter dropdown */}
                <div className="relative">
                    <label className="text-gray-700 font-medium block mb-2 text-center sm:text-left">
                    </label>
                    <select
                        value={framework}
                        onChange={(e) => setFramework(e.target.value)}
                        className="w-56 sm:w-64 appearance-none bg-white/90 backdrop-blur-lg border border-gray-300 text-gray-800 text-base font-medium rounded-xl px-5 py-3 shadow-md hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300 cursor-pointer"
                    >
                        <option value="All">All Frameworks</option>
                        <option value="TensorFlow">TensorFlow</option>
                        <option value="PyTorch">PyTorch</option>
                        <option value="Scikit-learn">Scikit-learn</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>

                    {/* Custom dropdown arrow */}
                    <svg
                        className="w-5 h-5 text-gray-500 absolute right-5 
                        top-6        pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Cards */}
            <Card cards={cards} />
        </div>
    );
};

export default Viewmodels;



