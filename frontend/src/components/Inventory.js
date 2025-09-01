import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GlassCard.css";
import TranslucentButton from "./TranslucentButton";

export default function Inventory() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Inventory Management</h2>
      <div className="glass-card">
        <div className="inventory-metrics">
          <div>
            <div className="metric-title">Total Items</div>
            <div className="metric-value green">1,247</div>
          </div>
          <div>
            <div className="metric-title">Total Value</div>
            <div className="metric-value green">$45,230</div>
          </div>
          <div>
            <div className="metric-title">Avg Profit Margin</div>
            <div className="metric-value green">48.5%</div>
          </div>
          <div>
            <div className="metric-title">Low Stock Items</div>
            <div className="metric-value yellow">23</div>
          </div>
        </div>
        <div className="inventory-table-section">
          <div className="inventory-table-header">
            <h3>Crop Inventory</h3>
            <TranslucentButton onClick={() => navigate("/inventory/add")}>
              + Add Item
            </TranslucentButton>
          </div>
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Stock</th>
                <th>Buy Price</th>
                <th>Sell Price</th>
                <th>Profit Margin</th>
                <th>Status</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wheat</td>
                <td>2,500 kg</td>
                <td>$0.45</td>
                <td>$0.62</td>
                <td className="green">37.8%</td>
                <td>
                  <span className="status in-stock">In Stock</span>
                </td>
                <td>↗</td>
              </tr>
              <tr>
                <td>Corn</td>
                <td>1,800 kg</td>
                <td>$0.38</td>
                <td>$0.51</td>
                <td className="green">34.2%</td>
                <td>
                  <span className="status in-stock">In Stock</span>
                </td>
                <td>↗</td>
              </tr>
              <tr>
                <td>Tomatoes</td>
                <td>150 kg</td>
                <td>$2.20</td>
                <td>$3.85</td>
                <td className="green">75.0%</td>
                <td>
                  <span className="status low-stock">Low Stock</span>
                </td>
                <td>↘</td>
              </tr>
              <tr>
                <td>Potatoes</td>
                <td>890 kg</td>
                <td>$0.85</td>
                <td>$1.25</td>
                <td className="green">47.1%</td>
                <td>
                  <span className="status in-stock">In Stock</span>
                </td>
                <td>•</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}