const TextareaField = ({
  label,
  id,
  placeholder,
  register,
  error,
  rows = 4,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm text-black2 mb-2">
          {label}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        {...register}
        className={`w-full px-4 py-2 border border-purple rounded-xl focus:outline-none`}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default TextareaField;
