const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  error,
  readOnly,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm text-black2 mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        {...register}
        className={`w-full px-4 py-2 border border-purple rounded-full focus:outline-none`}
      />
      {error && <span className="text-purple text-sm">{error.message}</span>}
    </div>
  );
};

export default InputField;
