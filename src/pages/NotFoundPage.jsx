import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <FaExclamationTriangle size={64} className="text-red-500 animate-bounce" />
        </div>
        
        <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">
          404
        </h1>
        
        <div className="bg-green-700 text-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>

        <h2 className="mt-8 text-3xl font-bold text-gray-800 md:text-4xl">
          Oops! You've wandered off the map.
        </h2>
        
        <p className="mt-4 text-gray-600 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist 
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base 
            font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-600 
            transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NotFoundPage;