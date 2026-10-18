// component/DashboardOverview.jsx
import React from 'react';
import Course from "./Course";
import Teachers from "./Teachers";
import Students from "./Students";

function DashboardOverview() {
  return (
    <div className="dashboard-cards-grid">
      <h3>Select a Panel to View Details:</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Course />
        <Teachers />
        <Students />
      </div>
    </div>
  );
}

export default DashboardOverview;
