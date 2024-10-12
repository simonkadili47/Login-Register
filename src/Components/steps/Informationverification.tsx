import React, { useContext, useState } from 'react';
import { StepperContext } from '../../Context/StepperContext';

const InformationVerification: React.FC = () => {
  const { userData } = useContext(StepperContext);
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

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
        <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="review-info">
          Review Information
        </label>
        <div
          id="review-info"
          className="w-full px-3 py-2 border rounded-lg bg-customgray2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-48 md:h-28" // Reduced height for desktop
          style={{ 
            paddingTop: '10px', 
            paddingBottom: '10px', 
            minHeight: '100px', 
            lineHeight: '1.5', 
            textAlign: 'left',
          }} 
        >
          <span>The information displayed was fetched from NIDA portals. Please review the</span>
          <span> details carefully and confirm their accuracy before proceeding.</span>
          <div className='flex items-center mt-4'>
            <div
              onClick={handleCheckboxChange}
              className={`border-2 ${isChecked ? 'bg-white' : 'bg-white'} border-white w-5 h-5 flex items-center justify-center cursor-pointer relative`}
            >
              {isChecked && (
                <span className="text-gray-400" style={{ fontSize: '16px', position: 'absolute' }}>
                  ✔
                </span>
              )} 
            </div>
            <p className="ml-2 text-gray-400" onClick={handleCheckboxChange}>
              I agree that the information displayed is true
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationVerification;
