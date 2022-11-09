import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Addservice = () => {
    const { title } = useLoaderData()
    return (
        <div>
            <h1>This is add service{title}</h1>
        </div>
    );
};

export default Addservice;