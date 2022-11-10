import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100 mb-5">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Mohammad Limon</p>
                                <p>Chief Camera Man</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Md Golam Kibria</p>
                                <p>Visual Designer</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;