import AsyncSelect from "react-select/async";
import { City, Country } from "country-state-city";
import { customStyles } from "./InputCustomStyles";

const allCities = (() => {
  const countryMap = Country.getAllCountries().reduce((acc, country) => {
    acc[country.isoCode] = country.name;
    return acc;
  }, {});
  return City.getAllCities().map((city) => {
    const countryName = countryMap[city.countryCode];
    const label = `${city.name}, ${
      city.stateCode ? `${city.stateCode}, ` : ""
    }${countryName}`;
    return {
      value: label,
      label: label,
    };
  });
})();

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    if (!inputValue) {
      callback([]);
      return;
    }
    const filteredCities = allCities
      .filter((city) =>
        city.label.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, 25);

    callback(filteredCities);
  }, 400);
};

const AsyncCitySelect = ({ label, id, error, placeholder, ...field }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm text-black2 mb-2">
          {label}
        </label>
      )}
      <AsyncSelect
        id={id}
        styles={customStyles}
        placeholder={placeholder}
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        {...field}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default AsyncCitySelect;
