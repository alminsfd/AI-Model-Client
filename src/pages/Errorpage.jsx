

import React from 'react';

import error from '../assets/error-404.png';
import { Link } from 'react-router';

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <title>ai-model-manager</title>
      <img
        src={error}
        alt="404 Error"
        className="w-72 sm:w-96 mb-6 animate-bounce"
      />
      <h1 className="text-5xl font-extrabold text-gray-700 mb-2">
        Oops! This AI model doesn't exist
      </h1>
      <p className="text-lg text-gray-500 mb-6">
        The AI model you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl shadow-lg transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Errorpage;













