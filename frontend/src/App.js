import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Crops from "./components/Crops";
import Fields from "./components/Fields";
import Livestock from "./components/Livestock";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-bg">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/livestock" element={<Livestock />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;