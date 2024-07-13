import React from "react";
import { name } from "../data/nav1";

export default function Nav1() {
  return (
    <div className="flex items-center gap-4 bg-gray-400 bg-gradient-to-b from-gray-200 to-gray-400 px-4 text-sm py-1 border-b-4 border-yellow-500">
      {name.map((nam, index) => (
        <div key={index}>{nam}</div>
      ))}
    </div>
  );
}
