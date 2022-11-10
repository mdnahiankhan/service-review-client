import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceRow from './ServiceRow';

const ShowService = () => {
    const { user } = useContext(AuthContext);
    const [orders, setorders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setorders(data))
    }, [user?.email])
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
                            ></ServiceRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ShowService;