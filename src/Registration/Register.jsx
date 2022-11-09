import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../src/assets/banner/authentication.webp'
const Register = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-400">If you don't have an account please Sign up to access Our Website</p>
                </div>
                <form className="space-y-12">
                    <div>
                        <label htmlFor="">Enter Your Name</label>
                        <input type="text" name='name' placeholder="Type here" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Img Url</label>
                        <input type="text" name='photoURL' placeholder="Enter Your ImgUrl" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Enter Your email</label>
                        <input type="text" name='email' placeholder="enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder="enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <button className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 '>Sign Up</button>

                </form>
                <p className="text-sm text-center dark:text-gray-400">Already have an account? Please
                    <Link to='/login' href="#" rel="noopener noreferrer" className="focus:underline hover:underline dark:text-violet-400"> Sign in </Link></p>
            </div>
        </div>
    );
};

export default Register;