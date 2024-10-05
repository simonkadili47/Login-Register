import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom"; 

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div className="text-gray-800 text-lg sm:text-xl font-bold flex-shrink-0">
          <Link to="/login" className="flex items-center space-x-2"> 
            <IoArrowBack className="text-2xl" />
            <p className="text-lg sm:text-xl">Back to Login</p> 
          </Link>
        </div>
        <div className="text-lg sm:text-xl text-gray-800 font-bold text-center w-full"> 
          <p className="text-lg sm:text-xl">New Account Registration</p>
        </div>
      </div>
      <div className="left-0 right-0 border-b border-gray-300 mt-6 z-0"></div>
    </div>
  );
};

export default Header;
