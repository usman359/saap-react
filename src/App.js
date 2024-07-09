import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SalesOrder from "./pages/SalesOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sales" element={<SalesOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
