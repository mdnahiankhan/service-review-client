import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../src/assets/banner/authentication.webp'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password, name, photoURL)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/');
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-500 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-400">If you don't have an account please Sign up to access Our Website</p>
                </div>
                <form onSubmit={handleSignUp} className="space-y-12">
                    <div>
                        <label htmlFor="">Enter Your Name</label>
                        <input type="text" name='name' placeholder="Type here" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Img Url</label>
                        <input type="text" name='photoURL' placeholder="Enter Your ImgUrl" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Enter Your email</label>
                        <input type="text" required name='email' placeholder="enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" required name='password' placeholder="enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <button className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 '>Sign Up</button>

                </form>
                <p className="text-sm text-center dark:text-gray-400">Already have an account? Please
                    <Link to='/login' href="#" rel="noopener noreferrer" className="focus:underline hover:underline dark:text-violet-400 bg-white"> Sign in </Link></p>
            </div>
        </div>
    );
};

export default Register;