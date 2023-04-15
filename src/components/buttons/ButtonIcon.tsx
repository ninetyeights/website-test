import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonIcon: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className={twMerge(
        "inline-flex items-center p-2 rounded hover:bg-gray-700/10 active:bg-gray-700/20 focus:outline-none focus:ring-0 duration-200 transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
