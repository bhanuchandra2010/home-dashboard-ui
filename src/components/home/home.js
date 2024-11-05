import React from 'react';
import './Dashboard.css';
import DefaultImage from './weather.png';

const Dashboard = () => {

  return (
    <div className="dashboard">
      <div className="control-panel">
        <div className="control">
          <img src='./weather.png' />
        </div>
        <div className="control">
          <h2>Thermostat</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
