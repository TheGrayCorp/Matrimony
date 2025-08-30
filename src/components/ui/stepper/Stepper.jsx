import Step from "./Step";

const Stepper = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-md mx-auto flex items-center justify-center">
      {steps.map((stepNumber) => {
        let status;
        if (stepNumber < currentStep) {
          status = "completed";
        } else if (stepNumber === currentStep) {
          status = "current";
        } else {
          status = "pending";
        }

        return (
          <Step
            key={stepNumber}
            number={stepNumber}
            status={status}
            isLastStep={stepNumber === totalSteps}
          />
        );
      })}
    </div>
  );
};

export default Stepper;
