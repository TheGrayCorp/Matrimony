// import { ChevronDown } from "lucide-react";

// const SelectField = ({ label, id, register, error, options = [] }) => {
//   return (
//     <div className="mb-4">
//       {label && (
//         <label htmlFor={id} className="block text-sm text-black2 mb-2">
//           {label}
//         </label>
//       )}

//       {/* 2. Add a relative positioning wrapper */}
//       <div className="relative">
//         <select
//           id={id}
//           {...register}
//           className={`w-full px-4 py-2 border border-darkRed rounded-full focus:outline-none appearance-none bg-white pr-10`} // 3. Add right padding (pr-10)
//         >
//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>

//         {/* 4. Add the absolutely positioned icon */}
//         <div className="absolute inset-y-0 right-0 flex items-center px-8 pointer-events-none">
//           <ChevronDown className="h-6 w-6 text-darkRed" />
//         </div>
//       </div>

//       {error && <span className="text-darkRed text-sm">{error.message}</span>}
//     </div>
//   );
// };

// export default SelectField;

// src/components/ui/Input/StyledSelect.js

import Select from "react-select";

const SelectField = ({
  label,
  id,
  error,
  options = [],
  ...props // Pass any other react-select props
}) => {
  const customStyles = {
    // This targets the main container that has the border
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#a02a35" : "#8B0000", // Darker red on focus, darkRed otherwise
      borderRadius: "9999px", // full rounded
      padding: "0.1rem", // Adjust vertical padding
      boxShadow: "none", // Remove the default blue glow on focus
      "&:hover": {
        borderColor: "#a02a35", // Darker red on hover
      },
    }),
    // This targets the dropdown arrow icon
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      color: "#8B0000", // Your darkRed icon color
      "&:hover": {
        color: "#a02a35", // Darker red on hover
      },
    }),
    // This targets the individual options in the dropdown menu
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected
        ? "#8B0000" // Background for selected option
        : state.isFocused
        ? "#fee2e2" // Background for hovered/focused option
        : "white",
      color: state.isSelected ? "white" : "#333",
      "&:active": {
        backgroundColor: "#fecaca",
      },
    }),
    // This targets the placeholder text
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "#9ca3af", // A standard placeholder color
    }),
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm text-black2 mb-2">
          {label}
        </label>
      )}
      <Select
        id={id}
        styles={customStyles} // Apply your custom styles here
        options={options}
        {...props}
      />
      {error && <span className="text-darkRed text-sm">{error.message}</span>}
    </div>
  );
};

export default SelectField;
