import React, { useState } from "react";
import Nav from "../shared/Navigation";

const User = () => {

    const [idText, setIdText] = useState("ID: NG-1234567891");
  
    const handleCopyId = () => {
      const id = "NG-1234567891";
      navigator.clipboard.writeText(id).then(() => {
        setIdText("Copied!");
        setTimeout(() => {
          setIdText("ID: NG-1234567891");
        }, 2000); // Reset after 2 seconds
      }).catch(() => {
        setTimeout(() => setCopyStatus(""), 2000);
      });
    };
  

  return (
    <div className="flex h-screen">
      <Nav />
      <div className="flex-1 p-6 bg-gray-100 overflow-auto mt-5">
        <h2 className="text-3xl font-bold mb-4">Welcome back, William</h2>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <img
              src="/jpeg/west.jpg"
              alt="Profile"
              className="md:w-96 md:h-96 w-36 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center">William Emelifonwu</h3>
            <h3 
              className="text-lg font-bold text-center cursor-pointer text-blue-500"
              onClick={handleCopyId}
            >
              {idText}
            </h3>
         <p className="text-center text-gray-600 mb-4">west@gmail.com</p>
            <p className="text-center text-gray-600"><strong><a href="#">View Full Profile</a></strong></p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Citizen Ids</h3>
            <p><strong>BVN:</strong> 009309209</p>
            <p><strong>NIN:</strong> 2093092093</p>
            <p> <strong>ALL iDS:</strong> <a href="#"> Summary</a></p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Financial Institutions</h3>
            <p><strong>Bank Name:</strong> United BANK oF Nigeria</p>
            <p><strong>Account Number:</strong>0923887292</p>
            <p><strong>View More:</strong><a href="#"> All Financial Details</a></p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Current Institution Records</h3>
            <p><strong>Institution Name:</strong><a href="#"> Babcock University</a></p>
            <p><strong>Course:</strong> Software Engineering</p>
            <p><strong>Current Level:</strong> 400</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Actionable Items</h3>
            <p><strong><a href="#">New Approval Request</a></strong></p>
            <p><strong><a href="#">Complete Hospital Records</a></strong></p>
            <p><strong><a href="#">Complete Financial Records</a></strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
