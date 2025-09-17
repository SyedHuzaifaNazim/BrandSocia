'use client'
import React, { useEffect } from 'react';

export const SummaryModal = ({ isOpen, onClose, projectData }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Project Summary</h2>
          <button className="text-gray-500 hover:text-gray-700 text-2xl font-bold" onClick={onClose}>×</button>
        </div>
        
        <div className="px-6 py-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-1/3 font-medium text-gray-600">Project Name:</span>
              <span className="flex-1">{projectData?.name}</span>
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-gray-600 mb-2">Description:</span>
              <p className="text-gray-700">{projectData?.description}</p>
            </div>

            <div className="flex items-center">
              <span className="w-1/3 font-medium text-gray-600">Status:</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                projectData?.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {projectData?.status}
              </span>
            </div>

            <div className="flex items-center">
              <span className="w-1/3 font-medium text-gray-600">Start Date:</span>
              <span className="flex-1">{projectData?.startDate}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/3 font-medium text-gray-600">End Date:</span>
              <span className="flex-1">{projectData?.endDate}</span>
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-gray-600 mb-2">Team Members:</span>
              <div className="flex flex-wrap gap-2">
                {projectData?.teamMembers?.map((member, index) => (
                  <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{member}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-gray-600 mb-2">Key Deliverables:</span>
              <ul className="list-disc pl-5 space-y-1">
                {projectData?.deliverables?.map((deliverable, index) => (
                  <li key={index} className="text-gray-700">{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;