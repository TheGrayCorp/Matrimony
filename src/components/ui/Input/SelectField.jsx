import Select from "react-select";
import { customStyles } from "./InputCustomStyles";

const SelectField = ({ label, id, error, options = [], ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm text-black2 mb-2">
          {label}
        </label>
      )}
      <Select id={id} styles={customStyles} options={options} {...props} />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default SelectField;
