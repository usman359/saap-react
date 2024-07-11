import React from "react";

export default function ContentTable() {
  return (
    <main className="overflow-x-scroll">
      {/* Header container */}
      <header className="flex justify-between mb-2">
        {/* Label and select container */}
        <div className="flex gap-4 border-b outline-none">
          <label className="w-[10rem]">Items/Service Type</label>
          <select className="w-1/2 border border-gray-200">
            <option>Item</option>
            <option>Item2</option>
          </select>
        </div>
        {/* Label and select container */}
        <div className="flex gap-4 border-b">
          <label className="w-[10rem]">Summary Type</label>
          <select className="w-1/2 border border-gray-200">
            <option>No Summary</option>
            <option>Item2</option>
          </select>
        </div>
      </header>
      {/* Main table content container */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-0.5">#</th>
            <th className="border border-gray-300 p-0.5">Item No.</th>
            <th className="border border-gray-300 p-0.5">Item Description</th>
            <th className="border border-gray-300 p-0.5">Quantity</th>
            <th className="border border-gray-300 p-0.5">Unit Price</th>
            <th className="border border-gray-300 p-0.5">MRP</th>
            <th className="border border-gray-300 p-0.5">Retail Price</th>
            <th className="border border-gray-300 p-0.5">FED Rate</th>
            <th className="border border-gray-300 p-0.5">Total (LC)</th>
            <th className="border border-gray-300 p-0.5">Freight 2</th>
            <th className="border border-gray-300 p-0.5">Freight 1 (LC)</th>
            <th className="border border-gray-300 p-0.5">Gross Total</th>
            <th className="border border-gray-300 p-0.5">Quality in Cartons</th>
            <th className="border border-gray-300 p-0.5">CSDCode</th>
            <th className="border border-gray-300 p-0.5">USCCode</th>
            <th className="border border-gray-300 p-0.5">
              Discount Percentage
            </th>
            <th className="border border-gray-300 p-0.5">FOC Amount</th>
            <th className="border border-gray-300 p-0.5">Scheme Amount</th>
            <th className="border border-gray-300 p-0.5">Tax Type</th>
            <th className="border border-gray-300 p-0.5">MTB Amount</th>
            <th className="border border-gray-300 p-0.5">Non 3rd</th>
            <th className="border border-gray-300 p-0.5">Discount %</th>
            <th className="border border-gray-300 p-0.5">UoM Code</th>
            <th className="border border-gray-300 p-0.5">Whse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 bg-gray-200 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-gray-300 bg-gray-200">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
            <td className="border border-gray-300 p-0.5">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
