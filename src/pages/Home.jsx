// Home Page

import React from 'react';
import Slider from '../components/Slider';
import AImodels from '../components/AImodels';
import Getstarted from '../components/Getstarted';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AImodels></AImodels>
            <Getstarted></Getstarted>
        </div>
    );
};

export default Home;