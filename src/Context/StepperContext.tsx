import React, { createContext, useState, ReactNode } from "react";
import { UserData, StepperContextType } from '../types/StepperTypes';

export const StepperContext = createContext<StepperContextType | null>(null);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({});
  const [finalData, setFinalData] = useState<any[]>([]); 
  const [currentStep, setCurrentSteps] = useState<number>(0); 

  return (
    <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData, currentStep, setCurrentSteps }}>
      {children}
    </StepperContext.Provider>
  );
};
