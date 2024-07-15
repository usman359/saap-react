import React, { useState } from "react";
import { name } from "../data/nav1";

export default function Nav1() {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredValue2, setHoveredValue2] = useState(null);

  return (
    <div className="flex items-center gap-4 bg-gray-400 bg-gradient-to-b from-gray-200 to-gray-400 px-4 text-sm py-1 border-b-4 border-yellow-500 relative">
      <div
        onMouseOver={() => setHoveredValue("File")}
        onMouseOut={() => setHoveredValue(null)}
      >
        {"File"}

        {hoveredValue === "File" && (
          <div className="absolute z-10 w-64 bg-white border border-gray-300 shadow-lg">
            <ul>
              <li className="hover:bg-yellow-200 border-b border-gray-200 px-4">
                Close
              </li>
              <li className="hover:bg-yellow-200 border-b border-gray-200 px-4 opacity-40 pointer-events-none">
                Save as Draft
              </li>
              <li className="px-4 hover:bg-yellow-200">Page Setup...</li>
              <li className="px-4 hover:bg-yellow-200">Preview...</li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Preview Layouts
              </li>
              <div className="flex justify-between hover:bg-yellow-200">
                <li className="px-4">Print...</li>
                <span className="px-4">Ctrl+P</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Select Layout and Print...
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Print Sequence...
              </li>
              <div
                className="flex justify-between items-center hover:bg-yellow-200 relative"
                onMouseOver={() => setHoveredValue2("send")}
                onMouseOut={() => setHoveredValue2(null)}
              >
                <li className="px-4">Send</li>
                <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
                {hoveredValue2 === "send" && (
                  <div className="-right-48 absolute z-10 bg-white border border-gray-300 shadow-lg top-0">
                    <ul>
                      <li className="hover:bg-yellow-200 px-4">Send Message</li>
                      <li className="hover:bg-yellow-200 px-4">
                        SAP Business One Mailer
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Outlook E-Mail
                      </li>
                      <li className="hover:bg-yellow-200 opacity-40 pointer-events-none px-4">
                        SMS...
                      </li>
                      <li className="hover:bg-yellow-200 px-4">Fax...</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center hover:bg-yellow-200">
                <li className="px-4">Export</li>
                <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
              </div>
              <li className="hover:bg-yellow-200 border-b border-gray-200 px-4">
                Launch Application...
              </li>
              <li className="hover:bg-yellow-200 border-b border-gray-200 px-4">
                Lock Screen
              </li>
              <div className="flex justify-between hover:bg-yellow-200">
                <li className="px-4">Exit</li>
                <span className="px-4">Ctrl+Q</span>
              </div>
            </ul>
          </div>
        )}
      </div>

      <div
        onMouseOver={() => setHoveredValue("Edit")}
        // onMouseOut={() => setHoveredValue(null)}
      >
        {"Edit"}

        {hoveredValue === "Edit" && (
          <div className="absolute z-10 w-64 bg-white border border-gray-300 shadow-lg">
            <ul>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Undo</li>
                <span className="px-4">Ctrl+Z</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none border-b border-gray-200">
                <li className="px-4">Redo</li>
                <span className="px-4">Ctrl+Shift+Z</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Cut</li>
                <span className="px-4">Ctrl+X</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Copy</li>
                <span className="px-4">Ctrl+C</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Copy Table
              </li>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none border-b border-gray-200">
                <li className="px-4">Paste</li>
                <span className="px-4">Ctrl+V</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Delete</li>
                <span className="px-4">Del</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Select All
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Hide
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Enable
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Disable
              </li>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none border-b border-gray-200">
                <li className="px-4">Align</li>
                <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Restore Default
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Save
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Leave UI Edit Mode
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Add Tab
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Remove Tab
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Rename Tab
              </li>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Repeat</li>
                <span className="px-4">Ctrl+F12</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Maximize/Restore Grid</li>
                <span className="px-4">Ctrl+F11</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Change Path
              </li>
            </ul>
          </div>
        )}
      </div>

      <div
        onMouseOver={() => setHoveredValue("View")}
        // onMouseOut={() => setHoveredValue(null)}
      >
        {"View"}

        {hoveredValue === "View" && (
          <div className="absolute z-10 w-72 bg-white border border-gray-300 shadow-lg">
            <ul>
              <div className="flex justify-between hover:bg-yellow-200">
                <li className="px-4">User-Defined Fields</li>
                <span className="px-4">Ctrl+Shift+U</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200">
                <li className="px-4">System Information</li>
                <span className="px-4">Ctrl+Shift+I</span>
              </div>
              <li className="hover:bg-yellow-200 px-4">String Information</li>
              <div
                className="flex justify-between items-center hover:bg-yellow-200 relative"
                onMouseOver={() => setHoveredValue2("pickers-display")}
                onMouseOut={() => setHoveredValue2(null)}
              >
                <li className="px-4">Pickers Display</li>
                <img
                  className="ml-auto px-4 h-2"
                  src="/icons/next.png"
                  alt="Next"
                />
                {hoveredValue2 === "pickers-display" && (
                  <div className="-right-40 absolute z-10 bg-white border border-gray-300 shadow-lg top-0">
                    <ul>
                      <li className="hover:bg-yellow-200 px-4">
                        Choose From List
                      </li>
                      <li className="hover:bg-yellow-200 px-4">Date</li>
                      <li className="hover:bg-yellow-200 px-4">Calculator</li>
                      <li className="hover:bg-yellow-200 px-4">
                        User-Defined Values
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Translated Fields
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="flex justify-between items-center hover:bg-yellow-200 relative border-b border-gray-200"
                onMouseOver={() => setHoveredValue2("indicator-display")}
                onMouseOut={() => setHoveredValue2(null)}
              >
                <li className="px-4">Indicator Display</li>
                <img
                  className="ml-auto px-4 h-2"
                  src="/icons/next.png"
                  alt="Next"
                />
                {hoveredValue2 === "indicator-display" && (
                  <div className="-right-[11.5rem] absolute z-10 bg-white border border-gray-300 shadow-lg top-0">
                    <ul>
                      <li className="hover:bg-yellow-200 px-4">
                        Choose From List Fields
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        User-Defined Fields
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Translated-Fields
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li className="hover:bg-yellow-200 px-4">Show/Hide Toolbar</li>
              <li className="hover:bg-yellow-200 px-4 pointer-events-none opacity-40">
                Restore Column Width
              </li>
              <li className="hover:bg-yellow-200 px-4 pointer-events-none opacity-40 border-b border-gray-200">
                Fit Column Width
              </li>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Legend</li>
                <span className="px-4">Ctrl+L</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 pointer-events-none opacity-40 border-b border-gray-200">
                Translated Values
              </li>
            </ul>
          </div>
        )}
      </div>

      <div
        onMouseOver={() => setHoveredValue("Data")}
        // onMouseOut={() => setHoveredValue(null)}
      >
        {"Data"}

        {hoveredValue === "Data" && (
          <div className="absolute z-10 w-64 bg-white border border-gray-300 shadow-lg">
            <ul>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Find</li>
                <span className="px-4">Ctrl+F</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none border-b border-gray-200">
                <li className="px-4">Add</li>
                <span className="px-4">Ctrl+A</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                First Data Record
              </li>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Next Record</li>
                <span className="px-4">&rarr;Ctrl</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Previous Record</li>
                <span className="px-4">&larr;Ctrl</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Last Data Record
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Refresh Record
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Remove
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Cancel
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Restore
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Close
              </li>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Duplicate</li>
                <span className="px-4">Ctrl+D</span>
              </div>
              <div className="flex justify-between items-center hover:bg-yellow-200 opacity-40 pointer-events-none border-b border-gray-200">
                <li className="px-4">Duplicate To</li>
                <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Add Row</li>
                <span className="px-4">Ctrl+I</span>
              </div>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none">
                <li className="px-4">Delete Row</li>
                <span className="px-4">Ctrl+K</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Close Row
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none">
                Reopen Row
              </li>
              <div className="flex justify-between hover:bg-yellow-200 opacity-40 pointer-events-none border-b border-gray-200">
                <li className="px-4">Duplicate Row</li>
                <span className="px-4">Ctrl+M</span>
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Copy from Cell Above
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Copy from Cell Below
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Group Documents
              </li>
              <div className="flex justify-between items-center hover:bg-yellow-200 opacity-40 pointer-events-none border-b border-gray-200">
                <li className="px-4">Advanced</li>
                <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
              </div>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Filter Table
              </li>
              <li className="hover:bg-yellow-200 px-4 opacity-40 pointer-events-none border-b border-gray-200">
                Sort Table
              </li>
            </ul>
          </div>
        )}
      </div>

      <div>Go To</div>

      <div
        onMouseOver={() => setHoveredValue("Modules")}
        onMouseOut={() => setHoveredValue(null)}
      >
        {"Modules"}

        {hoveredValue === "Modules" && (
          <div className="absolute z-10 w-48 bg-white border border-gray-300 shadow-lg">
            <ul>
              <div
                className="flex justify-between items-center hover:bg-yellow-200 relative"
                onMouseOver={() => setHoveredValue2("administration")}
                onMouseOut={() => setHoveredValue2(null)}
              >
                <li className="px-4">Administration</li>
                <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
                {hoveredValue2 === "administration" && (
                  <div className="-right-52 absolute z-10 bg-white border border-gray-300 shadow-lg top-0">
                    <ul>
                      <li className="hover:bg-yellow-200 px-4">
                        Choose Company
                      </li>
                      <li className="hover:bg-yellow-200 px-4">Web Client</li>
                      <li className="hover:bg-yellow-200 px-4">
                        Exchange Rates and Indexes
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="flex justify-between items-center hover:bg-yellow-200 relative"
                onMouseOver={() => setHoveredValue2("financials")}
                onMouseOut={() => setHoveredValue2(null)}
              >
                <li className="px-4">Financials</li>
                <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
                {hoveredValue2 === "financials" && (
                  <div className="-right-52 absolute z-10 bg-white border border-gray-300 shadow-lg top-0">
                    <ul>
                      <li className="hover:bg-yellow-200 px-4">
                        Chart of Accounts
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Edit Chart of Accounts
                      </li>
                      <li className="hover:bg-yellow-200 px-4">Jounal Entry</li>
                      <li className="hover:bg-yellow-200 px-4">
                        Posting Templates
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Recurring Postings
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Reverse Transactions
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Exchange Rate Differences
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Conversion Transactions
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Financial Report Templates
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Process Checklist
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Document Prining
                      </li>
                      <li className="hover:bg-yellow-200 px-4">
                        Jounel Voucher Report
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
