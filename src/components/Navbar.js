import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png'; // Import your logo image

function Navbar() {
  const { isAuthenticated, userRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="College ID Management Logo" className="navbar-logo" />
        <h1>College ID Management</h1>
      </div>
      <div className="nav-links">
        {isAuthenticated ? (
          <>
            {userRole === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
            {userRole === 'faculty' && <Link to="/faculty">Faculty Dashboard</Link>}
            {userRole === 'student' && <Link to="/student">Student Dashboard</Link>}
            {userRole === 'transport' && <Link to="/transport">Transport Dashboard</Link>}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;