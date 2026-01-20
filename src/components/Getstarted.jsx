
import React from 'react';
import { Link } from 'react-router';

const Getstarted = () => {
    return (
        <div>
            <section className="bg-linear-to-r from-cyan-100 via-sky-100 to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 text-center mt-15 transition-colors duration-500">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-cyan-800 dark:text-cyan-400 mb-4">
                        Get Started with AI Model Manager
                    </h2>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        Join now to explore, add, and manage AI models effortlessly.
                        Start your machine learning journey today and make your ideas intelligent!
                    </p>

                    <div className="flex justify-center gap-6">
                        <Link
                            to="/register"
                            className="bg-cyan-500 hover:bg-sky-700 dark:hover:bg-cyan-400 dark:bg-cyan-500  text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            Register
                        </Link>

                        <Link
                            to="/login"
                            className="bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:bg-cyan-500  text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
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




