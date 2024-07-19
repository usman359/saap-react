import React, { useState } from "react";

const Footer = () => {
  // States
  const [number, setNumber] = useState("primary");
  const [employee, setEmployee] = useState("employee");

  return (
    <footer className="flex justify-between px-4 mb-1">
      {/* Box1 */}
      <div>
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[8rem]">Sales Employee</label>
          <select
            onChange={(e) => setEmployee(e.target.value)}
            value={employee}
            className="rounded-sm w-[8.75rem] outline-none focus:bg-yellow-200 border border-gray-400"
          >
            <option value="no-sales-employee">No Sales Employee</option>
            <option value="shaban">Shaban</option>
            <option value="shahzaib">Shahzaib</option>
            <option value="tariq">Tariq</option>
            <option value="zafar">Zafar</option>
            <option value="zeeshan">Zeeshan</option>
            <option value="zohran">Zohran</option>
            <option value="define-new">Define New</option>
          </select>
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
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[8rem]">Total Before Discount</label>
          <input
            type="text"
            disabled
            className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400 bg-gray-200"
          />
        </div>
        {/* Label, select and input container */}
        <div className="flex items-center border-b">
          <label className="w-[7.8rem]">Discount</label>
          <div className="relative flex items-center">
            <input
              type="number"
              className="rounded-sm absolute top-0 -left-[3.2rem] w-1/3 outline-none focus:bg-yellow-200 border border-gray-400"
            />
            <span>%</span>
            <input
              type="text"
              className="rounded-sm outline-none w-[92.2%] focus:bg-yellow-200 border border-gray-400"
            />
          </div>
        </div>
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[8rem]">Freight</label>
          <input
            type="text"
            disabled
            className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400 bg-gray-200"
          />
        </div>
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <input type="checkbox" />
          <label className="w-[6.75rem]">Rounding</label>
          <input
            type="text"
            disabled
            defaultValue="PKR 0.0000"
            className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400 bg-gray-200 text-end"
          />
        </div>
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[8rem]">Tax</label>
          <input
            type="text"
            disabled
            className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400 bg-gray-200"
          />
        </div>
        {/* Label and input container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[8rem]">Total</label>
          <input
            type="text"
            disabled
            defaultValue="PKR 0.0000"
            className="rounded-sm outline-none w-1/2 focus:bg-yellow-200 border border-gray-400 bg-gray-200 text-end"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
