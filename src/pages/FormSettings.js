import React, { useRef } from "react";
import Nav2 from "../components/Nav2";
import Nav1 from "../components/Nav1";

export default function FormSettings() {
  // Refs
  const formSettingsRef = useRef();

  return (
    <div>
      {/* First Nav */}
      <Nav1 />

      {/* Second Nav */}
      <Nav2 />

      {/* Form Settings */}
      <div className="bg-gray-200 h-screen w-1/2">
        <div
          ref={formSettingsRef}
          className="bg-gray-100 h-full absolute top-0 left-0 w-full z-50 overflow-auto"
        >
          {/* Center container */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3/5 px-4 border border-gray-300 p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-2">
              <span>Form Settings - Sales Order</span>
              <span
                // onClick={() => setShowAddressBox(false)}
                className="bg-white h-4 w-4 flex items-center justify-center cursor-pointer"
              >
                X
              </span>
            </header>
            {/* Main */}
            <main className="flex flex-col gap-1 bg-white">
              {/* Items */}
              <div className="mb-6 overflow-auto max-h-96">
                {/* Column text and visible checkbox text */}
                <div className="flex justify-between items-center border-b">
                  <label>Column</label>
                  <span>Visible</span>
                </div>
                {/* Item 1 */}
                <div className="flex justify-between items-center border-b">
                  <label>#</label>
                  <input type="checkbox" />
                </div>
                {/* Item 2 */}
                <div className="flex justify-between items-center border-b">
                  <label>Type</label>
                  <input type="checkbox" />
                </div>
                {/* Item 3 */}
                <div className="flex justify-between items-center border-b">
                  <label>Item No.</label>
                  <input type="checkbox" />
                </div>
                {/* Item 4 */}
                <div className="flex justify-between items-center border-b">
                  <label>BP Catalog No.</label>
                  <input type="checkbox" />
                </div>
                {/* Item 5 */}
                <div className="flex justify-between items-center border-b">
                  <label>Item Description</label>
                  <input type="checkbox" />
                </div>
                {/* Item 6 */}
                <div className="flex justify-between items-center border-b">
                  <label>Bar Code</label>
                  <input type="checkbox" />
                </div>
                {/* Item 7 */}
                <div className="flex justify-between items-center border-b">
                  <label>Mfr No.</label>
                  <input type="checkbox" />
                </div>
                {/* Item 8 */}
                <div className="flex justify-between items-center border-b">
                  <label>Serial No.</label>
                  <input type="checkbox" />
                </div>
                {/* Item 9 */}
                <div className="flex justify-between items-center border-b">
                  <label>Factor 1</label>
                  <input type="checkbox" />
                </div>
                {/* Item 10 */}
                <div className="flex justify-between items-center border-b">
                  <label>Factor 2</label>
                  <input type="checkbox" />
                </div>
                {/* Item 11 */}
                <div className="flex justify-between items-center border-b">
                  <label>Factor 3</label>
                  <input type="checkbox" />
                </div>
                {/* Item 12 */}
                <div className="flex justify-between items-center border-b">
                  <label>Factor 4</label>
                  <input type="checkbox" />
                </div>
                {/* Item 13 */}
                <div className="flex justify-between items-center border-b">
                  <label>Quantity</label>
                  <input type="checkbox" />
                </div>
                {/* Item 14 */}
                <div className="flex justify-between items-center border-b">
                  <label>Delivered Qty</label>
                  <input type="checkbox" />
                </div>
                {/* Item 15 */}
                <div className="flex justify-between items-center border-b">
                  <label>Inventory UoM</label>
                  <input type="checkbox" />
                </div>
                {/* Item 16 */}
                <div className="flex justify-between items-center border-b">
                  <label>No. of Packages</label>
                  <input type="checkbox" />
                </div>
                {/* Item 17 */}
                <div className="flex justify-between items-center border-b">
                  <label>Unit Price</label>
                  <input type="checkbox" />
                </div>
                {/* Item 18 */}
                <div className="flex justify-between items-center border-b">
                  <label>Discout %</label>
                  <input type="checkbox" />
                </div>
                {/* Item 19 */}
                <div className="flex justify-between items-center border-b">
                  <label>Rate</label>
                  <input type="checkbox" />
                </div>
                {/* Item 20 */}
                <div className="flex justify-between items-center border-b">
                  <label>Price After Discount</label>
                  <input type="checkbox" />
                </div>
                {/* Item 21 */}
                <div className="flex justify-between items-center border-b">
                  <label>Tax Code</label>
                  <input type="checkbox" />
                </div>
                {/* Item 22 */}
                <div className="flex justify-between items-center border-b">
                  <label>Gross Price after Disc.</label>
                  <input type="checkbox" />
                </div>
                {/* Item 23 */}
                <div className="flex justify-between items-center border-b">
                  <label>Total (LC)</label>
                  <input type="checkbox" />
                </div>
                {/* Item 24 */}
                <div className="flex justify-between items-center border-b">
                  <label>Whse</label>
                  <input type="checkbox" />
                </div>
                {/* Item 25 */}
                <div className="flex justify-between items-center border-b">
                  <label>Del. Date</label>
                  <input type="checkbox" />
                </div>
                {/* Item 26 */}
                <div className="flex justify-between items-center border-b">
                  <label>Sales Employee</label>
                  <input type="checkbox" />
                </div>
                {/* Item 27 */}
                <div className="flex justify-between items-center border-b">
                  <label>Column. %</label>
                  <input type="checkbox" />
                </div>
                {/* Item 28 */}
                <div className="flex justify-between items-center border-b">
                  <label>G/L Account</label>
                  <input type="checkbox" />
                </div>
                {/* Item 29 */}
                <div className="flex justify-between items-center border-b">
                  <label>Project</label>
                  <input type="checkbox" />
                </div>
                {/* Item 30 */}
                <div className="flex justify-between items-center border-b">
                  <label>Open Qty</label>
                  <input type="checkbox" />
                </div>
                {/* Item 31 */}
                <div className="flex justify-between items-center border-b">
                  <label>In Stock</label>
                  <input type="checkbox" />
                </div>
                {/* Item 32 */}
                <div className="flex justify-between items-center border-b">
                  <label>Commited</label>
                  <input type="checkbox" />
                </div>
                {/* Item 33 */}
                <div className="flex justify-between items-center border-b">
                  <label>Ordered</label>
                  <input type="checkbox" />
                </div>
                {/* Item 34 */}
                <div className="flex justify-between items-center border-b">
                  <label>Gross Profit Base Price</label>
                  <input type="checkbox" />
                </div>
                {/* Item 35 */}
                <div className="flex justify-between items-center border-b">
                  <label>Gross Profit Total Base Price</label>
                  <input type="checkbox" />
                </div>
                {/* Item 36 */}
                <div className="flex justify-between items-center border-b">
                  <label>BOM Type</label>
                  <input type="checkbox" />
                </div>
                {/* Item 37 */}
                <div className="flex justify-between items-center border-b">
                  <label>Row Status</label>
                  <input type="checkbox" />
                </div>
                {/* Item 38 */}
                <div className="flex justify-between items-center border-b">
                  <label>Target Type</label>
                  <input type="checkbox" />
                </div>
                {/* Item 39 */}
                <div className="flex justify-between items-center border-b">
                  <label>Target Key</label>
                  <input type="checkbox" />
                </div>
                {/* Item 40 */}
                <div className="flex justify-between items-center border-b">
                  <label>Base Type</label>
                  <input type="checkbox" />
                </div>
                {/* Item 41 */}
                <div className="flex justify-between items-center border-b">
                  <label>Base Ref.</label>
                  <input type="checkbox" />
                </div>
                {/* Item 42 */}
                <div className="flex justify-between items-center border-b">
                  <label>Base Key</label>
                  <input type="checkbox" />
                </div>
              </div>
              {/* Button container */}
              <div className="flex gap-2">
                <button
                  // onClick={() => setShowAddressBox(false)}
                  className="bg-yellow-200 px-2 border border-gray-400 w-20"
                >
                  OK
                </button>
                <button
                  // onClick={() => setShowAddressBox(false)}
                  className="bg-yellow-200 px-2 border border-gray-400 w-20"
                >
                  Cancel
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
