import React, { useState } from "react";

export default function AccountingTable() {
  // States
  const [paymentTerms, setPaymentTerms] = useState("");
  const [indicator, setIndicator] = useState("");

  return (
    <div className="flex justify-between">
      {/* Box 1 */}
      <div className="flex flex-col gap-1">
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b mb-8">
          <label className="w-[9rem]">Journal Remark</label>
          <input
            type="text"
            className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[9rem]">Payment Terms</label>
          <select
            onChange={(e) => setPaymentTerms(e.target.value)}
            value={paymentTerms}
            className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
          >
            <option value=""></option>
            <option value="cash-basic">Cash Basic</option>
            <option value="define-new">Define New</option>
          </select>
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[9rem]">Payment Method</label>
          <select className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"></select>
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b mb-4">
          <label className="w-[9rem]">Central Bank Ind.</label>
          <select className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"></select>
        </div>
        {/* Label and input/option container */}
        <div className="flex flex-col">
          {/* Text */}
          <label>Manually Recalculate Due Date:</label>
          {/* Option/input container */}
          <div className="flex">
            <select
              // onChange={(e) => setNumber(e.target.value)}
              // value={number}
              className="rounded-sm w-[7.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
            >
              <option value="primary">Local Currency</option>
              <option value="manual">Manual</option>
            </select>
            <input
              type="text"
              className="rounded-sm mr-1 w-10 outline-none focus:bg-yellow-200 border border-gray-400"
            />
            {/* Months text */}
            <span>Months</span>
            {/* Plus text */}
            <span>+</span>
            <input
              type="text"
              defaultValue={0}
              className="rounded-sm mr-1 w-10 outline-none focus:bg-yellow-200 border border-gray-400"
            />
            <span>Days</span>
          </div>
        </div>
      </div>

      {/* Second box */}
      <div className="flex flex-col gap-1">
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[9rem]">BP Project</label>
          <input
            type="text"
            className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[9rem]">Create QR Code From</label>
          <input
            type="text"
            className="rounded-sm h-12 outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[9rem]">Cancellation Date</label>
          <input
            type="text"
            className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b mb-4">
          <label className="w-[9rem]">Required Date</label>
          <input
            type="text"
            className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b">
          <label className="w-[9rem]">Indicator</label>
          <select
            onChange={(e) => setIndicator(e.target.value)}
            value={indicator}
            className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
          >
            <option value=""></option>
            <option value="define-new">Define New</option>
          </select>
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b mb-4">
          <label className="w-[9rem]">Federal Tax ID</label>
          <input
            type="text"
            className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b mb-4">
          <label className="w-[9rem]">Order Number</label>
          <input
            type="text"
            className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
          />
        </div>
        {/* Label and input/option container */}
        <div className="flex gap-2 items-center border-b mb-4">
          <label className="w-[9rem]">Referred Document</label>
          {/* 3 dots container */}
          <div className="flex items-end">
            <button className="bg-yellow-300 h-4 w-4 flex items-center justify-center px-3 border border-black">
              ...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
