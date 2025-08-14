import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import CropInventory from './components/CropInventory';
import GranaryStorage from './components/GranaryStorage';
import './styles/App.css';
import './components/TranslucentButton.css';

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="date-time">{dateTime.toLocaleString()}</div>
        <h1>Farming Management App</h1>
        <nav>
          <NavLink
            to="/crop-inventory"
            className="translucent-button nav-btn"
            activeClassName="active-nav"
          >
            Crop Inventory
          </NavLink>
          <NavLink
            to="/granary-storage"
            className="translucent-button nav-btn"
            activeClassName="active-nav"
          >
            Granary Storage
          </NavLink>
        </nav>
        <Switch>
          <Route path="/crop-inventory" component={CropInventory} />
          <Route path="/granary-storage" component={GranaryStorage} />
          <Route path="/" exact>
            <h2>Welcome to the Farming Management App</h2>
            <p>Select a feature from the menu.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;