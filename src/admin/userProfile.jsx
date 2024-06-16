import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../shared/Navigation';

const userData = {
  1: { 
    name: 'User One',
    gender: 'Male',
    age: 35,
    fullName: {
      firstName: 'John',
      middleName: 'Michael',
      lastName: 'Doe',
      otherNames: 'Johnny',
    },
    contactInformation: {
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      postal: '10001',
      country: 'USA',
    },
    dob: {
      day: 15,
      month: 'June',
      year: 1989,
    },
    idNumbers: {
      nin: '123456789',
      bvn: '987654321',
      passport: 'A12345678',
    },
    occupation: {
      jobTitle: 'Software Engineer',
      employer: 'Tech Corp',
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Sister',
      phoneNumber: '098-765-4321',
      address: '456 Elm St, New York, NY, 10002',
    },
    medicalRecords: { hospitalName: 'Hospital One', hospitalAddress: '123 Medical Street, City', hospitalProfileLink: '/admin/pending/profile/1' },
    financialRecords: { Bank: 'First Bank', AccountNum: '0038498124', bankLink:'https://firstbank.ng' },
    educationalRecords: { schoolName: 'School One', schoolAddress: '789 Education Lane, Village', schoolProfileLink: '/admin/pending/profile/1' },
    allergies: {
      food: 'None',
      drug: 'Penicillin',
      other: 'Pollen',
    },
    chronicConditions: {
      diabetes: 'Type 2',
      hypertension: 'Yes',
      asthma: 'No',
      otherChronicIllnesses: 'None',
    },
    surgeriesHospitalizations: {
      surgeries: [],
      hospitalizations: [],
    },
    familyMedicalHistory: {
      chronicIllnesses: {
        heartDisease: 'No',
        diabetes: 'No',
        cancer: 'No',
        otherHereditaryConditions: 'None',
      },
    },
    lifestyleInformation: {
      smokingStatus: 'Former Smoker',
      alcoholConsumption: 'Occasional',
      exerciseFrequency: 'Moderate Activity',
      dietaryHabits: 'None',
    },
    insuranceInformation: {
      insuranceProvider: 'Health Insure',
      policyNumber: '12345',
      groupNumber: '6789',
      insuranceContactInformation: {
        phoneNumber: '800-123-4567',
        address: '789 Insurance Ave, City, State, 12345',
      },
    },
    physicianInformation: {
      primaryCarePhysician: {
        name: 'Dr. Smith',
        phoneNumber: '123-456-7890',
        address: '123 Main St, New York, NY, 10001',
      },
      specialists: [],
    },
  },
  2: { 
    name: 'User Two', 
    gender: 'Female',
    age: 28,
    fullName: {
      firstName: 'Jane',
      middleName: 'Elizabeth',
      lastName: 'Smith',
      otherNames: 'Janie',
    },
    contactInformation: {
      email: 'jane.smith@example.com',
      phoneNumber: '234-567-8901',
    },
    address: {
      street: '234 Main St',
      city: 'Los Angeles',
      state: 'CA',
      postal: '90001',
      country: 'USA',
    },
    dob: {
      day: 22,
      month: 'March',
      year: 1995,
    },
    idNumbers: {
      nin: '234567890',
      bvn: '876543210',
      passport: 'B23456789',
    },
    occupation: {
      jobTitle: 'Marketing Manager',
      employer: 'Market Inc',
    },
    emergencyContact: {
      name: 'John Smith',
      relationship: 'Brother',
      phoneNumber: '123-456-7890',
      address: '123 Main St, Los Angeles, CA, 90002',
    },
    medicalRecords: { hospitalName: 'Hospital Two', hospitalAddress: '234 Medical Road, Town', hospitalProfileLink: '/admin/pending/profile/2' },
    financialRecords: { Bank: 'First Bank', AccountNum: '0038498124', bankLink:'https://firstbank.ng' },
    educationalRecords: { schoolName: 'School Two', schoolAddress: '890 Education Avenue, Village', schoolProfileLink: '/admin/pending/profile/2' },
    allergies: {
      food: 'None',
      drug: 'Aspirin',
      other: 'Pollen',
    },
    chronicConditions: {
      diabetes: 'Type 1',
      hypertension: 'Yes',
      asthma: 'Yes',
      otherChronicIllnesses: 'None',
    },
    surgeriesHospitalizations: {
      surgeries: [],
      hospitalizations: [],
    },
    familyMedicalHistory: {
      chronicIllnesses: {
        heartDisease: 'No',
        diabetes: 'No',
        cancer: 'No',
        otherHereditaryConditions: 'None',
      },
    },
    lifestyleInformation: {
      smokingStatus: 'Never Smoked',
      alcoholConsumption: 'Occasional',
      exerciseFrequency: 'Light Activity',
      dietaryHabits: 'Vegetarian',
    },
    insuranceInformation: {
      insuranceProvider: 'Health Insure',
      policyNumber: '54321',
      groupNumber: '9876',
      insuranceContactInformation: {
        phoneNumber: '800-234-5678',
        address: '456 Insurance St, City, State, 54321',
      },
    },
    physicianInformation: {
      primaryCarePhysician: {
        name: 'Dr. Johnson',
        phoneNumber: '234-567-8901',
        address: '234 Main St, Los Angeles, CA, 90001',
      },
      specialists: [],
    },
  },
};



