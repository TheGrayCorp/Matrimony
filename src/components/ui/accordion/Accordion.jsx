import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ title, Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      {/* Accordion Header */}
      <button
        onClick={toggleOpen}
        className="flex items-center justify-start w-full text-left"
      >
        {Icon && <Icon className="w-5 h-5 mr-3 text-gray-400" />}
        <span className="text-xs text-gray-500">{title}</span>
        <ChevronDown
          className={`w-5 h-5 ml-2 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
