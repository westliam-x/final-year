import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorBoundary from "../../errorboundary";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegistration = () => {
    // Perform registration logic here
    if (
      firstName &&
      lastName &&
      username &&
      email &&
      password &&
      confirmPassword &&
      age &&
      sex &&
      gender
    ) {
      // Check if passwords match
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // Registration successful
      setError("");
      setSuccess("Registration successful. You can now login.");
      console.log("Registration successful:", {
        firstName,
        lastName,
        username,
        email,
        password,
        age,
        sex,
        gender,
      });
    } else {
      // Registration failed
      setError("Please fill in all fields.");
    }
  };

  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Registration Form */}
        <div className="bg-white h-full md:h-screen flex justify-center items-center overflow-auto">
          <div className="max-w-md w-full p-10">
            <h2 className="text-3xl mb-6 font-semibold text-center">
              Registration
            </h2>
            {error && <div className="text-red-500 mb-6">{error}</div>}
            {success && <div className="text-green-500 mb-6">{success}</div>}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegistration();
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 form-input block w-full rounded-md border-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 form-input block w-full rounded-md border-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 form-input block w-full rounded-md border-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 form-input block w-full rounded-md border-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="mt-1 form-input block w-full rounded-md border-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-gray-700">
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  className="mt-1 form-input block w-full rounded-md border-2"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-gray-700">
                  Gender:
                </label>
                <select
                  id="gender"
                  className="mt-1 form-select block w-full rounded-md border-2"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="termsAgreement"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <label htmlFor="termsAgreement" className="ml-2 text-gray-700">
                  I agree to the{" "}
                  <a href="/terms" className="text-blue-600">
                    Terms of Service
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        <div
          className="hidden md:block bg-cover bg-center"
          style={{ backgroundImage: "url('/jpeg/secure-vault.jpeg')" }}
        ></div>
      </div>
    </ErrorBoundary>
  );
};

export default Registration;
