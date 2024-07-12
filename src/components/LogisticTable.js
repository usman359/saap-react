import React, { useEffect, useRef, useState } from "react";

export default function LogisticTable() {
  // Refs
  const addressRef = useRef();

  // States
  const [shipTo, setShipTo] = useState("hello1");
  const [billTo, setBillTo] = useState("hello2");
  const [showAddressBox, setShowAddressBox] = useState(false);

  // Effects
  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (e.target && !addressRef.current.contains(e.target))
  //       setShowAddressBox(false);
  //   };

  //   handleOutsideClick();
  //   window.addEventListener("click", handleOutsideClick);
  //   return () => window.removeEventListener("click", handleOutsideClick);
  // }, []);

  // Handlers
  const handleDotClick = () => {
    setShowAddressBox((show) => !show);
  };

  return (
    <>
      <div className="flex justify-between">
        {/* Vertical items */}
        <div className="flex flex-col gap-2">
          {/* To, text area and 3 dots container */}
          <div className="flex gap-2 border-b">
            {/* Label and option box */}
            <div className="flex flex-col">
              <label>Ship To</label>
              <select
                onChange={(e) => setShipTo(e.target.value)}
                value={shipTo}
                className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
              >
                <option value="primary">Local Currency</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            {/* Text area */}
            <textarea
              rows="4"
              className="rounded-sm resize-none w-1/2 outline-none focus:bg-yellow-200 border border-gray-400"
            />
            {/* 3 dots container */}
            <div className="flex items-end">
              <button
                onClick={handleDotClick}
                className="bg-yellow-300 h-4 w-4 flex items-center justify-center px-3 border border-black"
              >
                ...
              </button>
            </div>
          </div>
          {/* To, text area and 3 dots container */}
          <div className="flex gap-2 border-b">
            {/* Label and option box */}
            <div className="flex flex-col">
              <label>Bill To</label>
              <select
                onChange={(e) => setBillTo(e.target.value)}
                value={billTo}
                className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
              >
                <option value="primary">Local Currency</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            {/* Text area */}
            <textarea
              rows="4"
              className="rounded-sm resize-none w-1/2 outline-none focus:bg-yellow-200 border border-gray-400"
            />
            {/* 3 dots container */}
            <div className="flex items-end">
              <button
                onClick={handleDotClick}
                className="bg-yellow-300 h-4 w-4 flex items-center justify-center px-3 border border-black"
              >
                ...
              </button>
            </div>
          </div>
          {/* Shipping type text and option container */}
          <div className="flex gap-2 border-b relative">
            {/* Label and option box */}
            {/* Label text */}
            <label>Shipping Text</label>
            {/* Select box */}
            <select
              onChange={(e) => setShipTo(e.target.value)}
              value={shipTo}
              className="absolute right-[2.1rem] rounded-sm ml-auto w-[9.3rem] outline-none focus:bg-yellow-200 border border-gray-400"
            >
              <option value="primary">Local Currency</option>
              <option value="manual">Manual</option>
            </select>
          </div>
        </div>

        {/* Second box */}
        <div className="flex flex-col gap-1">
          {/* Checkbox and text container */}
          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" />
            <label>Print Picking Sheet</label>
          </div>
          {/* Checkbox and text container */}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Procure Non Drop-Ship Items</label>
          </div>
          {/* Checkbox and text container */}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Procure Non Drop-Ship Items</label>
          </div>
          {/* Checkbox and text container */}
          <div className="flex items-center gap-2">
            <input type="checkbox" checked />
            <label>Approved</label>
          </div>
          {/* Checkbox and text container */}
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" checked />
            <label>Allow Partial Delivery</label>
          </div>

          {/* Label and input/option container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[9rem]">Pick and Pack Remarks</label>
            <input
              type="text"
              className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input/option container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[9rem]">BP Channel Name</label>
            <input
              type="text"
              className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input/option container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[9rem]">BP Channel Contact</label>
            <select
              // onChange={(e) => setNumber(e.target.value)}
              // value={number}
              className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
            >
              <option value="primary">Local Currency</option>
              <option value="manual">Manual</option>
            </select>
          </div>
        </div>
      </div>

      {/* Address Box */}
      {showAddressBox && (
        <div
          ref={addressRef}
          className="bg-gray-100 h-screen absolute top-0 left-0 w-full z-50"
        >
          {/* Center container */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 px-4 border border-gray-300 p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-2">
              <span>Address Component</span>
              <span
                onClick={() => setShowAddressBox(false)}
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
                  onClick={() => setShowAddressBox(false)}
                  className="bg-yellow-200 px-2 border border-gray-400 w-20"
                >
                  OK
                </button>
                <button
                  onClick={() => setShowAddressBox(false)}
                  className="bg-yellow-200 px-2 border border-gray-400 w-20"
                >
                  Cancel
                </button>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
