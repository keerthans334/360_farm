import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import dashboardIcon from "../assets/dashboard.svg";
import inventoryIcon from "../assets/inventory.svg";
import cropsIcon from "../assets/crops.svg";
import fieldsIcon from "../assets/fields.svg";
import livestockIcon from "../assets/livestock.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar glass-card">
      <div className="sidebar-logo">
        <span role="img" aria-label="tractor" className="logo-emoji">🚜</span>
        <span className="farmwise-title">FarmWise</span>
        <span className="subtitle">Management System</span>
      </div>
      <nav>
        <NavLink to="/dashboard" activeClassName="active-link" exact>
          <span className="sidebar-link-icon"><img src={dashboardIcon} alt="Dashboard" /></span>
          Dashboard
        </NavLink>
        <NavLink to="/inventory" activeClassName="active-link">
          <span className="sidebar-link-icon"><img src={inventoryIcon} alt="Inventory" /></span>
          Inventory
        </NavLink>
        <NavLink to="/crops" activeClassName="active-link">
          <span className="sidebar-link-icon"><img src={cropsIcon} alt="Crops" /></span>
          Crops
        </NavLink>
        <NavLink to="/fields" activeClassName="active-link">
          <span className="sidebar-link-icon"><img src={fieldsIcon} alt="Fields" /></span>
          Fields
        </NavLink>
        <NavLink to="/livestock" activeClassName="active-link">
          <span className="sidebar-link-icon"><img src={livestockIcon} alt="Livestock" /></span>
          Livestock
        </NavLink>
      </nav>
    </aside>
  );
}