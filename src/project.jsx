import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#141414' // Dark background
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    padding: '2em',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const headingStyle = {
    margin: '0',
    color: '#333'
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={headingStyle}>PHARMACY MANAGEMENT SYSTEM</h1>
        <br>
        </br>
        <br>
        </br>
        <h2 style={headingStyle}>LOGIN</h2>
        <br>
        </br>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <br></br>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        <br>
        </br>
        <h4>OR</h4>
        <button type="submit" style={buttonStyle}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Login;
