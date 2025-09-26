import React, { useState } from 'react';

const Login = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // Make a POST request to your backend
    const response = await fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/loga.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      // If login is successful, navigate to the Admin page
      onPageChange('Admin');
    } else {
      // If login fails, display an error message
      setError(data.message);
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("/tutor.jpeg")',
      backgroundSize: 'cover',
    }}>
      <div style={{ 
        width: '300px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginTop: '50px',
      }}>
        <h2 style={{ textAlign: 'center', color: '#0000ff' }}>Admin Login</h2>
        <form onSubmit={handleLoginClick}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
            required
          />
          <button
            type="submit"
            style={{ 
              width: '100%',
              backgroundColor: '#0000ff',
              color: 'white',
              padding: '10px 0',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </div>
      <h1 style={{ fontSize: '100px', color: 'black', marginTop: '150px' }}>Local-Tutor-Hub</h1>
    </div>
  );
};

export default Login;
