import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className={twMerge(
        "hover:bg-gray-700/10 active:bg-gray-700/20 duration-200 transition-colors px-2.5 py-1 rounded",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
