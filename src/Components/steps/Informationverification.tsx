import React, { useContext } from 'react';
import { StepperContext } from '../../Context/StepperContext';

const InformationVerification: React.FC = () => {
  const { userData } = useContext(StepperContext);

  return (
    <div className="relative mb-6 mt-6">
      <h2 className="text-black font-bold text-2xl">Verify Your Information</h2>
      <h3 className="text-lg text-gray-400">
        Please verify the accuracy of the information provided
      </h3>
      <div className="mb-6 mt-6">
        <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-uppercase"
          placeholder="**********"
        />
      </div>
      <div className="mb-6 mt-6">
        <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="repassword">
          Re-enter Password
        </label>
        <input
          type="password"
          id="repassword"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-uppercase h-10 md:h-12"
          placeholder="**********"
        />
      </div>
      <div className="relative mb-6 mt-6">
        <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="newpassword">
          Review Information
        </label>
        <textarea
          id="newpassword"
          className="w-full px-3 py-2 text-md border rounded-lg bg-customgray2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-uppercase resize-none h-36 sm:h-28"
          placeholder="The information displayed was fetched from NIDA portals. Please review the details carefully and confirm their accuracy before proceeding."
          style={{ paddingTop: '8px', paddingBottom: '10px' }}
        />


        <div className="absolute inset-x-3 bottom-3 flex items-center">
          <input
            type="checkbox"
            id="agreement"
            className="w-5 h-5 mr-2"
          />
          <label htmlFor="agreement" className="text-gray-400 text-sm md:text-md">
            I confirm that the information provided is accurate.
          </label>
        </div>
      </div>
    </div>
  );
};

export default InformationVerification;
