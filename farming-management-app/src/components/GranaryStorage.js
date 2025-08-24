import React, { useState } from 'react';
import './GranaryStorage.css';

function GranaryStorage() {
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState('');

  const handleAddEntry = () => {
    if (input.trim() !== '') {
      setEntries([
        ...entries,
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
      handleAddEntry();
    }
  };

  const handleRemoveEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className="granary-storage-container">
      <h2>Granary Storage</h2>
      <div className="add-granary-row">
        <input
          type="text"
          placeholder="Add new grain or storage entry..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <button className="translucent-button" onClick={handleAddEntry}>
          Add
        </button>
      </div>
      <ul className="granary-list">
        {entries.length === 0 && <li className="empty-list">No entries yet.</li>}
        {entries.map((entry, idx) => (
          <li key={idx} className="granary-list-item">
            <button className="remove-btn" onClick={() => handleRemoveEntry(idx)}>✕</button>
            <span className="granary-name">{entry.name}</span>
            <span className="granary-time">{entry.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GranaryStorage;