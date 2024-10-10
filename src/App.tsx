
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Stepper from './Components/Stepper';
import StepperControl from './Components/StepperControl';
import Personaldetails from './Components/steps/Personaldetails';
import Identificationdetails from './Components/steps/Identificationdetails';
import InformationVerification from './Components/steps/Informationverification';
import { StepperContext } from './Context/StepperContext';
import Login from './Login';
import Final from './Components/steps/Final';
import Footer from './Components/Footer';

import { UserData, StepperContextType } from './types/StepperTypes';


const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});
  const [finalData, setFinalData] = useState<any[]>([]);
  const [isFinalStepComplete, setIsFinalStepComplete] = useState(false);

  const steps = [
    "Personal Details",
    "Identification Details",
    "Information Verification",
  ];

  const displayStep = (step: number) => {
    switch (step) {
      case 0:
        return <Personaldetails />;
      case 1:
        return <Identificationdetails />;
      case 2:
        return <InformationVerification />;
      default:
        return null;
    }
  };

  const handleClick = (direction?: string) => {
    if (direction === "register") {
      setIsFinalStepComplete(true);
      setCurrentStep(steps.length);
    } else {
      setCurrentStep((prevStep) => {
        if (direction === "next") {
          return prevStep < steps.length - 1 ? prevStep + 1 : prevStep;
        } else if (direction === "prev") {
          return prevStep > 0 ? prevStep - 1 : prevStep; 
        }
        return prevStep; 
      });
    }
  };

  const stepperContextValue: StepperContextType = {
    userData,
    setUserData,
    finalData,
    setFinalData,
    setCurrentStep,
  };

  return (
    <Router>
      <StepperContext.Provider value={stepperContextValue}>
        <ResetStepperState 
          setCurrentStep={setCurrentStep} 
          setIsFinalStepComplete={setIsFinalStepComplete}
        />
        <div className="flex flex-col min-h-screen font-poppins"> 
          <div className="flex-grow"> 
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/register"
                element={
                  <div className='font-poppins'>
                    {!isFinalStepComplete && <Header />}
                    <div className='md:w-1/2 mx-auto rounded-xl pb-2'>
                      <div className='container horizontal mt-16 pr-9'>
                        {!isFinalStepComplete && (
                          <Stepper steps={steps} currentStep={currentStep} />
                        )}
                      </div>
                      <div className="mt-4">
                        {isFinalStepComplete ? (
                          <>
                            <Stepper steps={steps} currentStep={steps.length} />
                            <Final steps={steps} currentStep={steps.length} />
                          </>
                        ) : (
                          displayStep(currentStep)
                        )}
                      </div>
                      {!isFinalStepComplete && (
                        <StepperControl
                          handleClick={handleClick}
                          currentStep={currentStep}
                          steps={steps}
                        />
                      )}
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </StepperContext.Provider>
    </Router>
  );
};

const ResetStepperState: React.FC<{ setCurrentStep: React.Dispatch<React.SetStateAction<number>>, setIsFinalStepComplete: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setCurrentStep, setIsFinalStepComplete }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/register') {
      setCurrentStep(0);
      setIsFinalStepComplete(false);
    }
  }, [location, setCurrentStep, setIsFinalStepComplete]);

  return null; 
};

export default App;
