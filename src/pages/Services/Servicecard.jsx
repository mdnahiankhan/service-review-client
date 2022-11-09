import React from 'react';

const Servicecard = ({ service }) => {
    const { img, price, title, description } = service;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-200 dark:text-gray-50">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">${price}</span>
                <h2 className="text-xl font-semibold tracking-wide text-violet-600">{title}</h2>
            </div>
            <p className="text-orange-600 font-bold">{description}</p>
            <button className="btn btn-active btn-primary">Add Service</button>
        </div>
    );
};

export default Servicecard;