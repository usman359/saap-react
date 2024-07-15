import React, { useEffect } from "react";
import { useTable } from "../contexts/TableContext";

export default function ContentTable() {
  // TableContext
  const { checkboxItems } = useTable();

  useEffect(() => {
    console.log(checkboxItems);
  }, [checkboxItems]);

  return (
    <main className="overflow-x-scroll">
      {/* Header container */}
      <header className="flex justify-between mb-2">
        {/* Label and select container */}
        <div className="flex gap-4 border-b outline-none">
          <label className="w-[10rem]">Items/Service Type</label>
          <select className="w-1/2 border border-gray-200">
            <option>Item1</option>
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
            {checkboxItems.map((item) => (
              <th key={item} className="border border-gray-300 p-0.5">
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {checkboxItems.map((item) => (
              <td
                key={item}
                className="border border-gray-300 bg-gray-200 p-0.5"
              >
                &nbsp;
              </td>
            ))}
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
