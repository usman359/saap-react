import React from "react";
import { icons } from "../data/nav2";
import { useNavigate } from "react-router-dom";
import { useTable } from "../contexts/TableContext";

export default function Nav2() {
  // Navigates
  const navigate = useNavigate();

  // TableContext
  const { setIsFormOpen, excelButtonRef, printButtonRef } = useTable();

  // Handlers
  const handleClick = (text) => {
    if (text === "MS-Excel") {
      if (excelButtonRef && excelButtonRef.current) {
        excelButtonRef.current.handleDownload();
      }
    }

    if (text === "Form Settings") {
      setIsFormOpen(true);
      navigate("/form-settings");
    }

    if (text === "Print") {
      if (printButtonRef && printButtonRef.current) {
        printButtonRef.current.click();
      }
    }
  };

  return (
    <div className="flex items-center gap-4 bg-gray-100 px-4 py-3">
      {/* Icons container */}
      {icons.map((icon, index) => (
        <div
          key={index}
          className="relative group"
          onClick={() => handleClick(icon.text)}
        >
          {/* Image */}
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-4 h-4 cursor-pointer"
          />
          {/* Image hover icons */}
          <div className="absolute text-center left-1/2 bottom-0 transform translate-y-full -translate-x-1/2 px-2 py-1 bg-white text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs whitespace-nowrap">
            {icon.text}
          </div>
        </div>
      ))}
    </div>
  );
}
