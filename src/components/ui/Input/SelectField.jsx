import Select from "react-select";

const SelectField = ({ label, id, error, options = [], ...props }) => {
  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#a02a35" : "#8B0000",
      borderRadius: "9999px",
      padding: "0.1rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#a02a35",
      },
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: "#8B0000",
      "&:hover": {
        color: "#a02a35",
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected
        ? "#8B0000"
        : state.isFocused
        ? "#fee2e2"
        : "white",
      color: state.isSelected ? "white" : "#333",
      "&:active": {
        backgroundColor: "#fecaca",
      },
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "#9ca3af",
    }),
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm text-black2 mb-2">
          {label}
        </label>
      )}
      <Select id={id} styles={customStyles} options={options} {...props} />
      {error && <span className="text-purple text-sm">{error.message}</span>}
    </div>
  );
};

export default SelectField;
