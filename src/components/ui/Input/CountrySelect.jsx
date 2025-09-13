import Select from "react-select";
import { Country } from "country-state-city";

const formatOptionLabel = ({ label, flag }) => (
  <div className="flex items-center">
    <span className="mr-3">{flag}</span>
    <span>{label}</span>
  </div>
);

const underlineSelectStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: "none",
    borderBottom: "1px solid #d1d5db",
    borderRadius: "0",
    boxShadow: "none",
    padding: "0.25rem 0",
    fontSize: "1.125rem",
    color: "#7D67EE",
    backgroundColor: "transparent",
    "&:hover": {
      borderBottom: "1px solid #7D67EE",
    },
  }),
  valueContainer: (base) => ({ ...base, padding: 0 }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (baseStyles) => ({ ...baseStyles, color: "#7D67EE" }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isSelected
      ? "#4f46e5"
      : state.isFocused
      ? "#e0e7ff"
      : "white",
    color: state.isSelected ? "white" : "#111827",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    fontSize: "0.875rem",
    color: "#9ca3af",
  }),
};

const CountrySelect = ({ label, id, error, field }) => {
  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
    phonecode: `+${country.phonecode}`,
    flag: country.flag,
  }));

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-lg text-mediumGray mb-3">
          {label}
        </label>
      )}
      <Select
        id={id}
        options={countryOptions}
        {...field}
        value={field.value}
        styles={underlineSelectStyles}
        placeholder="Select a country"
        formatOptionLabel={formatOptionLabel}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CountrySelect;
