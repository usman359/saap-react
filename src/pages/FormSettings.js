import React, { useRef } from "react";
import Nav2 from "../components/Nav2";
import Nav1 from "../components/Nav1";

export default function FormSettings() {
  // Refs
  const formSettingsRef = useRef();

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
          className="bg-gray-100 h-screen absolute top-0 left-0 w-full z-50"
        >
          {/* Center container */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 px-4 border border-gray-300 p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-2">
              <span>Address Component</span>
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
              <div className="mb-6">
                {/* Item 1 */}
                <div className="flex justify-between items-center border-b">
                  <label>Street /PO Box</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 2 */}
                <div className="flex justify-between items-center border-b">
                  <label>Street No.</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 3 */}
                <div className="flex justify-between items-center border-b">
                  <label>Block</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 4 */}
                <div className="flex justify-between items-center border-b">
                  <label>City</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 4 */}
                <div className="flex justify-between items-center border-b">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 5 */}
                <div className="flex justify-between items-center border-b">
                  <label>Country</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 6 */}
                <div className="flex justify-between items-center border-b">
                  <label>State</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 5 */}
                <div className="flex justify-between items-center border-b">
                  <label>Country/Region</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 6 */}
                <div className="flex justify-between items-center border-b">
                  <label>Building/Floor/Room</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 7 */}
                <div className="flex justify-between items-center border-b">
                  <label>Address Name 2</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 8 */}
                <div className="flex justify-between items-center border-b">
                  <label>Address Name 3</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
                {/* Item 7 */}
                <div className="flex justify-between items-center border-b">
                  <label>GLN</label>
                  <input
                    type="text"
                    className="w-2/5 rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
                  />
                </div>
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
