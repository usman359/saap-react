import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";

const Sales = () => {
  return (
    <div>
      {/* First Nav */}
      <Nav1 />

      {/* Second Nav */}
      <Nav2 />

      <div className="bg-gray-50 h-[90vh] text-xs flex flex-col justify-between">
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
