import React from 'react';

const Blog = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 mt-5">
                <div className="mt-3">
                    <h1 rel="noopener noreferrer" href="#" className="text-2xl font-bold bg-white text-black text-center rounded-md">Difference between SQL and NoSQL</h1>
                    <p className="mt-2 bg-white text-black rounded-md p-4">*SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). *NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 mt-5">
                <div className="mt-3">
                    <h1 rel="noopener noreferrer" href="#" className="text-2xl font-bold bg-white text-black text-center rounded-md">What is JWT, and how does it work?</h1>
                    <p className="mt-2 bg-white text-black rounded-md p-4">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 mt-5">
                <div className="mt-3">
                    <h1 rel="noopener noreferrer" href="#" className="text-2xl font-bold bg-white text-black text-center rounded-md">What is the difference between javascript and NodeJS?</h1>
                    <p className="mt-2 bg-white text-black rounded-md p-4">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 mt-5">
                <div className="mt-3">
                    <h1 rel="noopener noreferrer" href="#" className="text-2xl font-bold bg-white text-black text-center rounded-md">How does NodeJS handle multiple requests at the same time?</h1>
                    <p className="mt-2 bg-white text-black rounded-md p-4"> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;