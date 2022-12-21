import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Loading from './Loading';
import ShowReview from './ShowReview';


const Review = () => {
    // const [reviews, setReiview] = useState([])
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: () => fetch('http://localhost:5000/review')
            .then(res => res.json())
    })


    const reviewHandler = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        console.log(review);
        const reviews = {
            review
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Review places successfully', {
                        position: "top-center",
                    })
                    form.reset()
                    refetch();
                    return <Loading></Loading>
                }
            })
            .catch(error => console.error(error))
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete this order')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully')
                        const remaining = reviews.filter(order => order._id !== id);
                        refetch(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <div className="container flex flex-col w-full max-auto p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-100 dark:text-gray-100 mb-5 ">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center text-black">Your valueable opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center text-black">How was your experience with our team?</span>
                    </div>
                    <div className="flex flex-col w-full">
                        <form onSubmit={reviewHandler}>
                            <textarea name="review" className="textarea mt-5 w-full textarea-bordered text-black" placeholder="Your feedback"></textarea>
                            <input type="submit" className='btn btn-success' value="Please give Your review here" />
                        </form>
                    </div>
                </div>
            </div>
            {
                reviews.map(rev => <ShowReview key={rev._id}
                    rev={rev}
                    handleDelete={handleDelete}
                ></ShowReview>)
            }
        </div>
    );
};

export default Review;