import React from "react";
import { myMenu } from "../data/myMenu";

export default function MyMenu() {
  return (
    <div>
      {/* Module items */}
      {myMenu.map((item) => (
        <div className="border-b border-gray-200 p-1 last:border-none bg-gray-100 cursor-pointer hover:bg-yellow-400">
          {item}
        </div>
      ))}
    </div>
  );
}
