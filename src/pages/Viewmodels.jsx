import React, { useEffect, useState } from 'react';
import useNormalAxios from '../hooks/useNormalAxios';
import Card from '../components/Card';


const Viewmodels = () => {

    const [cards, setCard] = useState([])
    const instance = useNormalAxios()

    useEffect(() => {
        instance.get('/allmodels')
            .then(data => {
                setCard(data.data)
            })
    }, [])

 


    return (
        <div>
            <Card cards={cards} ></Card>
        </div>
    );
};

export default Viewmodels;