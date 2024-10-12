// /Components/StepperControl.tsx
import React from "react";

interface StepperControlProps {
  handleClick: (direction: string) => void;
  currentStep: number;
  steps: string[];
}

const StepperControl: React.FC<StepperControlProps> = ({
  handleClick,
  currentStep,
  steps,
}) => {
  return (
    <div className="flex justify-end mt-4"> 
      <button
        onClick={() => handleClick("prev")}
        disabled={currentStep === 0}
        className={`bg-gray-500 text-white px-8 py-2 rounded-lg ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Back
      </button>
      <button
        onClick={() => handleClick(currentStep === steps.length - 1 ? "register" : "next")}
        className="bg-blue-500 text-white px-8 py-2 rounded-lg ml-2" 
      >
        {currentStep === steps.length - 1 ? "Register" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
