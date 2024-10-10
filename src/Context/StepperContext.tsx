import React, { createContext, useState, ReactNode } from "react";


interface UserData {
  firstname?: string;
  lastname?: string;
  email?: string;
  date?: string;
  nationality?: string;
  phone?: string;
}

interface StepperContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const StepperContext = createContext<StepperContextType | null>(null);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({});

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
};
