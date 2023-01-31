import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ service }) => {
    const { _id, img, title, price } = service
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-56' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-red-500 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;