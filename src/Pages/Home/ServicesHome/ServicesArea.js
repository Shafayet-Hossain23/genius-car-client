import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartItem from './CartItem';

const ServicesArea = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    // console.log(services)
    return (
        <div className='mb-14'>
            <div className='text-center'>
                <p className='text-red-500 font-semibold text-2xl'>Services</p>
                <p className='py-2 font-bold text-4xl'>Our Service Area</p>
                <p className='pb-8'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <CartItem
                        key={service._id}
                        service={service}
                    ></CartItem>)
                }
            </div>

        </div>
    );
};

export default ServicesArea;