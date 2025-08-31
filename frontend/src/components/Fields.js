import React from "react";
import "../styles/GlassCard.css";
import "../styles/Fields.css"; // Create this file for custom styles

export default function Fields() {
  return (
    <div className="fields-page">
      <h2>Field Management</h2>
      <div className="fields-subtitle">
        Track acreage, growth stages, and farming activities across all fields
      </div>
      <div className="fields-metrics-row">
        <div className="glass-card fields-metric">
          <div className="metric-title">Total Acres</div>
          <div className="metric-value green">312</div>
          <div className="metric-desc">across 4 fields</div>
        </div>
        <div className="glass-card fields-metric">
          <div className="metric-title">Harvested</div>
          <div className="metric-value green">45</div>
          <div className="metric-desc">acres completed</div>
        </div>
        <div className="glass-card fields-metric">
          <div className="metric-title">Sown</div>
          <div className="metric-value green">267</div>
          <div className="metric-desc">86% of total area</div>
        </div>
        <div className="glass-card fields-metric">
          <div className="metric-title">Fenced</div>
          <div className="metric-value green">100%</div>
          <div className="metric-desc">all fields secured</div>
        </div>
      </div>

      <div className="fields-cards-row">
        {/* North Field */}
        <div className="glass-card field-card">
          <div className="field-card-header">
            <span>
              <span className="field-title">North Field</span>
              <span className="field-details">85 acres • Winter Wheat</span>
            </span>
            <span className="field-badge growing">Growing</span>
          </div>
          <div className="field-activity-box">
            <span className="activity-icon">⏱️</span>
            Last Activity: <span className="activity-type">Fertilizing</span>
            <span className="activity-date">12/01/2024</span>
          </div>
          <div className="field-progress-section">
            <div className="progress-row">
              <span>Harvested</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
            <div className="progress-row">
              <span>Sown</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Fertilised</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Plowed</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Tilled</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Slurry Applied</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "71%" }}></div></div>
              <span>71%</span>
            </div>
          </div>
          <div className="field-actions">
            <button className="field-btn">View Map</button>
            <button className="field-btn">Schedule Activity</button>
          </div>
        </div>
        {/* South Field */}
        <div className="glass-card field-card">
          <div className="field-card-header">
            <span>
              <span className="field-title">South Field</span>
              <span className="field-details">62 acres • Corn</span>
            </span>
            <span className="field-badge ready">Ready to Harvest</span>
          </div>
          <div className="field-activity-box">
            <span className="activity-icon">🧑‍🌾</span>
            Last Activity: <span className="activity-type">Monitoring</span>
            <span className="activity-date">14/01/2024</span>
          </div>
          <div className="field-progress-section">
            <div className="progress-row">
              <span>Harvested</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
            <div className="progress-row">
              <span>Sown</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Fertilised</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Plowed</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Tilled</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Slurry Applied</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "65%" }}></div></div>
              <span>65%</span>
            </div>
          </div>
          <div className="field-actions">
            <button className="field-btn">View Map</button>
            <button className="field-btn">Schedule Activity</button>
          </div>
        </div>
      </div>

      <div className="fields-cards-row">
        {/* East Field */}
        <div className="glass-card field-card">
          <div className="field-card-header">
            <span>
              <span className="field-title">East Field</span>
              <span className="field-details">45 acres • Soybeans</span>
            </span>
            <span className="field-badge preparing">Preparing</span>
          </div>
          <div className="field-activity-box">
            <span className="activity-icon">🚜</span>
            Last Activity: <span className="activity-type">Plowing</span>
            <span className="activity-date">10/01/2024</span>
          </div>
          <div className="field-progress-section">
            <div className="progress-row">
              <span>Harvested</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Sown</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
            <div className="progress-row">
              <span>Fertilised</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
            <div className="progress-row">
              <span>Plowed</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Tilled</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "67%" }}></div></div>
              <span>67%</span>
            </div>
            <div className="progress-row">
              <span>Slurry Applied</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
          </div>
          <div className="field-actions">
            <button className="field-btn">View Map</button>
            <button className="field-btn">Schedule Activity</button>
          </div>
        </div>
        {/* West Pasture */}
        <div className="glass-card field-card">
          <div className="field-card-header">
            <span>
              <span className="field-title">West Pasture</span>
              <span className="field-details">120 acres • Grass</span>
            </span>
            <span className="field-badge grazing">Grazing</span>
          </div>
          <div className="field-activity-box">
            <span className="activity-icon">🧑‍🌾</span>
            Last Activity: <span className="activity-type">Slurry Application</span>
            <span className="activity-date">08/01/2024</span>
          </div>
          <div className="field-progress-section">
            <div className="progress-row">
              <span>Harvested</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
            <div className="progress-row">
              <span>Sown</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
            <div className="progress-row">
              <span>Fertilised</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "67%" }}></div></div>
              <span>67%</span>
            </div>
            <div className="progress-row">
              <span>Plowed</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
            <div className="progress-row">
              <span>Tilled</span>
              <div className="progress-bar"><div className="progress brown" style={{ width: "0%" }}></div></div>
              <span>0%</span>
            </div>
            <div className="progress-row">
              <span>Slurry Applied</span>
              <div className="progress-bar"><div className="progress green" style={{ width: "100%" }}></div></div>
              <span>100%</span>
            </div>
          </div>
          <div className="field-actions">
            <button className="field-btn">View Map</button>
            <button className="field-btn">Schedule Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
}