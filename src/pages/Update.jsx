import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const review = useLoaderData();

    const [reviews, setReview] = useState(review)



    const reviewHandler = event => {
        event.preventDefault();
        // console.log(reviews);
        fetch(`http://localhost:5000/review/${review._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully', {
                        position: "top-center",
                    })
                    console.log(data);
                    event.target.reset();
                }

            })
    }
    const handleInputBlur = event => {
        const field = event.target.name
        const value = event.target.value
        const newReview = { ...reviews }
        newReview[field] = value
        setReview(newReview)

    }


    return (
        <div>
            <div className="container flex flex-col w-full max-auto p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-100 dark:text-gray-100 mb-5 max-w-[1440px] mx-auto ">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center text-black">Update Your valueable matters "{review?.review}"!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center text-black">please update the comment section.</span>
                    </div>
                    <div className="flex flex-col w-full">
                        <form onSubmit={reviewHandler}>
                            <textarea onChange={handleInputBlur} defaultValue={review?.review} name="review" className="textarea mt-5 w-full textarea-bordered text-black" placeholder="Your feedback" required></textarea>
                            <input type="submit" className='btn btn-success' value="Please Update Your review here" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;