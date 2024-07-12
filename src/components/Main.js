import React, { useState } from "react";
import ContentTable from "./ContentTable";
import LogisticTable from "./LogisticTable";
import AccountingTable from "./AccountingTable";
import AttachmentTable from "./AttachmentTable";

export default function Main() {
  // States
  const [content, setContent] = useState(true);
  const [logistic, setLogistic] = useState(false);
  const [accounting, setAccounting] = useState(false);
  const [attachment, setAttachment] = useState(false);

  // Handlers
  const handleClick = (val) => {
    if (val === "content") {
      setContent(true);
      setLogistic(false);
      setAccounting(false);
      setAttachment(false);
    }
    if (val === "logistic") {
      setLogistic(true);
      setContent(false);
      setAccounting(false);
      setAttachment(false);
    }
    if (val === "accounting") {
      setAccounting(true);
      setContent(false);
      setLogistic(false);
      setAttachment(false);
    }
    if (val === "attachment") {
      setAttachment(true);
      setContent(false);
      setLogistic(false);
      setAccounting(false);
    }
  };

  return (
    <main className="h-72 px-4">
      {/* Tab container */}
      <header className="grid grid-cols-4 cursor-pointer mb-4">
        <span
          className={`border-black text-center ${
            content ? "bg-gray-100 border-t" : "bg-gray-300 border"
          }`}
          onClick={() => handleClick("content")}
        >
          Contents
        </span>
        <span
          className={`border-black text-center ${
            logistic ? "bg-gray-100 border-t" : "bg-gray-300 border"
          }`}
          onClick={() => handleClick("logistic")}
        >
          Logistics
        </span>
        <span
          className={`border-black text-center ${
            accounting ? "bg-gray-100 border-t" : "bg-gray-300 border"
          }`}
          onClick={() => handleClick("accounting")}
        >
          Accounting
        </span>
        <span
          className={`border-black text-center ${
            attachment ? "bg-gray-100 border-t" : "bg-gray-300 border"
          }`}
          onClick={() => handleClick("attachment")}
        >
          Attachments
        </span>
      </header>
      {/* Main content container */}
      {/* Table */}
      {content && <ContentTable />}
      {logistic && <LogisticTable />}
      {accounting && <AccountingTable />}
      {attachment && <AttachmentTable />}
    </main>
  );
}
