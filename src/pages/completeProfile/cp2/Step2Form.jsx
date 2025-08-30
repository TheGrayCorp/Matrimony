import { useState } from "react";
import { Sparkles, MousePointerClick } from "lucide-react";
import SelectionCard from "../../../components/ui/selectionCard/SelectionCard";
import Button from "../../../components/ui/Button";

const Step2Form = ({ onSubmit }) => {
  const [selection, setSelection] = useState(null);

  const handleSubmit = () => {
    if (selection) {
      onSubmit({ inputMethod: selection });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center mt-16">
      <SelectionCard
        label="Generate the chart"
        icon={Sparkles}
        isSelected={selection === "generate"}
        onClick={() => setSelection("generate")}
      />
      <OrDivider />
      <SelectionCard
        label="Enter the chart manually"
        icon={MousePointerClick}
        isSelected={selection === "manual"}
        onClick={() => setSelection("manual")}
      />
      <div className="mt-10">
        <Button
          label="Next"
          size="auth"
          color="darkRed"
          onClick={handleSubmit}
          disabled={!selection}
        />
      </div>
    </div>
  );
};

export default Step2Form;

const OrDivider = () => (
  <div className="flex items-center justify-center my-6 w-full max-w-xs mx-auto">
    <div className="flex-grow h-px bg-darkRed"></div>
    <span className="px-4 text-darkRed text-base">or</span>
    <div className="flex-grow h-px bg-darkRed"></div>
  </div>
);
