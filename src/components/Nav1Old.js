import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// MenuItem component
const MenuItem = ({ label, shortcut, onClick, disabled }) => (
  <li
    className={`hover:bg-yellow-200 px-4 ${
      disabled ? "opacity-40 pointer-events-none" : ""
    }`}
    onClick={onClick}
  >
    <div className="flex justify-between">
      <span>{label}</span>
      {shortcut && <span>{shortcut}</span>}
    </div>
  </li>
);

// DropdownMenu component
const DropdownMenu = ({ items }) => (
  <div className="absolute z-10 bg-white border border-gray-300 shadow-lg">
    <ul>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </ul>
  </div>
);

// DropdownMenuWithSubmenu component
const DropdownMenuWithSubmenu = ({
  label,
  submenu,
  onMouseOver,
  onMouseOut,
}) => (
  <div className="relative">
    <div
      className="flex justify-between items-center hover:bg-yellow-200"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <li className="px-4">{label}</li>
      <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
    </div>
    {submenu}
  </div>
);

export default function Nav1() {
  const navigate = useNavigate();

  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredValue2, setHoveredValue2] = useState(null);

  // Menu items data
  const fileMenuItems = [
    { label: "Close", onClick: () => {} },
    { label: "Save as Draft", disabled: true },
    { label: "Page Setup...", onClick: () => {} },
    { label: "Preview...", onClick: () => {} },
    { label: "Preview Layouts", disabled: true },
    {
      label: "Print...",
      onClick: () => {},
      shortcut: "Ctrl+P",
      submenu: (
        <DropdownMenuWithSubmenu
          label="Send"
          submenu={
            <DropdownMenu
              items={[
                { label: "Send Message", onClick: () => {} },
                { label: "SAP Business One Mailer", onClick: () => {} },
                { label: "Outlook E-Mail", onClick: () => {} },
                { label: "SMS...", disabled: true },
                { label: "Fax...", onClick: () => {} },
              ]}
            />
          }
          onMouseOver={() => setHoveredValue2("send")}
          onMouseOut={() => setHoveredValue2(null)}
        />
      ),
    },
    { label: "Select Layout and Print...", disabled: true },
    { label: "Print Sequence...", disabled: true },
    { label: "Launch Application...", onClick: () => {} },
    { label: "Lock Screen", onClick: () => {} },
    {
      label: "Exit",
      onClick: () => {},
      shortcut: "Ctrl+Q",
    },
  ];

  const editMenuItems = [
    { label: "Undo", shortcut: "Ctrl+Z", disabled: true },
    { label: "Redo", shortcut: "Ctrl+Shift+Z", disabled: true },
    { label: "Cut", shortcut: "Ctrl+X", disabled: true },
    { label: "Copy", shortcut: "Ctrl+C", disabled: true },
    { label: "Copy Table", disabled: true },
    { label: "Paste", shortcut: "Ctrl+V", disabled: true },
    { label: "Delete", shortcut: "Del", disabled: true },
    { label: "Select All", disabled: true },
    { label: "Hide", disabled: true },
    { label: "Enable", disabled: true },
    { label: "Disable", disabled: true },
    { label: "Align", disabled: true, submenu: <></> }, // Add submenu if needed
    { label: "Restore Default", disabled: true },
    { label: "Save", disabled: true },
    { label: "Leave UI Edit Mode", disabled: true },
    { label: "Add Tab", disabled: true },
    { label: "Remove Tab", disabled: true },
    { label: "Rename Tab", disabled: true },
    { label: "Repeat", shortcut: "Ctrl+F12", disabled: true },
    { label: "Maximize/Restore Grid", shortcut: "Ctrl+F11", disabled: true },
    { label: "Change Path", disabled: true },
  ];

  const viewMenuItems = [
    {
      label: "User-Defined Fields",
      onClick: () => {},
      shortcut: "Ctrl+Shift+U",
    },
    {
      label: "System Information",
      onClick: () => {},
      shortcut: "Ctrl+Shift+I",
    },
    { label: "String Information", onClick: () => {} },
    {
      label: "Pickers Display",
      submenu: (
        <DropdownMenu
          items={[
            { label: "Choose From List", onClick: () => {} },
            { label: "Date", onClick: () => {} },
            { label: "Calculator", onClick: () => {} },
            { label: "User-Defined Values", onClick: () => {} },
            { label: "Translated Fields", onClick: () => {} },
          ]}
        />
      ),
    },
    {
      label: "Indicator Display",
      submenu: (
        <DropdownMenu
          items={[
            { label: "Choose From List Fields", onClick: () => {} },
            { label: "User-Defined Fields", onClick: () => {} },
            { label: "Translated Fields", onClick: () => {} },
          ]}
        />
      ),
    },
    { label: "Show/Hide Toolbar", onClick: () => {} },
    { label: "Restore Column Width", disabled: true },
    { label: "Fit Column Width", disabled: true },
    { label: "Legend", shortcut: "Ctrl+L", disabled: true },
    { label: "Translated Values", disabled: true },
  ];

  const dataMenuItems = [
    { label: "Find", shortcut: "Ctrl+F", disabled: true },
    { label: "Add", shortcut: "Ctrl+A", disabled: true },
    { label: "First Data Record", disabled: true },
    { label: "Next Record", shortcut: "&rarr;Ctrl", disabled: true },
    { label: "Previous Record", shortcut: "&larr;Ctrl", disabled: true },
    { label: "Last Data Record", disabled: true },
    { label: "Refresh Record", disabled: true },
    { label: "Remove", disabled: true },
    { label: "Cancel", disabled: true },
    { label: "Restore", disabled: true },
    { label: "Close", disabled: true },
    { label: "Duplicate", shortcut: "Ctrl+D", disabled: true },
    { label: "Duplicate To", disabled: true, submenu: <></> }, // Add submenu if needed
    { label: "Add Row", shortcut: "Ctrl+I", disabled: true },
    { label: "Delete Row", shortcut: "Ctrl+K", disabled: true },
    { label: "Close Row", disabled: true },
    { label: "Reopen Row", disabled: true },
    { label: "Duplicate Row", shortcut: "Ctrl+M", disabled: true },
    { label: "Copy from Cell Above", disabled: true },
    { label: "Copy from Cell Below", disabled: true },
    { label: "Group Documents", disabled: true },
    { label: "Advanced", disabled: true, submenu: <></> }, // Add submenu if needed
    { label: "Filter Table", disabled: true },
    { label: "Sort Table", disabled: true },
  ];

  return (
    <div className="flex items-center gap-4 bg-gray-400 bg-gradient-to-b from-gray-200 to-gray-400 px-4 text-sm py-1 border-b-4 border-yellow-500 relative">
      <div
        onMouseOver={() => setHoveredValue("File")}
        onMouseOut={() => setHoveredValue(null)}
      >
        File
        {hoveredValue === "File" && <DropdownMenu items={fileMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("Edit")}
        onMouseOut={() => setHoveredValue(null)}
      >
        Edit
        {hoveredValue === "Edit" && <DropdownMenu items={editMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("View")}
        onMouseOut={() => setHoveredValue(null)}
      >
        View
        {hoveredValue === "View" && <DropdownMenu items={viewMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("Data")}
        onMouseOut={() => setHoveredValue(null)}
      >
        Data
        {hoveredValue === "Data" && <DropdownMenu items={dataMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("GoTo")}
        onMouseOut={() => setHoveredValue(null)}
      >
        Go To
        {hoveredValue === "GoTo" && <DropdownMenu items={dataMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("Modules")}
        onMouseOut={() => setHoveredValue(null)}
      >
        Modules
        {hoveredValue === "Modules" && <DropdownMenu items={dataMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("Tools")}
        onMouseOut={() => setHoveredValue(null)}
      >
        Tools
        {hoveredValue === "Tools" && <DropdownMenu items={dataMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("Window")}
        onMouseOut={() => setHoveredValue(null)}
      >
        Window
        {hoveredValue === "Window" && <DropdownMenu items={dataMenuItems} />}
      </div>
      <div
        onMouseOver={() => setHoveredValue("Help")}
        onMouseOut={() => setHoveredValue(null)}
      >
        Help
        {hoveredValue === "Help" && <DropdownMenu items={dataMenuItems} />}
      </div>
    </div>
  );
}
