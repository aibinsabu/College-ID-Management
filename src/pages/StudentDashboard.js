import React from 'react';

function StudentDashboard() {
  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Attendance Records</h3>
          <p>View your attendance history</p>
          <button>View Records</button>
        </div>
        <div className="card">
          <h3>Bus Schedule</h3>
          <p>Check bus timings</p>
          <button>View Schedule</button>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;