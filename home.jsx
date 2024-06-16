import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex h-screen justify-center items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <Link to="/admin/" className="block">
                    <div className="bg-blue-500 p-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        <h2 className="text-2xl font-bold text-white text-center">Admin Section</h2>
                    </div>
                </Link>
                <Link to="/user/" className="block">
                    <div className="bg-green-500 p-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                        <h2 className="text-2xl font-bold text-white text-center">User Section</h2>
                    </div>
                </Link>
                <Link to="/medical/login" className="block">
                    <div className="bg-red-500 p-8 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                        <h2 className="text-2xl font-bold text-white text-center">Medical Section</h2>
                    </div>
                </Link>
                <Link to="/educational/login" className="block">
                    <div className="bg-purple-500 p-8 rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
                        <h2 className="text-2xl font-bold text-white text-center">Educational Section</h2>
                    </div>
                </Link>
                <Link to="/financial/login" className="block">
                    <div className="bg-yellow-500 p-8 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300">
                        <h2 className="text-2xl font-bold text-white text-center">Financial Section</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
