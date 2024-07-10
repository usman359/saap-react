import React from "react";

export default function Main() {
  return (
    <main>
      {/* Tab container */}
      <header className="grid grid-cols-4">
        <span className="border-t border-black bg-gray-100 text-center">
          Contents
        </span>
        <span className="border border-black bg-gray-300 text-center">
          Logistics
        </span>
        <span className="border border-black bg-gray-300 text-center">
          Accounting
        </span>
        <span className="border border-black bg-gray-300 text-center">
          Attachments
        </span>
      </header>
      {/* Main content container */}
      <main className="overflow-x-scroll">
        {/* Header container */}
        <header className="flex justify-between">
          {/* Label and select container */}
          <div className="flex gap-4 border-b">
            <label className="w-[10rem]">Items/Service Type</label>
            <select className="w-1/2">
              <option>Item</option>
              <option>Item2</option>
            </select>
          </div>
          {/* Label and select container */}
          <div className="flex gap-4 border-b">
            <label className="w-[10rem]">Summary Type</label>
            <select className="w-1/2">
              <option>No Summary</option>
              <option>Item2</option>
            </select>
          </div>
        </header>
        {/* Main table content container */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-200">#</th>
              <th className="border border-gray-200">Item No.</th>
              <th className="border border-gray-200">Item Description</th>
              <th className="border border-gray-200">Quantity</th>
              <th className="border border-gray-200">Unit Price</th>
              <th className="border border-gray-200">MRP</th>
              <th className="border border-gray-200">Retail Price</th>
              <th className="border border-gray-200">FED Rate</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
              <th className="border border-gray-200">UoM Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
              <td className="border border-gray-200">1</td>
            </tr>
          </tbody>
        </table>
      </main>
    </main>
  );
}
