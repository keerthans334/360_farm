import React from "react";
import "../styles/GlassCard.css";
import "../styles/Crops.css"; // Create this file for custom styles
import { ReactComponent as WaterIcon } from "../assets/inventory.svg"; // Replace with a water/irrigation SVG if you have one

export default function Crops() {
  return (
    <div className="crops-page">
      <h2>Crop Management</h2>
      <div className="crops-subtitle">
        Monitor crop health, diseases, pests, and irrigation schedules
      </div>
      <div className="crop-metrics-row">
        <div className="glass-card crop-metric">
          <div className="metric-title">Active Crops</div>
          <div className="metric-value green">8</div>
          <div className="metric-desc">135 acres total</div>
        </div>
        <div className="glass-card crop-metric">
          <div className="metric-title">Healthy Crops</div>
          <div className="metric-value green">92%</div>
          <div className="metric-desc">+5% from last week</div>
        </div>
        <div className="glass-card crop-metric">
          <div className="metric-title">Need Attention</div>
          <div className="metric-value yellow">3</div>
          <div className="metric-desc">irrigation & pests</div>
        </div>
        <div className="glass-card crop-metric">
          <div className="metric-title">Avg Growth</div>
          <div className="metric-value green">76%</div>
          <div className="metric-desc">season progress</div>
        </div>
      </div>
      <div className="crop-cards-row">
        {/* Winter Wheat */}
        <div className="glass-card crop-card">
          <div className="crop-card-header">
            <span className="crop-title">Winter Wheat</span>
            <span className="crop-badge excellent">Excellent</span>
          </div>
          <div className="crop-details">Grain • 45 acres</div>
          <div className="crop-progress-row">
            <span className="crop-stage">Growth Stage: Flowering</span>
            <span className="crop-stage-value">65%</span>
          </div>
          <div className="progress-bar">
            <div className="progress green" style={{ width: "65%" }}></div>
            <div className="progress brown" style={{ width: "35%" }}></div>
          </div>
          <div className="crop-dates-row">
            <span>Planted: 15/10/2024</span>
            <span>Harvest: 20/07/2024</span>
          </div>
          <div className="crop-irrigation">
            <span className="irrigation-icon">💧</span>
            Irrigation: <span className="status scheduled">Scheduled</span>
            <span className="irrigation-date">Last watered: 15/01/2024</span>
          </div>
          <div className="crop-alert low-risk">
            <span className="alert-icon">🌞</span>
            Aphids - Low Risk
          </div>
          <button className="crop-details-btn">View Details</button>
        </div>
        {/* Sweet Corn */}
        <div className="glass-card crop-card">
          <div className="crop-card-header">
            <span className="crop-title">Sweet Corn</span>
            <span className="crop-badge good">Good</span>
          </div>
          <div className="crop-details">Vegetable • 28 acres</div>
          <div className="crop-progress-row">
            <span className="crop-stage">Growth Stage: Maturity</span>
            <span className="crop-stage-value">90%</span>
          </div>
          <div className="progress-bar">
            <div className="progress green" style={{ width: "90%" }}></div>
            <div className="progress brown" style={{ width: "10%" }}></div>
          </div>
          <div className="crop-dates-row">
            <span>Planted: 10/05/2024</span>
            <span>Harvest: 15/08/2024</span>
          </div>
          <div className="crop-irrigation">
            <span className="irrigation-icon">💧</span>
            Irrigation: <span className="status active">Active</span>
            <span className="irrigation-date">Last watered: 14/01/2024</span>
          </div>
          <div className="crop-alert treated">
            <span className="alert-icon" style={{ color: "#d32f2f" }}>⚠️</span>
            Leaf Blight - Treated
          </div>
          <button className="crop-details-btn">View Details</button>
        </div>
        {/* Soybeans */}
        <div className="glass-card crop-card">
          <div className="crop-card-header">
            <span className="crop-title">Soybeans</span>
            <span className="crop-badge fair">Fair</span>
          </div>
          <div className="crop-details">Legume • 62 acres</div>
          <div className="crop-progress-row">
            <span className="crop-stage">Growth Stage: Pod Development</span>
            <span className="crop-stage-value">75%</span>
          </div>
          <div className="progress-bar">
            <div className="progress green" style={{ width: "75%" }}></div>
            <div className="progress brown" style={{ width: "25%" }}></div>
          </div>
          <div className="crop-dates-row">
            <span>Planted: 20/05/2024</span>
            <span>Harvest: 30/09/2024</span>
          </div>
          <div className="crop-irrigation">
            <span className="irrigation-icon">💧</span>
            Irrigation: <span className="status needed">Needed</span>
            <span className="irrigation-date">Last watered: 10/01/2024</span>
          </div>
          <div className="crop-alert medium-risk">
            <span className="alert-icon" style={{ color: "#ffa000" }}>⚠️</span>
            Stink Bugs - Medium Risk
          </div>
          <button className="crop-details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
}