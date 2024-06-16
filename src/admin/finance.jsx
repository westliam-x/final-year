import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../shared/Navigation';
import Modal from '../shared/Modal';

const Finance = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
    const [selectedBusiness, setSelectedBusiness] = useState(null); // State for selected business
    const [actionType, setActionType] = useState(null); // State for action type (approve or reject)

    const businesses = [
        { name: 'Business One', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Two', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Three', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Four', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Five', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Six', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Seven', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Eight', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Nine', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },
        { name: 'Business Ten', sector: 'Finance', documents: 'Financial Reports, Tax Clearance' },  
    ];

    // Function to handle action button click
    const handleActionClick = (business, type) => {
        setSelectedBusiness(business);
        setActionType(type);
        setModalOpen(true);
        };

    // Function to close the modal
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedBusiness(null);
        setActionType(null);
    };

    // Function to handle confirm action
    const handleConfirm = () => {
        // Add your logic here for handling the action based on actionType
        console.log(`${actionType} action confirmed for ${selectedBusiness.name}`);
        setModalOpen(false);
        setSelectedBusiness(null);
        setActionType(null);
    };

    return (
        <div className="flex h-screen">
            <Nav />
            <div className="flex-1 p-6 bg-gray-100 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Approved Financial Institutions</h2>
                <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Business Name</th>
                                <th className="py-2 px-4 border-b">Approved Documents</th>
                                <th className="py-2 px-4 border-b">Business Profile</th>
                                <th className="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {businesses.map((business, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-4 text-center">{business.name}</td>
                                    <td className="py-2 px-4 text-center">{business.documents}</td>
                                    <td className="py-2 px-4 text-center">
                                        <Link to={`/admin/pending/profile/${index}`} className="text-blue-600 hover:underline">
                                            View Profile
                                        </Link>
                                    </td>
                                    <td className="py-2 px-4 flex text-center justify-center space-x-2">
                                        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600" onClick={() => handleActionClick(business, 'verify')}>
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
                                        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600" onClick={() => handleActionClick(business, 'reject')}>
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
            {/* Modal */}
            
            {selectedBusiness && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirm}
                    businessName={selectedBusiness.name}
                    actionType={actionType}
                />
            )}
        </div>
    );
};

export default Finance;
