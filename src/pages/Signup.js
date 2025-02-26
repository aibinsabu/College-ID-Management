import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.password) tempErrors.password = 'Password is required';
    else if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    if (!formData.role) tempErrors.role = 'Please select a role';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call for signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, you'd make an API call here
      // const response = await axios.post('/api/signup', formData);
      
      navigate('/'); // Redirect to login after successful signup
    } catch (error) {
      setErrors({ form: 'Signup failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled={isLoading}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            disabled={isLoading}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            disabled={isLoading}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={isLoading}
          >
            <option value="">Select your role</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
            <option value="transport">Transport Manager</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        {errors.form && <div className="form-error">{errors.form}</div>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      
      <div className="signup-info">
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </div>
    </div>
  );
}

export default Signup;