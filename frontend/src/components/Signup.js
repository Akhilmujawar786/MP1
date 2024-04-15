import React, { useState } from 'react';
import './Signup.css'; // Import CSS file for styling
const Signup = () => {
  // State variables to store user input and validation errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(validationErrors);

    // If no validation errors, proceed with signup logic
    if (Object.keys(validationErrors).length === 0) {
      // Here, you would typically send the signup data to the backend
      console.log('Signup data:', { email, password });
    }
  };

  return (
    <div className="signup-container">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
