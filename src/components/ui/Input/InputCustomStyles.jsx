import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const themeColors = fullConfig.theme.colors;

export const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? themeColors.purple : themeColors.purple,
    borderRadius: "9999px",
    padding: "0.1rem",
    boxShadow: "none",
    "&:hover": {
      borderColor: themeColors.purple,
    },
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: themeColors.purple,
    "&:hover": {
      color: themeColors.purple,
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isSelected
      ? themeColors.purple
      : state.isFocused
      ? themeColors.lightPurple
      : "white",
    color: state.isSelected ? "white" : "#333",
    "&:active": {
      backgroundColor: themeColors.lightPurple,
    },
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#9ca3af",
  }),
};
