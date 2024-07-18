import React, { useState } from "react";
import { dragAndRelate } from "../data/dragAndRelate";
import { useNavigate } from "react-router-dom";

export default function DragAndRelateTable() {
  // Navigates
  const navigate = useNavigate();

  // States
  const [openModule, setOpenModule] = useState(null);

  return (
    <div>
      {/* Module items */}
      {dragAndRelate.map((item, index) => (
        <>
          <div
            key={index}
            className="border-b border-gray-200 p-1 last:border-none bg-gray-100 cursor-pointer hover:bg-yellow-400"
            onClick={() => {
              if (item.subitems)
                setOpenModule(openModule === index ? null : index);
            }}
          >
            {item.label}
          </div>

          {item.label && item.subitems && openModule === index && (
            <div className="bg-gray-100">
              {/* Items */}
              {item.subitems.map((subitem, subIndex) => (
                <div
                  key={subIndex}
                  className="border-b ml-12 border-gray-200 p-1 last:border-none cursor-pointer hover:bg-yellow-400"
                  onClick={() => {
                    if (subitem === "Sales Order") navigate("/sales-order");
                    if (subitem === "Purchase Order")
                      navigate("/purchase-order");
                  }}
                >
                  {subitem}
                </div>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
}
