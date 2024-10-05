import React, { useContext } from 'react';
import { StepperContext } from '../../Context/StepperContext';
import flag from '../steps/flag.jpg';
import { IoIosArrowDown } from "react-icons/io";

const Personaldetails: React.FC = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className='text-black font-bold text-xl md:text-2xl'>Provide Your Personal Information</h2>
      <h3 className='text-md md:text-lg text-gray-400 mt-1'>Please enter your personal details</h3>
      <form className="mt-6"> 
        <div className="flex flex-col sm:flex-row mb-4">
          <div className="flex-1 mb-2 sm:mb-0 sm:mr-2">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              name="firstname" 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-uppercase"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex-1 mb-2 sm:mb-0 sm:ml-2">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              name="lastname" 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-uppercase"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email" 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-uppercase"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-6">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="date">
            Date of Birth
          </label>
          <input
            type="date" 
            name="date"
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="nationality">
            Nationality
          </label>
          <select
            name="nationality"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select a country--</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
          </select>
        </div>

        <div className="mb-6 relative">
          <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex items-center relative">
            <img src={flag} alt="Flag" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-5" />
            <span className="absolute left-12 top-1/2 transform -translate-y-1/2 ml-2 font-bold text-black">+255</span>
            <span className="absolute left-20 top-1/2 transform -translate-y-1/2 ml-2">
              <IoIosArrowDown className="ml-2 text-2xl text-gray-400" />
            </span>
            
            <input
              type="text" // Changed to "text" to avoid issues with number formatting
              name="phone" 
              onChange={handleChange}
              className="w-full pl-32 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-uppercase text-sm" // Reduced padding right and set smaller text size
              placeholder="Enter your phone number" // Kept concise
            />
          </div>
        </div>

      </form>
    </div>
  );
};

export default Personaldetails;
