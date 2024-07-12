import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Sales = () => {
  return (
    <div>
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

export default Sales;
