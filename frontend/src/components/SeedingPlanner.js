import React, { useState } from "react";
import "../styles/SeedingPlanner.css";
import TranslucentButton from "./TranslucentButton";

export default function SeedingPlanner() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    cropName: "",
    variety: "",
    seedSource: "",
    fieldName: "",
    area: "",
    areaUnit: "acres",
    soilType: "",
    seedingMethod: "",
    totalSeeds: "",
    seedRate: "",
    seedRateUnit: "kg/acre",
    seedTreatment: "",
    sowingDate: "",
    transplantingDate: "",
    germinationPeriod: "",
    maturityDays: "",
    laborWorkers: "",
    laborHours: "",
    machinery: "",
    seedCost: "",
    otherExpenses: "",
    thinningReminder: "",
    transplantingReminder: "",
    irrigationReminder: "",
    fertilizerReminder: "",
    pestAlert: "",
    notes: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: handle form submission logic
    setShowModal(false);
  };

  return (
    <div className="seeding-planner-container">
      <div className="seeding-header">
        <h2>Seeding & Planting Planner</h2>
        <p>Track sowing dates, seed variety, germination rates</p>
        <TranslucentButton style={{background: '#2d7b3b', color: '#fff', minWidth: 180, fontWeight: 600}} onClick={() => setShowModal(true)}>+ Add New Seeding</TranslucentButton>
      </div>
      <div className="seeding-summary-cards">
        <div className="summary-card">
          <div className="summary-icon green-bg">🌱</div>
          <div className="summary-title">3</div>
          <div className="summary-desc">Active Plans</div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">📍</div>
          <div className="summary-title">135</div>
          <div className="summary-desc">Total Acres</div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">🌱</div>
          <div className="summary-title">92%</div>
          <div className="summary-desc">Avg Germination</div>
        </div>
        <div className="summary-card">
          <div className="summary-icon red-bg">💰</div>
          <div className="summary-title">$4,850</div>
          <div className="summary-desc">Total Investment</div>
        </div>
      </div>
      <div className="seeding-crop-cards">
        {/* Example crop cards, replace with dynamic data */}
        <div className="crop-card planned">
          <div className="crop-title-row">
            <div className="crop-title">Winter Wheat</div>
            <span className="status-badge">Planned</span>
          </div>
          <div className="crop-subtitle">Soft Red Winter</div>
          <div className="crop-field">Field A • 45 acres</div>
          <div className="crop-dates">
            <span>Sowing Date <b>Oct 15, 2024</b></span>
            <span>Harvest Date <b>Jul 20, 2024</b></span>
          </div>
          <div className="crop-stats">
            <span className="green">Germination Rate 92%</span>
            <span>Total Cost $2,000</span>
          </div>
          <div className="crop-costs">
            <span>Seed Cost $1,200</span>
            <span>Labor Cost $800</span>
          </div>
          <TranslucentButton style={{marginTop: '1rem'}}>View Details</TranslucentButton>
        </div>
        <div className="crop-card growing">
          <div className="crop-title-row">
            <div className="crop-title">Sweet Corn</div>
            <span className="status-badge growing">Growing</span>
          </div>
          <div className="crop-subtitle">Golden Bantam</div>
          <div className="crop-field">Field B • 28 acres</div>
          <div className="crop-dates">
            <span>Sowing Date <b>May 10, 2024</b></span>
            <span>Harvest Date <b>Aug 15, 2024</b></span>
          </div>
          <div className="crop-stats">
            <span className="yellow">Germination Rate 88%</span>
            <span>Total Cost $1,450</span>
          </div>
          <div className="crop-costs">
            <span>Seed Cost $850</span>
            <span>Labor Cost $600</span>
          </div>
          <TranslucentButton style={{marginTop: '1rem'}}>View Details</TranslucentButton>
        </div>
        <div className="crop-card planned">
          <div className="crop-title-row">
            <div className="crop-title">Soybeans</div>
            <span className="status-badge">Planned</span>
          </div>
          <div className="crop-subtitle">Early Maturity</div>
          <div className="crop-field">Field C • 62 acres</div>
          <div className="crop-dates">
            <span>Sowing Date <b>May 20, 2024</b></span>
            <span>Harvest Date <b>Sep 30, 2024</b></span>
          </div>
          <div className="crop-stats">
            <span className="green">Germination Rate 95%</span>
            <span>Total Cost $3,050</span>
          </div>
          <div className="crop-costs">
            <span>Seed Cost $1,850</span>
            <span>Labor Cost $1,200</span>
          </div>
          <TranslucentButton style={{marginTop: '1rem'}}>View Details</TranslucentButton>
        </div>
      </div>
      <div className="seeding-reminders">
        <div className="reminders-title">
          <span role="img" aria-label="reminder" style={{fontSize: '1.3rem', marginRight: '0.5rem'}}>🕒</span>
          <span>Upcoming Reminders</span>
        </div>
        <div className="reminder-card yellow-bg">
          <b>Thinning - Sweet Corn (Field B)</b>
          <div>Recommended in 3 days</div>
        </div>
        <div className="reminder-card green-bg">
          <b>Transplanting - Soybeans (Field C)</b>
          <div>Scheduled for next week</div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal seeding-modal">
            <form className="seeding-form" onSubmit={handleSubmit}>
              <h3>Plan New Seeding</h3>
              {/* Section 1: Basic Crop Information */}
              <div className="form-section">
                <h4>Basic Crop Information</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Crop Name</label>
                    <select name="cropName" value={form.cropName} onChange={handleChange} required>
                      <option value="">Select crop</option>
                      <option value="Wheat">Wheat</option>
                      <option value="Corn">Corn</option>
                      <option value="Soybeans">Soybeans</option>
                      {/* Add more crops as needed */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Variety/Hybrid</label>
                    <input name="variety" value={form.variety} onChange={handleChange} placeholder="Enter seed variety or hybrid" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Seed Source/Batch Number (Optional)</label>
                    <input name="seedSource" value={form.seedSource} onChange={handleChange} placeholder="Enter seed source or batch number" />
                  </div>
                </div>
              </div>
              {/* Section 2: Field & Area Details */}
              <div className="form-section">
                <h4>Field & Area Details</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Field/Plot Name</label>
                    <select name="fieldName" value={form.fieldName} onChange={handleChange} required>
                      <option value="">Select field</option>
                      <option value="Field A">Field A</option>
                      <option value="Field B">Field B</option>
                      <option value="Field C">Field C</option>
                      {/* Add more fields as needed */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Area Under Cultivation</label>
                    <input type="number" name="area" value={form.area} onChange={handleChange} min="0" placeholder="Area" required />
                    <select name="areaUnit" value={form.areaUnit} onChange={handleChange}>
                      <option value="acres">Acres</option>
                      <option value="hectares">Hectares</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Soil Type/Condition (Optional)</label>
                    <select name="soilType" value={form.soilType} onChange={handleChange}>
                      <option value="">Select soil type</option>
                      <option value="Loam">Loam</option>
                      <option value="Clay">Clay</option>
                      <option value="Sandy">Sandy</option>
                      {/* Add more soil types as needed */}
                    </select>
                  </div>
                </div>
              </div>
              {/* Section 3: Seed Details */}
              <div className="form-section">
                <h4>Seed Details</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Seeding Method</label>
                    <select name="seedingMethod" value={form.seedingMethod} onChange={handleChange} required>
                      <option value="">Select method</option>
                      <option value="Direct Sowing">Direct Sowing</option>
                      <option value="Transplanting">Transplanting</option>
                      {/* Add more methods as needed */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Seed Rate</label>
                    <input type="number" name="seedRate" value={form.seedRate} onChange={handleChange} min="0" placeholder="Seed rate" />
                    <select name="seedRateUnit" value={form.seedRateUnit} onChange={handleChange}>
                      <option value="kg/acre">kg/acre</option>
                      <option value="kg/hectare">kg/hectare</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Total Seeds Used</label>
                    <input type="number" name="totalSeeds" value={form.totalSeeds} onChange={handleChange} min="0" placeholder="Enter total quantity" />
                  </div>
                  <div className="form-group">
                    <label>Seed Treatment</label>
                    <select name="seedTreatment" value={form.seedTreatment} onChange={handleChange}>
                      <option value="">Select treatment</option>
                      <option value="None">None</option>
                      <option value="Fungicide">Fungicide</option>
                      <option value="Insecticide">Insecticide</option>
                      {/* Add more treatments as needed */}
                    </select>
                  </div>
                </div>
              </div>
              {/* Section 4: Sowing & Growth Timeline */}
              <div className="form-section">
                <h4>Sowing & Growth Timeline</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Sowing Date</label>
                    <input type="date" name="sowingDate" value={form.sowingDate} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Germination Period (Days)</label>
                    <input name="germinationPeriod" value={form.germinationPeriod} onChange={handleChange} placeholder="e.g. 7-14 days" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Transplanting Date (If Applicable)</label>
                    <input type="date" name="transplantingDate" value={form.transplantingDate} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Expected Days to Maturity</label>
                    <input name="maturityDays" value={form.maturityDays} onChange={handleChange} placeholder="e.g. 90-120 days" />
                  </div>
                </div>
              </div>
              {/* Section 5: Resource/Cost Inputs */}
              <div className="form-section">
                <h4>Resource & Cost Inputs</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Labor Used (Number of Workers)</label>
                    <input type="number" name="laborWorkers" value={form.laborWorkers} onChange={handleChange} min="0" />
                  </div>
                  <div className="form-group">
                    <label>Labor Hours</label>
                    <input type="number" name="laborHours" value={form.laborHours} onChange={handleChange} min="0" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Machinery Used</label>
                    <select name="machinery" value={form.machinery} onChange={handleChange}>
                      <option value="">Select machinery</option>
                      <option value="Tractor">Tractor</option>
                      <option value="Seeder">Seeder</option>
                      {/* Add more machinery as needed */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Cost of Seeds ($)</label>
                    <input type="number" name="seedCost" value={form.seedCost} onChange={handleChange} min="0" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group" style={{flex: 1}}>
                    <label>Other Expenses (Fertilizer, Irrigation, etc.)</label>
                    <input name="otherExpenses" value={form.otherExpenses} onChange={handleChange} placeholder="List any additional expenses..." />
                  </div>
                </div>
              </div>
              {/* Section 6: Reminders & Alerts */}
              <div className="form-section">
                <h4>Reminders & Alerts</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Thinning Reminder</label>
                    <input type="date" name="thinningReminder" value={form.thinningReminder} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Transplanting Reminder</label>
                    <input type="date" name="transplantingReminder" value={form.transplantingReminder} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Irrigation Reminder</label>
                    <input type="date" name="irrigationReminder" value={form.irrigationReminder} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Fertilizer Application Reminder</label>
                    <input type="date" name="fertilizerReminder" value={form.fertilizerReminder} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group" style={{flex: 1}}>
                    <label>Pest/Disease Watch Alerts (Optional)</label>
                    <input name="pestAlert" value={form.pestAlert} onChange={handleChange} placeholder="Set up specific pest or disease monitoring alerts..." />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group" style={{flex: 1}}>
                    <label>Additional Notes</label>
                    <input name="notes" value={form.notes} onChange={handleChange} placeholder="Any additional comments, observations, or special instructions..." />
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">Save Seeding Plan</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
