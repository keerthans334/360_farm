import React from "react";
import "../styles/GlassCard.css";
import "../styles/Livestock.css"; // Create this file for custom styles

export default function Livestock() {
  return (
    <div>
      <h2>Animal Husbandry</h2>
      <div className="livestock-metrics-row">
        <div className="glass-card livestock-metric">
          <div className="metric-title">Total Animals</div>
          <div className="metric-value green">266</div>
          <div className="metric-desc">across 4 groups</div>
        </div>
        <div className="glass-card livestock-metric">
          <div className="metric-title">Health Score</div>
          <div className="metric-value green">87%</div>
          <div className="metric-desc">Average across all livestock</div>
        </div>
        <div className="glass-card livestock-metric">
          <div className="metric-title">Pregnancies</div>
          <div className="metric-value yellow">24</div>
          <div className="metric-desc">expected births</div>
        </div>
        <div className="glass-card livestock-metric">
          <div className="metric-title">Food Alert</div>
          <div className="metric-value yellow">2</div>
          <div className="metric-desc">groups need restocking</div>
        </div>
      </div>

      <div className="livestock-cards-row">
        {/* Dairy Cows */}
        <div className="glass-card livestock-card">
          <div className="livestock-card-header">
            <span className="livestock-title">Dairy Cows</span>
            <span className="livestock-badge excellent">Excellent</span>
          </div>
          <div className="livestock-details">45 animals</div>
          <div className="livestock-section">
            <div className="section-label">Health Score</div>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "95%" }}></div>
            </div>
            <span className="section-value">95%</span>
          </div>
          <div className="livestock-section">
            <div className="section-label food-label">🍽️ Food Stock</div>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "85%" }}></div>
            </div>
            <span className="section-value">850 / 1000 kg <span className="food-good">Good</span> <span className="days-remaining">12 days remaining</span></span>
          </div>
          <div className="livestock-section">
            <div className="section-label repro-label">🍼 Reproductive Health</div>
            <span className="repro-values">
              <span className="repro-pregnant">8 Pregnant</span>
              <span className="repro-births">3 Recent Births</span>
              <span className="repro-scheduled">5 Scheduled</span>
            </span>
          </div>
          <div className="livestock-checkup">
            <span className="checkup-date">Last Checkup: 12/01/2024</span>
            <span className="checkup-note">All animals healthy, milk production excellent</span>
          </div>
          <div className="livestock-actions">
            <button className="livestock-btn">Health Report</button>
            <button className="livestock-btn">Schedule Care</button>
          </div>
        </div>
        {/* Beef Cattle */}
        <div className="glass-card livestock-card">
          <div className="livestock-card-header">
            <span className="livestock-title">Beef Cattle</span>
            <span className="livestock-badge good">Good</span>
          </div>
          <div className="livestock-details">78 animals</div>
          <div className="livestock-section">
            <div className="section-label">Health Score</div>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "88%" }}></div>
            </div>
            <span className="section-value">88%</span>
          </div>
          <div className="livestock-section">
            <div className="section-label food-label">🍽️ Food Stock</div>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "80%" }}></div>
            </div>
            <span className="section-value">1200 / 1500 kg <span className="food-good">Good</span> <span className="days-remaining">15 days remaining</span></span>
          </div>
          <div className="livestock-section">
            <div className="section-label repro-label">🍼 Reproductive Health</div>
            <span className="repro-values">
              <span className="repro-pregnant">12 Pregnant</span>
              <span className="repro-births">6 Recent Births</span>
              <span className="repro-scheduled">8 Scheduled</span>
            </span>
          </div>
          <div className="livestock-checkup">
            <span className="checkup-date">Last Checkup: 10/01/2024</span>
            <span className="checkup-note">Some minor respiratory issues, treating with antibiotics</span>
          </div>
          <div className="livestock-actions">
            <button className="livestock-btn">Health Report</button>
            <button className="livestock-btn">Schedule Care</button>
          </div>
        </div>
      </div>

      <div className="livestock-cards-row">
        {/* Pigs */}
        <div className="glass-card livestock-card">
          <div className="livestock-card-header">
            <span className="livestock-title">Pigs</span>
            <span className="livestock-badge fair">Fair</span>
          </div>
          <div className="livestock-details">23 animals</div>
          <div className="livestock-section">
            <div className="section-label">Health Score</div>
            <div className="progress-bar">
              <div className="progress brown" style={{ width: "75%" }}></div>
            </div>
            <span className="section-value">75%</span>
          </div>
          <div className="livestock-section">
            <div className="section-label food-label">🍽️ Food Stock</div>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "75%" }}></div>
            </div>
            <span className="section-value">300 / 400 kg <span className="food-good">Good</span> <span className="days-remaining">8 days remaining</span></span>
          </div>
          <div className="livestock-section">
            <div className="section-label repro-label">🍼 Reproductive Health</div>
            <span className="repro-values">
              <span className="repro-pregnant">4 Pregnant</span>
              <span className="repro-births">12 Recent Births</span>
              <span className="repro-scheduled">2 Scheduled</span>
            </span>
          </div>
          <div className="livestock-checkup">
            <span className="checkup-date">Last Checkup: 14/01/2024</span>
            <span className="checkup-note">Need to address housing conditions, food running low</span>
          </div>
          <div className="livestock-actions">
            <button className="livestock-btn">Health Report</button>
            <button className="livestock-btn">Schedule Care</button>
          </div>
        </div>
        {/* Chickens */}
        <div className="glass-card livestock-card">
          <div className="livestock-card-header">
            <span className="livestock-title">Chickens</span>
            <span className="livestock-badge good">Good</span>
          </div>
          <div className="livestock-details">120 animals</div>
          <div className="livestock-section">
            <div className="section-label">Health Score</div>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "90%" }}></div>
            </div>
            <span className="section-value">90%</span>
          </div>
          <div className="livestock-section">
            <div className="section-label food-label">🍽️ Food Stock</div>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "90%" }}></div>
            </div>
            <span className="section-value">180 / 200 kg <span className="food-good">Good</span> <span className="days-remaining">10 days remaining</span></span>
          </div>
          <div className="livestock-section">
            <div className="section-label repro-label">🍼 Reproductive Health</div>
            <span className="repro-values">
              <span className="repro-pregnant">0 Pregnant</span>
              <span className="repro-births">25 Recent Births</span>
              <span className="repro-scheduled">0 Scheduled</span>
            </span>
          </div>
          <div className="livestock-checkup">
            <span className="checkup-date">Last Checkup: 13/01/2024</span>
            <span className="checkup-note">Egg production stable, no health concerns</span>
          </div>
          <div className="livestock-actions">
            <button className="livestock-btn">Health Report</button>
            <button className="livestock-btn">Schedule Care</button>
          </div>
        </div>
      </div>
    </div>
  );
}