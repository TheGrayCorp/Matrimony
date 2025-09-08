const SelectionCard = ({ label, icon, isSelected, onClick }) => {
  const Icon = icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full max-w-xs mx-auto flex flex-col items-center justify-center p-6 border rounded-lg transition-all duration-200 ${
        isSelected ? "border-purple bg-red-50" : "border-gray-300 bg-white"
      }`}
    >
      <Icon
        className={`w-8 h-8 mb-3 ${
          isSelected ? "text-purple" : "text-gray-400"
        }`}
      />
      <span
        className={`${
          isSelected ? "text-purple" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default SelectionCard;
