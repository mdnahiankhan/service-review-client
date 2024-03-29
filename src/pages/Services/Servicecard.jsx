import React from 'react';
import { Link } from 'react-router-dom';

const Servicecard = ({ service }) => {
    const { img, title, description, _id } = service;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-lg  dark:text-gray-50">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide text-violet-600">{title}</h2>
            </div>
            <p className="text-orange-600 font-bold">{description}</p>
            <Link to={`/addService/${_id}`}><button className="btn btn-active btn-primary">Book Now</button></Link>
        </div>
    );
};

export default Servicecard;