import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer';
import Header from '../SharedPages/Header';

const Main = () => {
    return (
        <div className='md:mx-32'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;