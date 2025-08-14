import React, { useState } from 'react';
import './CropInventory.css';

function CropInventory() {
  const [crops, setCrops] = useState([]);
  const [input, setInput] = useState('');

  const handleAddCrop = () => {
    if (input.trim() !== '') {
      setCrops([
        ...crops,
        {
          name: input.trim(),
          time: new Date().toLocaleString(),
        },
      ]);
      setInput('');
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddCrop();
    }
  };

  const handleRemoveCrop = (index) => {
    setCrops(crops.filter((_, i) => i !== index));
  };

  return (
    <div className="crop-inventory-container">
      <h2>Crop Inventory</h2>
      <div className="add-crop-row">
        <input
          type="text"
          placeholder="Add a new crop..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <button className="translucent-button" onClick={handleAddCrop}>
          Add
        </button>
      </div>
      <ul className="crop-list">
        {crops.length === 0 && <li className="empty-list">No crops added yet.</li>}
        {crops.map((crop, idx) => (
          <li key={idx} className="crop-list-item">
            <button className="remove-btn" onClick={() => handleRemoveCrop(idx)}>✕</button>
            <span className="crop-name">{crop.name}</span>
            <span className="crop-time">{crop.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CropInventory;