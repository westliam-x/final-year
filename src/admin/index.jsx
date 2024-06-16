import React, { useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import ErrorBoundary from '../../errorboundary';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = () => {
        const adminUsername = 'admin';
        const adminPassword = 'admin123';

        if (username === adminUsername && password === adminPassword) {
            setError('')
            setSuccess('You have successfully Logged in')
            console.log('Admin logged in successfully');
        } else {
            setError('Invalid username or password');
        }
    };

    if (success) {
        return <Navigate replace to="/admin/home"/>
    }

    return (
        <ErrorBoundary>
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            {/* Login Form */}
            <div className="bg-white h-full md:h-screen flex justify-center items-center">
                <div className="max-w-md w-full p-10">
                    <h2 className="text-3xl mb-6 font-semibold text-center">Admin Login</h2>
                    {error && <div className="text-red-500 mb-6">{error}</div>}
                    {success && <div className="text-green-500 mb-6">{success}</div>}
                    
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-gray-700">Username:</label>
                            <input type="text" id="username" className="mt-1 form-input block w-full rounded-md border-2" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input type="password" id="password" className="mt-1 form-input block w-full rounded-md border-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Login</button>
                    </form>
                </div>
            </div>

            <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('/jpeg/secure-vault.jpeg')" }}></div>
        </div>
        </ErrorBoundary>
    );
};

export default Login;
