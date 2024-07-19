import React from "react";

const FormSelect = ({
  label,
  options,
  value,
  onChange,
  className,
  ...props
}) => (
  <div className={`flex gap-2 items-center border-b ${className}`}>
    <label className="w-[9rem]">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="rounded-sm ml-auto w-[8.5rem] outline-none focus:bg-yellow-200 border border-gray-400"
      {...props}
    >
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;
