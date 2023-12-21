"use client"
import React from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";


const ThemeSwitcher = () => {
    
    const [mode, setMode] = useThemeSwitcher();

  return (
    <button
      className={`mx-1 flex items-center justify-center rounded-full p-1 min-w-[32px] min-h-[32px]
${mode === "light" ? "bg-dark-1 text-light-1" : "bg-light-1 text-dark-1"}`}
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      {mode === "dark" ? (
        <SunIcon className={"fill-dark-1"} />
      ) : (
        <MoonIcon className={"fill-dark-1"} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
