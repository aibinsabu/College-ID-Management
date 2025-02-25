import React from 'react';

function FacultyDashboard() {
  return (
    <div className="dashboard">
      <h2>Faculty Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Attendance Tracking</h3>
          <button>Mark Attendance</button>
          <button>View Attendance</button>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <p>No new notifications</p>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;