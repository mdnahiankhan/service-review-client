import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { title, price, _id } = useLoaderData();
    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const phone = user?.email || 'unregistered';
        const email = form.email.value;
        const feedback = form.feedback.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            feedback
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // alert('Order placed successfully')
                    toast.success('Order places successfully', {
                        position: "top-center",
                    })
                    form.reset()
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'> Your ordered is{title}</h2>
                <h4>You have to pay: {price}$</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name="firstname" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="lastname" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your phone" className="input input-bordered w-full" required />
                    <input name="email" type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name="feedback" className="textarea mt-5 w-full textarea-bordered" placeholder="Your feedback"></textarea>
                <input type="submit" className='btn btn-success' value="place your order" />
            </form>
        </div>
    );
};

export default ServiceDetails;