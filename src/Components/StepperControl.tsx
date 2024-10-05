import React from "react";
import Button from "./Button";

interface StepperControlProps {
  handleClick: (direction?: string) => void;
  currentStep: number;
  steps: string[];
}

const StepperControl: React.FC<StepperControlProps> = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-end mt-8 mb-8 space-x-4">
      <Button
        label="Previous"
        onClick={() => handleClick("prev")}
        className={`bg-customgray3 text-black py-3 px-8 rounded-lg font-bold cursor-pointer border-1 ${
          currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentStep === 0}
      />

      <Button
        label={currentStep === steps.length - 1 ? "Register" : "Next"}
        onClick={() => handleClick(currentStep === steps.length - 1 ? "register" : "next")}
        className="bg-customblue text-white py-3 px-12 rounded-lg font-semibold cursor-pointer border-1"
      />
    </div>
  );
};

export default StepperControl;
