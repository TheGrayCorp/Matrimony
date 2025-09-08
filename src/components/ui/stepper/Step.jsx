import { Check } from "lucide-react";

const Step = ({ number, status, isLastStep }) => {
  const getStepClasses = () => {
    switch (status) {
      case "completed":
        return "bg-purple text-white";
      case "current":
        return "bg-purple text-white";
      case "pending":
        return "border-2 border-purple text-purple";
      default:
        return "";
    }
  };

  const getLineClasses = () => {
    return status === "completed" ? "bg-purple" : "bg-gray-300";
  };

  return (
    <div className={`flex items-center ${!isLastStep ? "w-full" : ""}`}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${getStepClasses()}`}
      >
        {status === "completed" ? <Check size={20} /> : number}
      </div>
      {!isLastStep && (
        <div
          className={`flex-grow h-0.5 mx-2 transition-colors duration-300 ${getLineClasses()}`}
        />
      )}
    </div>
  );
};

export default Step;
