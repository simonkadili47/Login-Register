export interface UserData {

}

export interface StepperContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  finalData: any[];
  setFinalData: React.Dispatch<React.SetStateAction<any[]>>;
  currentStep: number; 
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>; 
  
}