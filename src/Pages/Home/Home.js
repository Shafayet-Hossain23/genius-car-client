import React from 'react';

import About from './About/About';
import Banner from './Banner/Banner';
import ServicesArea from './ServicesHome/ServicesArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServicesArea></ServicesArea>
        </div>
    );
};

export default Home;