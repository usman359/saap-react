import React from "react";

const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  className,
  ...props
}) => (
  <div className={`flex gap-2 items-center border-b ${className}`}>
    <label className="w-[9rem]">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="rounded-sm outline-none focus:bg-yellow-200 border border-gray-400"
      {...props}
    />
  </div>
);

export default FormInput;
