import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const SalesOrder = () => {
  return (
    <div className="grid grid-cols-[200px_1fr]">
      {/* Sidebar component */}
      <Sidebar />

      <div className="bg-white h-screen text-xs flex flex-col justify-between">
        {/* Header */}
        <Header />

        {/* Main */}
        <Main />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SalesOrder;
