import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SalesOrder from "./pages/SalesOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sales" replace />} />
        <Route index path="/sales" element={<SalesOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
