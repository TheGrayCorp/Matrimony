const PhoneNumberInput = ({ label, id, phonecode, register, error }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-base text-mediumGray mb-3">
          {label}
        </label>
      )}
      <div className="flex items-end">
        <input
          type="text"
          value={phonecode || ""}
          placeholder="Code"
          readOnly
          className="w-16 text-center text-lg font-semibold text-gray-800 bg-transparent border border-gray-300 rounded focus:outline-none pb-2 placeholder:font-normal placeholder:text-sm placeholder:text-gray-400"
        />
        <input
          id={id}
          type="tel"
          placeholder="Phone number"
          {...register}
          className="flex-grow text-lg text-gray-500 bg-transparent border border-gray-300 rounded focus:outline-none focus:border-indigo-600 ml-4 pb-2 placeholder:text-sm placeholder:text-gray-400"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default PhoneNumberInput;
