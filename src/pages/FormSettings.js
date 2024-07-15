import React, { useRef } from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import { useTable } from "../contexts/TableContext";

export default function FormSettings() {
  // Refs
  const formSettingsRef = useRef();

  // TableContext
  const { checkboxItems, handleCheckboxChange } = useTable();

  return (
    <div>
      {/* First Nav */}
      <Nav1 />

      {/* Second Nav */}
      <Nav2 />

      {/* Form Settings */}
      <div className="bg-gray-200 h-screen w-1/2">
        <div
          ref={formSettingsRef}
          className="bg-gray-100 h-full absolute top-0 left-0 w-full z-50 overflow-auto"
        >
          {/* Center container */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3/5 px-4 border border-gray-300 p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-2">
              <span>Form Settings - Sales Order</span>
              <span
                // onClick={() => setShowAddressBox(false)}
                className="bg-white h-4 w-4 flex items-center justify-center cursor-pointer"
              >
                X
              </span>
            </header>
            {/* Main */}
            <main className="flex flex-col gap-1 bg-white">
              {/* Items */}
              <div className="mb-6 overflow-auto max-h-[30rem]">
                {/* Column text and visible checkbox text */}
                <div className="flex justify-between items-center border-b">
                  <label>Column</label>
                  <span>Visible</span>
                </div>
                {checkboxItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b"
                  >
                    <label>{item.label}</label>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>
                ))}
              </div>
              {/* Button container */}
              <div className="flex gap-2">
                <button
                  // onClick={() => setShowAddressBox(false)}
                  className="bg-yellow-200 px-2 border border-gray-400 w-20"
                >
                  OK
                </button>
                <button
                  // onClick={() => setShowAddressBox(false)}
                  className="bg-yellow-200 px-2 border border-gray-400 w-20"
                >
                  Cancel
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
