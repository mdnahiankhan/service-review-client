import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ShowReview = ({ rev, handleDelete }) => {
    const { _id } = rev;
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div key={rev?._id} className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-auto dark:bg-gray-200 dark:text-gray-100 divide-gray-700 mb-4 items-center">
                <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
                    <span className="text-2xl text-black">{rev?.review}</span>
                    <span className="text-lg dark:text-gray-900">
                        {rev?.review && user?.email}
                    </span>
                </div>
                <button className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-900 dark:border-gray-700">Edit</button>
                <button onClick={() => handleDelete(_id)} className='px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-900 dark:border-gray-700'>Delete</button>
            </div>
        </div>
    );
};

export default ShowReview;