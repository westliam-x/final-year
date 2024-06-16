import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../shared/Navigation';
import Modal  from '../shared/Modal';

const Users = () => {
    const [isModalOpen, setModalOpen] = useState(false); 
    const [selectedUser, setSelectedUser] = useState(null);
    const [actionType, setActionType] = useState(null);

    const users = [
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
        { id: 'NG-1234567890', name: 'User One', medicals: 'view medical records',  finance: 'view medical records', education: 'view Institutional records'},
    ];
    

    // Function to handle action button click
    const handleActionClick = (user, type) => {
        setSelectedUser(user);
        setActionType(type);
        setModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedUser(null);
        setActionType(null);
    };

    // Function to close the success modal
    const handleCloseSuccessModal = () => {
        setSuccessModalOpen(false);
    };

    // Function to handle confirm action
    const handleConfirm = () => {
        if (actionType === 'verify') {
            // Logic for handling verify action
            console.log(`Verification confirmed for ${selectedUser.name}`);
            setSuccessModalOpen(true);
        } else {
            // Logic for handling reject action
            console.log(`Rejection confirmed for ${selectedUser.name}`);
        }
        setModalOpen(false);
        setSelectedUser(null);
        setActionType(null);
    };

    return (
        <div className="flex h-screen">
            <Nav />
            <div className="flex-1 p-6 bg-gray-100 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Add a search bar</h2>
                <h2 className="text-2xl font-bold mb-4">Available Users</h2>
                <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">User ID</th>
                                <th className="py-2 px-4 border-b">User Name</th>
                                <th className="py-2 px-4 border-b">User Profile</th>
                                <th className="py-2 px-4 border-b">view medical records</th>
                                <th className="py-2 px-4 border-b">view Financial records</th>
                                <th className="py-2 px-4 border-b">view Institutional records</th>
                                <th className="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-4 text-center">{user.id}</td>
                                    <td className="py-2 px-4 text-center">{user.name}</td>
                                    <td className="py-2 px-4 text-center ">
                                        <Link to={`/admin/pending/userprofile/${index}`} className="text-blue-600 hover:underline">
                                            View Profile
                                        </Link>
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                    <Link to={`/admin/pending/userprofile/${index}`} className="text-blue-600 hover:underline">
                                    {user.medicals}
                                        </Link>
                                        </td>
                                    <td className="py-2 px-4 text-center">
                                    <Link to={`/admin/pending/userprofile/${index}`} className="text-blue-600 hover:underline">
                                    {user.finance}
                                        </Link>
                                        </td>
                                    <td className="py-2 px-4 text-center">
                                    <Link to={`/admin/pending/userprofile/${index}`} className="text-blue-600 hover:underline">
                                    {user.education}
                                        </Link>
                                        </td>
                                    <td className="py-2 px-4 flex text-center justify-center space-x-2">
                                        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600" onClick={() => handleActionClick(user, 'verify')}>
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
                                        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600" onClick={() => handleActionClick(user, 'reject')}>
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
            {selectedUser && (
                <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirm}
                businessName={selectedUser.name}
                actionType={actionType}
            />
            )}
        </div>
    );
};

export default Users;
