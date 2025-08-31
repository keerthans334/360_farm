import React from "react";
import "../styles/GlassCard.css";
import heroImg from "../assets/farm-hero.jpg"; // Place a farm image in assets

export default function Dashboard() {
  return (
    <div>
      <div className="glass-card dashboard-hero">
        <img src={heroImg} alt="Farm landscape" className="dashboard-hero-img" />
        <div className="dashboard-hero-text">
          <h1>Welcome to 360 Farm </h1>
          <p>
            Your comprehensive farm management solution.<br />
            Monitor crops, livestock, inventory, and field operations all in one place.
          </p>
        </div>
      </div>
      <div className="dashboard-metrics">
        <div className="glass-card metric-card">
          <div className="metric-title">Total Revenue</div>
          <div className="metric-value green">$125,430</div>
        </div>
        <div className="glass-card metric-card">
          <div className="metric-title">Healthy Crops</div>
          <div className="metric-value green">847</div>
        </div>
        <div className="glass-card metric-card">
          <div className="metric-title">Need Attention</div>
          <div className="metric-value yellow">23</div>
        </div>
        <div className="glass-card metric-card">
          <div className="metric-title">Livestock</div>
          <div className="metric-value brown">156</div>
        </div>
      </div>
      <div className="dashboard-sections">
        <div className="glass-card section-card">
          <div className="section-title">Inventory Management</div>
          <div className="section-value">1247 <span className="section-label">Total Items</span></div>
          <div className="section-subvalue green">23 Low Stock</div>
        </div>
        <div className="glass-card section-card">
          <div className="section-title">Crop Management</div>
          <div className="section-value">8 <span className="section-label">Active Crops</span></div>
          <div className="section-subvalue green">92% Healthy</div>
        </div>
        <div className="glass-card section-card">
          <div className="section-title">Field Management</div>
          <div className="section-value">450 <span className="section-label">Total Acres</span></div>
          <div className="section-subvalue brown">280 Harvested</div>
        </div>
        <div className="glass-card section-card">
          <div className="section-title">Animal Husbandry</div>
          <div className="section-value">156 <span className="section-label">Animals</span></div>
          <div className="section-subvalue green">98% Healthy</div>
        </div>
      </div>
    </div>
  );
}