import React, { useState } from "react";

export default function Main() {
  const [content, setContent] = useState(true);
  const [logistic, setLogistic] = useState(false);
  const [accounting, setAccounting] = useState(false);
  const [attachment, setAttachment] = useState(false);

  return (
    <main>
      {/* Tab container */}
      <header className="grid grid-cols-4 cursor-pointer mb-4">
        <span
          className="border-t border-black bg-gray-100 text-center"
          onClick={() => setContent(true)}
        >
          Contents
        </span>
        <span
          className="border border-black bg-gray-300 text-center"
          onClick={() => setLogistic(true)}
        >
          Logistics
        </span>
        <span
          className="border border-black bg-gray-300 text-center"
          onClick={() => setAccounting(true)}
        >
          Accounting
        </span>
        <span
          className="border border-black bg-gray-300 text-center"
          onClick={() => setAttachment(true)}
        >
          Attachments
        </span>
      </header>
      {/* Main content container */}
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
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
              <th className="border border-gray-300 p-0.5">UoM Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 bg-gray-200 p-0.5">
                &nbsp;
              </td>
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
            </tr>
          </tbody>
        </table>
      </main>
    </main>
  );
}
