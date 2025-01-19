import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const getNavLinks = () => {
        if (location.pathname.includes('user')) {
            return (
                <ul className="space-y-10 mt-20">
                    <li>
                        <Link to="/user/home" className="block p-2 rounded hover:bg-gray-700">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className="block p-2 rounded hover:bg-gray-700">
                            Medical details
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className="block p-2 rounded hover:bg-gray-700">
                            Financial Institutions
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/pending" className="block p-2 rounded hover:bg-gray-700">
                            Educational Institutions
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/pending" className="block p-2 rounded hover:bg-gray-700">
                            Pending Approvals
                        </Link>
                    </li>
                </ul>
            );
        } else if (location.pathname.includes('financial')) {
            return (
                <ul className="space-y-10 mt-20">
                    <li>
                        <Link to="/admin/finance" className="block p-2 rounded hover:bg-gray-700">
                            Financial Overview
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/transactions" className="block p-2 rounded hover:bg-gray-700">
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/reports" className="block p-2 rounded hover:bg-gray-700">
                            Financial Reports
                        </Link>
                    </li>
                </ul>
            );
        } else if (location.pathname.includes('learning')) {
            return (
                <ul className="space-y-10 mt-20">
                    <li>
                        <Link to="/admin/courses" className="block p-2 rounded hover:bg-gray-700">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/webinars" className="block p-2 rounded hover:bg-gray-700">
                            Webinars
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/resources" className="block p-2 rounded hover:bg-gray-700">
                            Learning Resources
                        </Link>
                    </li>
                </ul>
            );
        } else if (location.pathname.includes('admin')) {
            return (
                <ul className="space-y-10 mt-20">
                <li>
                    <Link to="/admin/home" className="block p-2 rounded hover:bg-gray-700">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/admin/users" className="block p-2 rounded hover:bg-gray-700">
                        Users List
                    </Link>
                </li>
                <li>
                    <Link to="/admin/pending" className="block p-2 rounded hover:bg-gray-700">
                        Pending Lists
                    </Link>
                </li>
                <li>
                    <Link to="/admin/medical" className="block p-2 rounded hover:bg-gray-700">
                        Medical Records
                    </Link>
                </li>
                <li>
                    <Link to="/admin/finance" className="block p-2 rounded hover:bg-gray-700">
                        Financial Records
                    </Link>
                </li>
                <li>
                    <Link to="/admin/education" className="block p-2 rounded hover:bg-gray-700">
                        Education Records
                    </Link>
                </li>
            </ul>
            );
        } else {
            return (
                <ul className="space-y-10 mt-20">
                    <li>
                        <Link to="/hospital" className="block p-2 rounded hover:bg-gray-700">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/hospital/records" className="block p-2 rounded hover:bg-gray-700">
                            Medical Records
                        </Link>
                    </li>
                </ul>
            );
        }
    };

    return (
        <div>
            <div className="md:hidden">
                <button onClick={toggleSidebar} className="p-4">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`fixed inset-y-0 left-0 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 h-screen p-6 z-20`}
            >
                <button
                    onClick={toggleSidebar}
                    className="md:hidden absolute top-4 right-4 text-white"
                >
                    <svg
                        className="w-6 h-6"
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
                <h2 className="justify-center font-semibold text-3xl p-2">S.D.V</h2>
                {getNavLinks()}
            </div>

            {/* Overlay for Mobile View */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Nav;
