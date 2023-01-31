import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/UserContext';
import OrderItem from './OrderItem';
import img from '../../assets/images/banner/3.jpg'

const Order = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    // console.log(orders)
    const deleteHandler = orderId => {
        const confirm = window.confirm("Are you sure to delete this item from order")
        if (confirm) {
            fetch(`http://localhost:5000/order/${orderId}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Order deleted successfully")
                        const remaining = orders.filter(odr => odr._id !== orderId)
                        // console.log(remainingOrders)
                        setOrders(remaining)
                    }
                    // console.log(data)
                })
        }
    }
    // console.log(orders)
    const updateHandler = (orderId) => {
        fetch(`http://localhost:5000/order/${orderId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== orderId)
                    const approving = orders.find(odr => odr._id === orderId)
                    approving.status = "Approved"
                    const newOrders = [approving, ...remaining]
                    setOrders(newOrders)
                }
            })
    }
    return (
        <div>
            <div>
                <p className='text-3xl my-3 font-semibold'>Your Orders</p>
            </div>
            <div className=''>
                <img src={img} className="w-full h-96 rounded-lg" alt='' />
            </div>
            <div>
                {
                    orders.length > 0
                        ?
                        <div className="my-32 overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            {/* <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label> */}
                                        </th>
                                        <th className='p-6'>Service</th>
                                        <th className='p-4'>Price</th>
                                        <th className='p-4'>Phone</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        orders.map(item => <OrderItem
                                            key={item._id}
                                            item={item}
                                            deleteHandler={deleteHandler}
                                            updateHandler={updateHandler}
                                        ></OrderItem>)
                                    }

                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            <p className='text-red-500 text-2xl my-32 font-semibold text-center'>No order to show</p>
                        </div>

                }
            </div>
        </div>
    );
};

export default Order;