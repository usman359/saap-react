import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  // Navigates
  const navigate = useNavigate();

  const handlePageNav = (e) => {
    if (e.target.tagName === "LI") {
      let item = e.target.textContent;
      item = item.toLowerCase().split(" ").join("-");
      navigate(`/${item}`);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Unordered list */}
      <ul
        className="flex flex-col items-center justify-center text-sm"
        onClick={handlePageNav}
      >
        <li className="border border-gray-200 w-full text-center cursor-pointer p-2 h-8">
          Sales Order
        </li>
        <li className="border border-gray-200 w-full text-center cursor-pointer p-2 h-8">
          Sales Order
        </li>
        <li className="border border-gray-200 w-full text-center cursor-pointer p-2 h-8">
          Sales Order
        </li>
        <li className="border border-gray-200 w-full text-center cursor-pointer p-2 h-8">
          Sales Order
        </li>
      </ul>
    </div>
  );
}
