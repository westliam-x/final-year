import { useState } from "react";
import Nav from "../shared/Navigation";
import { Navigate } from "react-router-dom";

const OTP = () => {
    const [success, setSuccess] = useState(false)
    const [userId, setUserId] = useState("");

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleSubmit = () => {
        setSuccess(true)
    };
    if (success){
        return <Navigate replace to="/hospital/records/1"/>
    }
    return (
        <div className="flex h-screen">
            <Nav />
            <div className="flex-1 p-6 bg-gray-100 overflow-auto mt-5 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Enter otp:</h2>
                    <input
                        type="text"
                        value={userId}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        placeholder="OTP"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTP;
