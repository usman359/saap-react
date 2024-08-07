import React, { useState } from "react";
import { modules } from "../data/modules";
import { useNavigate } from "react-router-dom";

export default function ModulesTable() {
  // Navigates
  const navigate = useNavigate();

  // States
  const [openModule, setOpenModule] = useState(null);

  return (
    <div>
      {/* Module items */}
      {modules.map((item) => (
        <React.Fragment key={item.id}>
          <div
            className="border-b border-gray-200 p-1 last:border-none bg-gray-100 cursor-pointer hover:bg-yellow-400"
            onClick={() => {
              if (item.subitems)
                setOpenModule(openModule === item.id ? null : item.id);
            }}
          >
            {item.label}
          </div>

          {item.label && item.subitems && openModule === item.id && (
            <div className="bg-gray-100">
              {/* Items */}
              {item.subitems.map((subitem) => (
                <div
                  key={subitem.id}
                  className="border-b ml-12 border-gray-200 p-1 last:border-none cursor-pointer hover:bg-yellow-400"
                  onClick={() => {
                    if (subitem.label === "Sales Order")
                      navigate("/sales-order");
                    if (subitem.label === "Purchase Order")
                      navigate("/purchase-order");
                  }}
                >
                  {subitem.label}
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
