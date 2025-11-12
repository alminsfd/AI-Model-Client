import React, { useEffect, useState } from 'react';
import useNormalAxios from '../hooks/useNormalAxios';
import Card from '../components/Card';
import Loader from '../features/Loader';
import SearchBar from '../components/Searchbar';



const Viewmodels = () => {

    const [cards, setCard] = useState([])
    const instance = useNormalAxios()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        instance.get('/allmodels')
            .then(data => {
                setCard(data.data)
            })
            .catch(err => console.error(err))
            .finally(() => setLoad(false));
    }, [])


    if(load){
        return <Loader></Loader>
    }

    return (
        <div>
           <div className='flex items-center justify-center mt-10' >
             <SearchBar setCard={setCard} ></SearchBar>
           </div>
            <Card cards={cards} ></Card>
        </div>
    );
};

export default Viewmodels;