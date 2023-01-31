import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderItem = ({ item, deleteHandler, updateHandler }) => {
    const { _id, serviceId, phone, status } = item

    const [details, setDetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [serviceId])
    const { img, price, title } = details;
    // console.log(serviceId)
    return (
        <tr>
            <th>

                <button onClick={() => deleteHandler(_id)} className="btn btn-circle btn-outline text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}

            </td>
            <td>{phone}</td>
            <th>
                <button onClick={() => updateHandler(_id)} className="btn btn-ghost btn-xs text-red-500">
                    {
                        status ? status : "Pending"
                    }

                </button>
            </th>
        </tr>
    );
};

export default OrderItem;