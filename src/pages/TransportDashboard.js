import React from 'react';

function TransportDashboard() {
  return (
    <div className="dashboard">
      <h2>Transport Manager Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Bus Management</h3>
          <button>View Routes</button>
          <button>Edit Schedule</button>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <button>Send Alert</button>
        </div>
      </div>
    </div>
  );
}

export default TransportDashboard;