// src/pages/BusinessProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../shared/Navigation';

const businessData = {
  1: { 
    name: 'Business One', 
    sector: 'Healthcare', 
    founded: '2010', 
    ceo: 'John Doe', 
    address: ' 28 southpoint avenue, mississippi road off mehn crazy stuff are happening',
    website: 'https://businessone.com', 
    documents: ['Business Registration', 'Operating License', 'Verified Facility Inspection', 'Environmental Compliance', 'Staffing Requirements'],
    profile: 'Profile details for Business One'
  },
  2: { 
    name: 'Business Two', 
    sector: 'Finance', 
    founded: '2008', 
    ceo: 'Jane Smith', 
    address: ' 28 southpoint avenue, mississippi road off mehn crazy stuff are happening',
    website: 'https://businesstwo.com', 
    documents: ['Business Registration', 'Operating License', 'Financial Compliance', 'Regulatory Approval'],
    profile: 'Profile details for Business Two'
  },
  3: { 
    name: 'Business Three', 
    sector: 'Education', 
    founded: '2015', 
    ceo: 'Alice Johnson', 
    address: ' 28 southpoint avenue, mississippi road off mehn crazy stuff are happening',
    website: 'https://businessthree.com', 
    documents: ['Business Registration', 'Operating License', 'Accreditation', 'Curriculum Approval', 'Facility Inspection'],
    profile: 'Profile details for Business Three'
  },
};

const BusinessProfile = () => {
  const { id } = useParams();
  const business = businessData[id];

  if (!business) {
    return <div className="flex items-center justify-center h-screen text-red-500">Business not found</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Nav />
      <div className="flex-1 p-8 overflow-auto ml-20">
        <h2 className="text-3xl font-bold mb-6">{business.name} - {business.sector}</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">About the Company</h3>
            <p><strong>Founded:</strong> {business.founded}</p>
            <p><strong>CEO:</strong> {business.ceo}</p>
            <p><strong>Address:</strong> {business.address}</p>
            {business.website && (
              <p><strong>Website:</strong> <a href={business.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{business.website}</a></p>
            )}
            <p><strong>Profile:</strong> {business.profile}</p>
          </div>
          {/* Documents Uploaded Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Documents Uploaded</h3>
            <ul className="list-disc list-inside">
              {business.documents.map((doc, index) => (
                <li key={index} className="py-1">{doc}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a href="#" className="text-blue-600 hover:underline">Download Documents</a>
            </div>
          </div>
          {/* Additional Sections for Healthcare */}
          {business.sector === 'Healthcare' && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Healthcare Specific Information</h3>
              <p><strong>Facility Inspections:</strong> Details about facility inspections...</p>
              <p><strong>Staffing Requirements:</strong> Details about staffing requirements...</p>
            </div>
          )}
          {/* Additional Sections for Finance */}
          {business.sector === 'Finance' && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Finance Specific Information</h3>
              <p><strong>Financial Compliance:</strong> Details about financial compliance...</p>
              <p><strong>Regulatory Approval:</strong> Details about regulatory approval...</p>
            </div>
          )}
          {/* Additional Sections for Education */}
          {business.sector === 'Education' && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Education Specific Information</h3>
              <p><strong>Accreditation:</strong> Details about accreditation...</p>
              <p><strong>Curriculum Approval:</strong> Details about curriculum approval...</p>
              <p><strong>Facility Inspection:</strong> Details about facility inspection...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
