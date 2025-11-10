import React from 'react';
import { Link } from 'react-router';

const Getstarted = () => {
    return (
        <div>
            <section className="bg-linear-to-r from-cyan-100 via-sky-100 to-cyan-200 py-20 px-6 text-center mt-15 ">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-cyan-800 mb-4">
                        Get Started with AI Model Manager
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Join now to explore, add, and manage AI models effortlessly.
                        Start your machine learning journey today and make your ideas intelligent!
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link
                            to="/register"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            Register
                        </Link>
                        <Link
                            to="/login"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Getstarted;