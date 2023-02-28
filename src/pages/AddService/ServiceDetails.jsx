import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import photo from "../../assets/banner/img-5.jpg"

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { title, price, _id } = useLoaderData();
    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const phone = user?.phone || 'unregistered';
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
        fetch('https://service-review-server-mdnahiankhan.vercel.app/orders', {
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

                    toast.success('Order places successfully', {
                        position: "top-center",
                    })
                    form.reset()
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <section className=" dark:text-gray-100 mt-4">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:text-gray-900">
                        <div className="flex space-x-2 sm:space-x-4">

                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Take Your moments in same time.</p>
                                <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">

                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 ">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={photo} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
            <form className='mt-5 mb-5' onSubmit={handlePlaceOrder}>
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