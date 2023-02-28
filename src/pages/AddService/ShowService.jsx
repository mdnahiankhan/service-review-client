
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceRow from './ServiceRow';

const ShowService = () => {
    const { user } = useContext(AuthContext);
    const [orders, setorders] = useState([])
    useEffect(() => {
        fetch(`https://service-review-server-mdnahiankhan.vercel.app/orders?email=${user?.email}`, {
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setorders(data))
            .catch(error => { console.log(error); })
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to cancel this order')
        if (proceed) {
            fetch(`https://service-review-server-mdnahiankhan.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.warning('Deleted Successfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setorders(remaining);
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`https://service-review-server-mdnahiankhan.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order !== id);
                    const approved = orders.find(order => order._id === id);
                    approved.status = 'Approved';
                    const newOrders = [approved, ...remaining];
                    setorders(newOrders)
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">You have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>

                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Review</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <ServiceRow
                                key={order?._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></ServiceRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ShowService;