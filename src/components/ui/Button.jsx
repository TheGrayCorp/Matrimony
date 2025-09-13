const sizeClasses = {
  extraSmall: "px-4 py-1 text-xs rounded-md",
  small: "px-5 py-2 text-xs rounded-md",
  medium: "px-4 py-2 text-sm rounded-md",
  large: "px-7 py-3 text-base rounded-md",
  auth: "px-14 py-2 text-base rounded-full",
  goToApp: "px-14 py-3 text-base rounded-full",
};

const colorClasses = {
  gold: "bg-gold hover:bg-gold text-white",
  goldWhite: "border-2 border-lightGold text-lightGold hover:bg-yellow-50",
  blue: "bg-blue-700 hover:bg-blue-600 text-white",
  red: "bg-red-700 hover:bg-red-600 text-white",
  green: "bg-green-700 hover:bg-green-600 text-white",
  white: "bg-white hover:bg-gray-200 text-smokyGray border border-border ",
  gray: "bg-gray-500 hover:bg-gray-400 text-white",
  black: "bg-black hover:bg-gray-800 text-white",
  darkBlue: "bg-darkBlue hover:bg-blue-800 text-white",
  purple: "bg-purple hover:bg-purpleHover text-white",
  purpleBorder: "border border-purple text-purple hover:bg-lightPurple",
  lightPurple: "bg-lightPurple text-purple font-semibold"
};

const Button = ({
  label,
  Icon,
  size,
  color,
  type,
  value,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      type={type}
      value={value}
      onClick={onClick}
      className={`font-normal shadow-sm transition ${sizeClasses[size]} ${
        colorClasses[color]
      } ${
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      disabled={disabled}
    >
      <div className="flex justify-center items-center gap-1">
        {Icon && <Icon className="w-5 h-5" />}
        {label}
      </div>
    </button>
  );
};

export default Button;
