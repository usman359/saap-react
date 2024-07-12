import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SalesOrder from "./pages/SalesOrder";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sales-order" replace />} />
        <Route index path="/sales-order" element={<SalesOrder />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
