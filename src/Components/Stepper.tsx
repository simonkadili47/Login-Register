import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaCheck } from "react-icons/fa";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const [newSteps, setNewSteps] = useState<Step[]>([]);
  const stepRef = useRef<Step[]>([]);

  const updateStep = (stepNumber: number, steps: Step[]): Step[] => {
    return steps.map((step, index) => ({
      description: step.description,
      completed: index < stepNumber,
      highlighted: index === stepNumber - 1,
      selected: index === stepNumber,
    }));
  };

  useEffect(() => {
    const stepState = steps.map((step) => ({
      description: step,
      completed: false,
      highlighted: false,
      selected: false,
    }));
    stepRef.current = stepState;
    const current = updateStep(currentStep, stepRef.current);
    setNewSteps(current);
  }, [steps, currentStep]);

  const displaySteps = useMemo(
    () =>
      newSteps.map((step, index) => (
        <div key={index} className={`flex items-center ${index !== newSteps.length - 1 ? "w-full" : ""}`}>
          <div
            className={`absolute mb-16 justify-center text-md whitespace-nowrap ${step.completed ? "text-black" : step.selected ? "text-customblue" : "text-gray-500"} overflow-hidden text-ellipsis`}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {step.description}
          </div>

          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 h-5 w-5 flex items-center justify-center py-1 ${step.selected ? "border-customblue" : "border-gray-300"} ${step.completed ? "bg-customblue text-white" : ""}`}
          >
            {step.completed && <FaCheck className="text-white text-xs" />}
          </div>

          {index !== newSteps.length - 1 && (
            <div
              className={`flex-auto transition duration-500 ease-in-out border-t-2 ${step.completed ? "border-customblue" : "border-gray-200"}`}
            />
          )}
        </div>
      )),
    [newSteps]
  );

  return <div className="mx-4 p-4 mr-16 flex justify-between">{displaySteps}</div>;
};

export default Stepper;
