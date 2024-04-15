import React, { useState } from 'react';
import './Login1.css'; // Import CSS file for styling

const Login = () => {
  // State variables to store user input and validation errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    setErrors(validationErrors);

    // If no validation errors, proceed with login logic
    if (Object.keys(validationErrors).length === 0) {
      // Here, you would typically send the credentials to the backend for authentication
      // For this example, we'll just display them in the console
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to check AQI</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;