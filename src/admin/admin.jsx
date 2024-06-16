import React from 'react';
import Nav from '../shared/Navigation';

const Admin = () => {
    const businesses = [
        { name: 'Business One', sector: 'Healthcare' },
        { name: 'Business Two', sector: 'Finance' },
        { name: 'Business Three', sector: 'Education' },
        { name: 'Business Four', sector: 'Healthcare' },
    ];

    return (
        <div className="flex h-screen">
            <Nav />
            <div className="flex-1 p-6 bg-gray-100 overflow-auto mt-5">
                <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                <h2 className="text-xl mb-6">Welcome back, 'William'</h2>
                <h3 className="text-lg mb-6">Here's what you have missed so far:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                   
                <a href='/users' className=" text-xs font-bold ">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Individual Users</h2>
                        <h3 className="text-2xl font-bold py-5">100</h3>
                    </div>
                    </a>
                    <a href='/admin/pending' className=" text-xs font-bold">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Pending Verification</h2>
                        <h3 className="text-2xl font-bold py-5">100</h3>
                    </div>
                        </a>
                        
                        <a href='#' className="text-xs font-bold  ">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Number of Sectors</h2>
                        <h3 className="text-2xl font-bold py-5">5</h3>
                    </div>
                        </a>
                        
                        <a href='#' className="text-xs font-bold  ">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Number of Businesses</h2>
                        <h3 className="text-2xl font-bold py-5">100</h3>
                    </div>
                        </a>
                        <a href='/verify' className=" text-xs font-bold ">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Verified Businesses</h2>
                        <h3 className="text-2xl font-bold py-5">100</h3>
                    </div>
                        </a>
                    <a href='#' className="text-xs font-bold  ">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Active Businesses</h2>
                        <h3 className="text-2xl font-bold py-5">5</h3>
                    </div>
                        </a>
                        <a href='#' className="text-xs font-bold  "> 
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
                        <h3 className="text-2xl font-bold py-5">100</h3>
                    </div>
                        </a>
                        <a href='#' className="text-xs font-bold  ">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Number of Complaints</h2>
                        <h3 className="text-2xl font-bold py-5">100</h3>
                    </div>
                         </a>
                </div>
                <h2 className="text-2xl font-bold mb-4">Pending List</h2>
                <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Business Name</th>
                                <th className="py-2 px-4 border-b">Sector</th>
                                <th className="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {businesses.map((business, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-4 text-center">{business.name}</td>
                                    <td className="py-2 px-4 text-center">{business.sector}</td>
                                    <td className="py-2 px-4 flex text-center justify-center space-x-2">
                                        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </button>
                                        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
