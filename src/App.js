import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sales from "./pages/Sales";
import Error from "./pages/Error";
import FormSettings from "./pages/FormSettings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sales-order" replace />} />
        <Route index path="/sales-order" element={<Sales />} />
        <Route path="/form-settings" element={<FormSettings />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
