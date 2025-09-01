import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddInventoryItem.css";
import TranslucentButton from "./TranslucentButton";

const categories = [
  "Grains", "Vegetables", "Fruits", "Dairy", "Livestock",
  "Tools & Equipment", "Fertilizers", "Seeds"
];
const units = [
  "Kilograms (kg)", "Tons", "Pounds (lbs)", "Pieces",
  "Liters", "Gallons", "Bags", "Boxes"
];

export default function AddInventoryItem() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    category: "",
    unit: "",
    quantity: "",
    buyPrice: "",
    sellPrice: "",
    supplier: "",
    location: "",
    description: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Save item logic here
    navigate("/inventory");
  }

  return (
    <div className="add-item-container">
      <div className="glass-card add-item-card">
        <button className="back-btn" onClick={() => navigate("/inventory")}>← Back to Inventory</button>
        <h2>Add New Inventory Item</h2>
        <p>Enter details for the new crop or product.</p>
        <form onSubmit={handleSubmit} className="add-item-form">
          <div className="form-row">
            <div className="form-group">
              <label>Product Name *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="e.g., Wheat, Corn, Tomatoes" required />
            </div>
            <div className="form-group">
              <label>Category *</label>
              <select name="category" value={form.category} onChange={handleChange} required>
                <option value="">Select category</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Stock Quantity *</label>
              <input type="number" name="quantity" value={form.quantity} onChange={handleChange} min="0" required />
            </div>
            <div className="form-group">
              <label>Unit *</label>
              <select name="unit" value={form.unit} onChange={handleChange} required>
                <option value="">Select unit</option>
                {units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Buy Price ($)</label>
              <input type="number" name="buyPrice" value={form.buyPrice} onChange={handleChange} min="0" step="0.01" />
            </div>
            <div className="form-group">
              <label>Sell Price ($)</label>
              <input type="number" name="sellPrice" value={form.sellPrice} onChange={handleChange} min="0" step="0.01" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Supplier</label>
              <input name="supplier" value={form.supplier} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Storage Location</label>
              <input name="location" value={form.location} onChange={handleChange} placeholder="e.g., Warehouse A, Field 1" />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Additional notes about the product..." />
          </div>
          <div className="form-actions">
            <TranslucentButton type="submit">Save Item</TranslucentButton>
            <button type="button" className="cancel-btn" onClick={() => navigate("/inventory")}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
