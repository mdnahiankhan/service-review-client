import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Addservice = () => {
    const { user } = useContext(AuthContext)
    const { title, price, img, description } = useLoaderData()
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <Link rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Photography</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <p>You have to pay ${price}</p>
                        <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Link rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-400">{title}</h3>
                        </Link>
                        <p className="leading-snug dark:text-gray-400">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addservice;