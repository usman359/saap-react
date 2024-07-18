import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TableProvider } from "./contexts/TableContext";
import Error from "./pages/Error";
import FormSettings from "./pages/FormSettings";
import MainMenu from "./pages/MainMenu";
import Sales from "./pages/Sales";

const App = () => {
  return (
    <TableProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/sales-order" replace />} />
          <Route index path="/sales-order" element={<Sales />} /> */}
          <Route path="/" element={<Navigate to="/main-menu" replace />} />
          <Route index path="/main-menu" element={<MainMenu />} />
          <Route path="/sales-order" element={<Sales />} />
          <Route path="/form-settings" element={<FormSettings />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </TableProvider>
  );
};

export default App;
