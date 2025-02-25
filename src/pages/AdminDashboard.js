import React from 'react';

function AdminDashboard() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>System Status</h3>
          <p>Online - 99.9% Uptime</p>
        </div>
        <div className="card">
          <h3>User Management</h3>
          <button>Add User</button>
          <button>Edit User</button>
          <button>Remove User</button>
        </div>
        <div className="card">
          <h3>Reports</h3>
          <button>Generate Attendance Report</button>
          <button>Generate Bus Report</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;