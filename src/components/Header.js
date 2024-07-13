import React, { useState } from "react";
import Nav2 from "./Nav2";

const Header = () => {
  // States
  const [number, setNumber] = useState("primary");
  return (
    <div>
      {/* Nav2 icons */}
      <Nav2 />

      {/* Sales name text */}
      <h1 className="bg-gray-400 capitalize text-lg px-4 mb-1">Sales Order</h1>

      <header className="flex justify-between px-4">
        {/* Box1 */}
        <div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Customer</label>
            <input
              type="text"
              className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Name</label>
            <input
              type="text"
              className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Contact Person</label>
            <input
              type="number"
              className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Customer Ref. No.</label>
            <input
              type="number"
              className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Select container */}
          <div>
            <select
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
            >
              <option value="primary">Local Currency</option>
              <option value="manual">Manual</option>
            </select>
          </div>
        </div>
        {/* Box2 */}
        <div>
          {/* Label, select and input container */}
          <div className="flex items-center border-b">
            <label className="w-[8rem]">No.</label>
            <div className="relative">
              <select
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className="rounded-sm absolute top-0 -left-[4.1rem] w-1/2 outline-none focus:bg-yellow-200 border border-gray-400"
              >
                <option value="primary">Primary</option>
                <option value="manual">Manual</option>
              </select>
              <input
                type="number"
                defaultValue={number === "primary" ? 6536 : 0}
                className="rounded-sm ml-2 outline-none w-[94%] focus:bg-yellow-200 border border-gray-400"
              />
            </div>
          </div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Status</label>
            <input
              type="text"
              className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Posting Date</label>
            <input
              type="date"
              className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Delivery Date</label>
            <input
              type="date"
              className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400"
            />
          </div>
          {/* Label and input container */}
          <div className="flex gap-2 items-center border-b">
            <label className="w-[8rem]">Document Date</label>
            <input
              type="date"
              className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
