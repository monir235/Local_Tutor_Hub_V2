import React, { useState } from 'react';

const StuLogin = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can still send login info to backend if you want, but navigation happens regardless
    fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/studentprofile.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    .catch((error) => console.error(error));

    // Navigate regardless of login result
    onPageChange('StuInfo');
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h1 style={styles.header}>Student Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          placeholder="Password"
        />
        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  card: {
    width: '400px',
    padding: '40px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    marginBottom: '30px',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: '14px',
    marginBottom: '20px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.3)',
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s',
  },
  button: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
    color: '#fff',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};

// Optional: Add hover and focus effects
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
input:focus {
  border: 1px solid #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}`, styleSheet.cssRules.length);
styleSheet.insertRule(`
button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 125, 179, 0.6);
}`, styleSheet.cssRules.length);

export default StuLogin;
