import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const SalesOrder = () => {
  return (
    <div className="bg-white h-screen px-4 text-xs flex flex-col justify-between">
      {/* Header */}
      <Header />

      {/* Main */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SalesOrder;