const UserProfile = () => {
  const { id } = useParams();
  const user = userData[id];

  if (!user) {
    return <div className="flex items-center justify-center h-screen text-red-500">User not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Nav />
      <div className="flex-1 p-4 md:p-8 overflow-auto md:ml-20">
        <h2 className="text-3xl font-bold mb-6">{user.name}'s Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <p><strong>Full Name:</strong> {user.fullName.firstName} {user.fullName.middleName} {user.fullName.lastName}</p>
            <p><strong>Other Names:</strong> {user.fullName.otherNames}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Date of Birth:</strong> {user.dob.day} {user.dob.month}, {user.dob.year}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p><strong>Email Address:</strong> {user.contactInformation.email}</p>
            <p><strong>Phone Number:</strong> {user.contactInformation.phoneNumber}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p><strong>Street Address:</strong> {user.address.street}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>State:</strong> {user.address.state}</p>
            <p><strong>Postal:</strong> {user.address.postal}</p>
            <p><strong>Country:</strong> {user.address.country}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Identification Numbers</h3>
            <p><strong>NIN:</strong> {user.idNumbers.nin}</p>
            <p><strong>BVN:</strong> {user.idNumbers.bvn}</p>
            <p><strong>Passport Number:</strong> {user.idNumbers.passport}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Occupation</h3>
            <p><strong>Job Title:</strong> {user.occupation.jobTitle}</p>
            <p><strong>Employer:</strong> {user.occupation.employer}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold mb-2">Emergency Contact Information</h3>
            <p><strong>Name:</strong> {user.emergencyContact.name}</p>
            <p><strong>Relationship:</strong> {user.emergencyContact.relationship}</p>
            <p><strong>Phone Number:</strong> {user.emergencyContact.phoneNumber}</p>
            <p><strong>Address:</strong> {user.emergencyContact.address}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
          {/* Medical Records Section */}
          {user.medicalRecords && (
  <>
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Allergies</h3>
      <p><strong>Food Allergies:</strong> {user.allergies.food}</p>
      <p><strong>Drug Allergies:</strong> {user.allergies.drug}</p>
      <p><strong>Other Allergies:</strong> {user.allergies.other}</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Current Medications</h3>
      <p><strong>Prescription Medications:</strong> {user.medicalRecords.prescriptionMedications}</p>
      <p><strong>Over-the-Counter Medications:</strong> {user.medicalRecords.otcMedications}</p>
      <p><strong>Supplements:</strong> {user.medicalRecords.supplements}</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Chronic Conditions</h3>
      <p><strong>Diabetes:</strong> {user.chronicConditions.diabetes}</p>
      <p><strong>Hypertension:</strong> {user.chronicConditions.hypertension}</p>
      <p><strong>Asthma:</strong> {user.chronicConditions.asthma}</p>
      <p><strong>Other chronic illnesses:</strong> {user.chronicConditions.otherChronicIllnesses}</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Previous Surgeries or Hospitalizations</h3>
      <p><strong>Surgeries:</strong> {user.surgeriesHospitalizations.surgeries}</p>
      <p><strong>Hospitalizations:</strong> {user.surgeriesHospitalizations.hospitalizations}</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Family Medical History</h3>
      <p><strong>Heart Disease:</strong> {user.familyMedicalHistory.chronicIllnesses.heartDisease}</p>
      <p><strong>Diabetes:</strong> {user.familyMedicalHistory.chronicIllnesses.diabetes}</p>
      <p><strong>Cancer:</strong> {user.familyMedicalHistory.chronicIllnesses.cancer}</p>
      <p><strong>Other hereditary conditions:</strong> {user.familyMedicalHistory.chronicIllnesses.otherHereditaryConditions}</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Lifestyle Information</h3>
      <p><strong>Smoking Status:</strong> {user.lifestyleInformation.smokingStatus}</p>
      <p><strong>Alcohol Consumption:</strong> {user.lifestyleInformation.alcoholConsumption}</p>
      <p><strong>Exercise Frequency:</strong> {user.lifestyleInformation.exerciseFrequency}</p>
      <p><strong>Dietary Habits:</strong> {user.lifestyleInformation.dietaryHabits}</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Insurance Information</h3>
      <p><strong>Insurance Provider:</strong> {user.insuranceInformation.provider}</p>
      <p><strong>Policy Number:</strong> {user.insuranceInformation.policyNumber}</p>
      <p><strong>Group Number:</strong> {user.insuranceInformation.insuranceContactInformation.phoneNumber}</p>
      <p><strong>Insurance Contact Information:</strong> {user.insuranceInformation.insuranceContactInformation.address}</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <h3 className="text-xl font-semibold mb-2">Physician Information</h3>
      <p><strong>Primary Care Physician:</strong> {user.physicianInformation.primaryCarePhysician.name}, {user.physicianInformation.primaryCarePhysician.contact}</p>
      {/* <p><strong>Specialists:</strong> {user.physicianInformation.specialists.map(specialist => (
        <div key={specialist.name}>
          <p>{specialist.name} - {specialist.specialty}, {specialist.contact}</p>
        </div>
      ))}</p> */}
    </div>
  </>
)}

          {/* Financial Records Section */}
          {user.financialRecords && (
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
              <h3 className="text-xl font-semibold mb-2">Financial Records</h3>
              <p><strong>Bank Name:</strong> {user.financialRecords.Bank}</p>
              <p><strong>Account Number:</strong> {user.financialRecords.AccountNum}</p>
              <p><strong>View Bank Profile:</strong> <a href={user.financialRecords.bankLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Company Profile</a></p>
            </div>
          )}

          {/* Educational Records Section */}
          {user.educationalRecords && (
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-6">
              <h3 className="text-xl font-semibold mb-2">Educational Records</h3>
              <p><strong>School Name:</strong> {user.educationalRecords.schoolName}</p>
              <p><strong>School Address:</strong> {user.educationalRecords.schoolAddress}</p>
              <p><strong>View School Profile:</strong> <a href={user.educationalRecords.schoolProfileLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">School Profile</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
