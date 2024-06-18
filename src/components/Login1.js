// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login1.css';
import { Link } from 'react-router-dom';

const Login = ({ setLoggedIn, destination }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'abc' && email === 'abc@123.com' && password === 'abc') {
      // Simulate successful login
      localStorage.setItem('accessToken', 'your_access_token');
      setLoggedIn(true);
      navigate(destination || '/travel'); // Redirect to destination or '/travel' if no destination
    } else {
      setError('Invalid username, email, or password');
    }
  };

  return (
      <div className="login-container">
        <video autoPlay loop muted className="background-video">
          <source src={require('../videos/videoplayback.mp4')} type="video/mp4" />
        </video>
        <div className="form-container">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            {error && <div className="error-message">{error}</div>}
            <p className="signup-message">Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
      </div>
    );
  };
  

export default Login;
