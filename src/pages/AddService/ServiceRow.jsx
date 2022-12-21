import React, { useEffect, useState } from 'react';

const ServiceRow = ({ order, handleDelete, handleUpdate }) => {
    const { serviceName, customer, feedback, price, phone, service, _id, status } = order;
    const [orderService, setOrderservice] = useState({})
    useEffect(() => {
        fetch(`https://service-review-server-nine.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderservice(data))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService?.img} alt="" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{feedback}</td>
            <th>
                <button
                    onClick={() => handleUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : "pending"}</button>
            </th>
        </tr>
    );
};

export default ServiceRow;