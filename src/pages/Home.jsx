// Home Page

import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import AImodels from '../components/AImodels';
import Getstarted from '../components/Getstarted';
import useNormalAxios from '../hooks/useNormalAxios';
import HomepageCard from '../components/HomepageCard';
import Loader from '../features/Loader';



const Home = () => {
    const instance = useNormalAxios()
    const [cards, setCards] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setLoad(true)
        instance.get('/leatest/allmodel')
            .then(res => {
                setCards(res.data)
            })
            .finally(() => setLoad(false))
    }, [])
    if (load) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Slider ></Slider>
            <div>
                <h2 className='text-center text-3xl md:text-5xl font-extrabold mb-8 bg-linear-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent mt-20' >latest AI model</h2>
                <HomepageCard cards={cards} ></HomepageCard>
            </div>
            <AImodels></AImodels>
            <Getstarted></Getstarted>
        </div>
    );
};

export default Home;