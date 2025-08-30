import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Stepper from "../../../components/ui/stepper/Stepper";
import Step1Form from "./Step1Form";
import Step2Form from "../cp2/Step2Form";
import Step3Form from "../cp3/CompleteProfile3";
import Profile from "../../../components/ui/Profile";
import { user } from "../../../mockData/mockData";
import Header from "../../../components/ui/headerLayout/Header";
import FooterText from "../../../components/ui/footerText/FooterText";

const CompleteProfile = () => {
  // useSearchParams is used to read and write to the URL query string (e.g., ?step=2)
  const [searchParams, setSearchParams] = useSearchParams();

  // The 'currentStep' state will now be driven by the URL
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // This useEffect hook syncs the component's state with the URL.
  // It runs whenever the component first loads or when the `searchParams` change
  // (e.g., when the user clicks the browser's back or forward buttons).
  useEffect(() => {
    // Read the 'step' parameter from the URL.
    // parseInt to convert it to a number. Default to 1 if it doesn't exist.
    const stepFromUrl = parseInt(searchParams.get("step")) || 1;
    if (stepFromUrl !== currentStep) {
      setCurrentStep(stepFromUrl);
    }
  }, [searchParams, currentStep]);

  // Helper function to programmatically go to a new step
  const goToStep = (step) => {
    // Update the URL's query parameter. This adds a new entry in the browser's history.
    setSearchParams({ step: step.toString() });
  };

  // --- FORM SUBMISSION HANDLERS ---
  const handleStep1Submit = (data) => {
    console.log("Step 1 Data:", data);
    // When submitted, go to the next step, which will update the URL
    goToStep(2);
  };

  const handleStep2Submit = (data) => {
    console.log("Step 2 Data:", data);
    goToStep(3);
  };

  // You would also create a handler for the final step
  const handleStep3Submit = (data) => {
    console.log("Final Profile Data:", data);
    // Navigate to the next page after completion
    // navigate('/dashboard');
  };

  // --- DYNAMIC CONTENT RENDERERS ---
  const renderStepHeader = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <p className="text-gray-600">Enter the details</p>
            <p className="font-bold text-darkRed text-lg">
              to complete your profile
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <p className="text-gray-600">Choose preferred</p>
            <p className="font-bold text-darkRed text-lg">
              Astrology chart input method
            </p>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
              You can generate astrology chart with required birth details or
              you can enter manually
            </p>
          </div>
        );
      case 3:
        return (
          <div>
            <p className="text-gray-600">Enter the personal details</p>
            <p className="font-bold text-darkRed text-lg">
              to complete your profile
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Form onSubmit={handleStep1Submit} />;
      case 2:
        return <Step2Form onSubmit={handleStep2Submit} />;
      case 3:
        return <Step3Form onSubmit={handleStep3Submit} />; // Pass the final submit handler
      default:
        // Default to step 1 in case of an invalid URL parameter
        return <Step1Form onSubmit={handleStep1Submit} />;
    }
  };

  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow">
        <div>
          <div className="flex justify-end px-4 pt-1 pb-0">
            <Profile
              imgSrc={user.imgSrc}
              userName={user.userName}
              onLogout={handleLogout}
            />
          </div>
          <Header />
        </div>
        <div className="px-6">
          <div className="pt-14 pb-8 text-center">{renderStepHeader()}</div>
          <div className="w-full mb-6">
            <Stepper currentStep={currentStep} totalSteps={totalSteps} />
          </div>
          <div>{renderStepContent()}</div>
        </div>
      </div>
      <footer className="py-2 px-10">
        <FooterText align="justify" className="md:text-center" />
      </footer>
    </div>
  );
};

export default CompleteProfile;
