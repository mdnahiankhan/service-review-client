import React, { useEffect, useState } from 'react';
import Servicecard from './Servicecard';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl text-violet-400 font-bold '>Our Services</h1>
                <p>We have best proffessional wedding photographer services who help you successfully meet your project planning goals and deadline.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
                {
                    services.map(service => <Servicecard
                        key={service._id}
                        service={service}
                    ></Servicecard>)
                }
            </div>
        </div>
    );
};

export default Services;