import Select from "react-select";

const SelectField = ({
  label,
  id,
  error,
  options = [],
  ...props 
}) => {
  const customStyles = {
    
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#a02a35" : "#8B0000", // Darker red on focus, purple otherwis
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
      color: "#8B0000", // Your purple icon color
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
      {error && <span className="text-purple text-sm">{error.message}</span>}
    </div>
  );
};

export default SelectField;
