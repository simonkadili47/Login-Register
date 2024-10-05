import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom"; 

const Register: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center"> 
        <div className="text-gray-800 text-xl font-bold flex-shrink-0">
          <Link to="/login" className="flex items-center space-x-2"> 
            <IoArrowBack className="text-2xl" />
            <p>Back to Login</p>
          </Link>
        </div>
        <div className="text-xl text-gray-800 font-bold text-center w-full"> 
          <p>New Account Registration</p>
        </div>
      </div>
      <div className="fixed left-0 right-0 border-t border-gray-400 mt-8 z-0"></div>

     
      </div>

  );
};

export default Register;
