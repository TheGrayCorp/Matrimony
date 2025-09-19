import { Mars, Venus } from "lucide-react";

const GenderSelector = ({ value, onChange }) => {
  const genders = [
    { label: "Male", value: "male", IconComponent: Mars },
    { label: "Female", value: "female", IconComponent: Venus },
  ];

  return (
    <div className="flex justify-center gap-6">
      {genders.map(({ label, value: genderValue, IconComponent }) => {
        const isSelected = value === genderValue;
        const Icon = IconComponent;

        return (
          <button
            key={genderValue}
            type="button"
            onClick={() => onChange(genderValue)}
            className={`flex flex-col items-center justify-center w-24 h-24 border rounded-lg transition-all duration-200 ${
              isSelected
                ? "border-purple bg-lightPurple"
                : "border-gray-300 bg-white"
            }`}
          >
            <Icon
              className={`w-8 h-8 mb-2 ${
                isSelected ? "text-purple" : "text-gray-500"
              }`}
            />
            <span
              className={`font-medium ${
                isSelected ? "text-purple" : "text-gray-700"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default GenderSelector;
