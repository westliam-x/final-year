import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, businessName, actionType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{actionType === 'verify' ? 'Verify Business' : 'Reject Verification'}</h2>
        <p className="mb-6">
          {actionType === 'verify' ? `You are about to verify ${businessName}.` : `You are about to reject the verification for ${businessName}.`}
          {' '}
          Would you like to proceed?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          {actionType === 'verify' ? (
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={onConfirm}
            >
              Confirm
            </button>
          ) : (
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={onConfirm}
            >
              Reject
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
