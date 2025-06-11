import React from "react";
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  className = "",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variantClasses = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
    outline:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    google:
      "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  };
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
