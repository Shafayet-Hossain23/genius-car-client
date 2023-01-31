import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';
import './Checkout.css'

const Checkout = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const serviceData = useLoaderData()
    // console.log(serviceData)
    const { img, service_id, price, title, _id } = serviceData;

    const confirmHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const fullName = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const email = form.email.value
        const message = form.message.value
        const order = {
            serviceId: _id,
            serviceName: title,
            price,
            fullName,
            email,
            message,
            img,
            phone
        }
        // console.log(order)
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("Order Submitted Successfully. Our team will contact with you within 24 hours")
                }
            })
    }

    return (
        <div className='mb-7'>
            <div>
                <p className='text-3xl my-3 font-semibold'>Checkout</p>
            </div>
            <div className=''>
                <img src={img} className="w-full h-96 rounded-lg" alt='' />
            </div>
            <div className='text-center my-10'>
                <p className='text-3xl font-bold'>{title}</p>
                <p className='text-2xl font-semibold text-red-600'>Price: ${price}</p>
            </div>
            <div>
                <form onSubmit={confirmHandler}>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6'>
                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" required />
                        <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full " required />
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full " required />
                        <input type="email" name="email" placeholder="Eamil" className="input input-bordered w-full" defaultValue={user?.email} required />
                    </div>
                    <div className='my-5'>
                        <textarea name='message' className="textarea textarea-bordered w-full h-32" placeholder="Your Message" required></textarea>
                    </div>
                    <button className="btn btn-block hover:bg-slate-500">Order Confirm</button>
                </form>

            </div>
        </div>
    );
};

export default Checkout;