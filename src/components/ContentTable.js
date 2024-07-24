import React from "react";
import { useTable } from "../contexts/TableContext";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactToPrint from "react-to-print";
import htmlDocx from "html-docx-js/dist/html-docx";

export default function ContentTable() {
  // TableContext
  const {
    checkboxItems,
    type,
    setType,
    contentTableRef,
    excelButtonRef,
    printButtonRef,
    wordButtonRef,
  } = useTable();

  // Handlers
  const handleWordDownload = () => {
    const tableElement = contentTableRef.current;
    if (tableElement) {
      const htmlContent = `<html><head><meta charset="utf-8"></head><body>${tableElement.outerHTML}</body></html>`;
      const docxBlob = htmlDocx.asBlob(htmlContent);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(docxBlob);
      link.download = "table.docx";
      link.click();
    }
  };

  return (
    <main className="overflow-x-scroll">
      {/* Header container */}
      <header className="flex justify-between mb-2">
        {/* Label and select container */}
        <div className="flex gap-4 border-b outline-none">
          <label className="w-[10rem]">Items/Service Type</label>
          <select
            className="w-1/2 border border-gray-200"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="item">Item</option>
            <option value="service">Service</option>
          </select>
        </div>
        {/* Label and select container */}
        <div className="flex gap-4 border-b">
          <label className="w-[10rem]">Summary Type</label>
          <select className="w-1/2 border border-gray-200">
            <option>No Summary</option>
            <option>By Items</option>
          </select>
        </div>
      </header>
      {/* Main table content container */}
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="hidden"
        table="table-to-xls"
        filename="test"
        sheet="tablexls"
        buttonText="Download as XLS"
        ref={excelButtonRef}
      />
      <ReactToPrint
        trigger={() => (
          <button ref={printButtonRef} className="hidden">
            Print
          </button>
        )}
        content={() => contentTableRef.current}
      />
      <button
        className="hidden"
        ref={wordButtonRef}
        onClick={handleWordDownload}
      >
        Download as DOCX
      </button>

      <table
        id="table-to-xls"
        ref={contentTableRef}
        className="w-full border-collapse"
      >
        <thead>
          <tr className="bg-gray-200">
            {checkboxItems.map(
              (item, index) =>
                item.checked && (
                  <th key={index} className="border border-gray-300 p-0.5">
                    {item.label}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {checkboxItems.map(
                (item, colIndex) =>
                  item.checked && (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      className={`border border-gray-300 p-0.5 ${
                        colIndex === 0 ? "bg-gray-200" : ""
                      }`}
                    >
                      &nbsp;
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
