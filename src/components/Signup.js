import React, { useState } from 'react';
import './Signup.css'; // Import CSS file for styling

const Signup = () => {
  // State variables to store user input and validation errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(name.trim())) {
      validationErrors.name = 'Name should contain only alphabets';
    }
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
      console.log('Signup data:', { name, email, password });
    }
  };

  return (
    <div className="signup-container">
      {/* Video background */}
      <video autoPlay loop muted className="background-video">
          <source src={require('../videos/videoplayback.mp4')} type="video/mp4" />
        </video>
      <div className="signup-content">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
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
    </div>
  );
};



export default Signup;
