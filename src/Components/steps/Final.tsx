import React from "react";
import { useNavigate } from "react-router-dom"; 
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Final: React.FC = () => {
  const navigate = useNavigate(); 
  const handleRedirect = () => {
    navigate("/login"); 
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-semibold">Registration Complete</h1>
      <p className="mt-4 text-md text-gray-500">
        Your information has been successfully submitted and is currently under review.
      </p>
      <div className="flex justify-center mt-8 text-customblue">
        <IoMdCheckmarkCircleOutline style={{ fontSize: "10rem" }} />
      </div>
      <p className="mt-10 text-md text-gray-500">
      <span className="text-black">Note:</span> It will take 1-2 business days to receive your evaluation
      from the department. We appreciate your patience during this time.
      </p>
      <button
        className="mt-12 bg-customblue text-white py-2 px-20 rounded-lg"
        onClick={handleRedirect} 
      >
        Come back later
      </button>
    </div>
  );
};

export default Final;
