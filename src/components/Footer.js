import React, { useState } from "react";

const Footer = () => {
  const [number, setNumber] = useState("primary");
  return (
    <footer className="flex justify-between">
      {/* Box1 */}
      <div>
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[8rem]">Sales Employee</label>
          <input
            type="text"
            className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[8rem]">Owner</label>
          <input
            type="text"
            className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and textarea container */}
        <div className="flex gap-2 items-center border-b mb-6">
          <label className="w-[8rem]">Remarks</label>
          <textarea
            rows="4"
            className="rounded-sm resize-none w-1/2 outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Button container */}
        <div className="flex gap-2 border-b">
          <div className="relative flex items-center">
            <div className="bg-yellow-200 px-2 border border-gray-400 flex items-center">
              <select
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className="rounded-sm bg-transparent border-none outline-none focus:bg-yellow-200 border border-gray-400"
              >
                <option value="add&new">Add & New</option>
                <option value="add&view">Add & View</option>
                <option value="close">Close</option>
              </select>
            </div>
          </div>

          <button className="bg-yellow-200 px-2 border border-gray-400">
            Cancel
          </button>
        </div>
      </div>
      {/* Box2 */}
      <div>
        {/* Label, select and input container */}
        <div className="flex items-center border-b">
          <label className="w-[8rem]">No.</label>
          <div className="flex items-center relative">
            <select
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              className="rounded-sm absolute top-0 -left-[4.4rem] w-1/2 outline-none focus:bg-yellow-200 border border-gray-400"
            >
              <option value="primary">Primary</option>
              <option value="manual">Manual</option>
            </select>
            <input
              type="number"
              value={number === "primary" ? 6536 : 0}
              className="rounded-sm ml-2 outline-none w-1/2 focus:bg-yellow-200 border border-gray-400"
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
    </footer>
  );
};

export default Footer;
