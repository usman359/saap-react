import React from "react";

export default function Nav2() {
  const icons = [
    { src: "/icons/preview.png", alt: "Preview", text: "Preview" },
    { src: "/icons/printer.png", alt: "Print", text: "Print" },
    { src: "/icons/sheet.png", alt: "Ms-Word", text: "MS-Word" },
    { src: "/icons/google-docs.png", alt: "MS-Excel", text: "MS-Excel" },
    { src: "/icons/pdf.png", alt: "Pdf", text: "Pdf" },
    { src: "/icons/lock.png", alt: "Lock Screen", text: "Lock screen" },
    { src: "/icons/search.png", alt: "Find", text: "Find" },
    { src: "/icons/more.png", alt: "Add", text: "Add" },
    {
      src: "/icons/left-arrow.png",
      alt: "First Data Record",
      text: "First Data Record",
    },
    {
      src: "/icons/previous.png",
      alt: "Previous Record",
      text: "Previous Record",
    },
    { src: "/icons/next.png", alt: "Next Record", text: "Next Record" },
    {
      src: "/icons/right-arrow.png",
      alt: "Last Data Record",
      text: "Last Data Record",
    },
    {
      src: "/icons/reload.png",
      alt: "Reload",
      text: "Reload",
    },
    {
      src: "/icons/base-document.png",
      alt: "Base Document",
      text: "Base Document",
    },
    {
      src: "/icons/target-document.png",
      alt: "Target Document",
      text: "Target Document",
    },
    {
      src: "/icons/income.png",
      alt: "Income",
      text: "Income",
    },
    {
      src: "/icons/medical-history.png",
      alt: "Form Settings",
      text: "Form Settings",
    },
    {
      src: "/icons/notification.png",
      alt: "Message Alert",
      text: "Message Alert",
    },
    {
      src: "/icons/user.png",
      alt: "Profile",
      text: "Profile",
    },
  ];

  return (
    <div className="flex items-center gap-4 bg-gray-100 px-4 py-3">
      {/* Icons container */}
      {icons.map((icon, index) => (
        <div key={index} className="relative group">
          {/* Image */}
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-4 h-4 cursor-pointer"
          />
          {/* Image hover icons */}
          <div className="absolute text-center left-1/2 bottom-0 transform translate-y-full -translate-x-1/2 px-2 py-1 bg-white text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {icon.text}
          </div>
        </div>
      ))}
    </div>
  );
}
