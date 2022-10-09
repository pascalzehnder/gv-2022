import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { TicketPage } from "./pages/ticket-page";
import { OverviewPage } from "./pages/overview-page";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
