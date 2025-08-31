import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar glass-card">
      <div className="sidebar-logo">
        <span role="img" aria-label="tractor" className="logo-emoji">🚜</span>
        <span className="farmwise-title">FarmWise</span>
        <span className="subtitle">Management System</span>
      </div>
      <nav>
        <NavLink to="/dashboard" activeClassName="active-link" exact>Dashboard</NavLink>
        <NavLink to="/inventory" activeClassName="active-link">Inventory</NavLink>
        <NavLink to="/crops" activeClassName="active-link">Crops</NavLink>
        <NavLink to="/fields" activeClassName="active-link">Fields</NavLink>
        <NavLink to="/livestock" activeClassName="active-link">Livestock</NavLink>
      </nav>
    </aside>
  );
}