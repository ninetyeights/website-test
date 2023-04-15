import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeType } from "./utils";

interface Props {
  theme: ThemeType,
  toggleTheme: (t: ThemeType) => void,
  className?: string
}

const Theme: React.FC<Props> = ({ theme, toggleTheme, className }) => {
  console.log(theme)

  return (
    <div className={className}>
      <h4 className="mb-2">模式</h4>
      <div className="grid grid-cols-2 gap-4">
        <button
          className={`w-full h-20 border border-dashed rounded-lg flex items-center justify-center hover:shadow-lg duration-300 transition-all${theme === 'light' ? ' shadow-lg hover:bg-200/20' : ' hover:bg-gray-200/30'}`}
          onClick={() => toggleTheme("light")}
        >
          <FaSun className="h-6 w-6" />
        </button>
        <button
          className={`w-full h-20 border border-dashed rounded-lg flex items-center justify-center hover:shadow-lg duration-300 transition-all${theme === 'dark' ? ' shadow-lg hover:bg-200/30' : ' hover:bg-gray-200/30'}`}
          onClick={() => toggleTheme("dark")}
        >
          <FaMoon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Theme;
