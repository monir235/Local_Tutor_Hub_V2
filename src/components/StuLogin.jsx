import React, { useState } from 'react';

const StuLogin = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotStatus, setForgotStatus] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://sirajum.alwaysdata.net/localtutorhub/studentprofile.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        setLoginStatus(data.message);

        if (data.success) {
          if (data.studentExists) {    // ✅ corrected
            onPageChange('Stubd');     // ✅ student dashboard page
          } else {
            onPageChange('StuInfo');   // ✅ student info form
          }
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('Login failed');
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost/localtutorhub/studentforgot.php', {   // ✅ point to real backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail })
      });

      if (response.ok) {
        const data = await response.json();
        setForgotStatus(data.message);
      } else {
        throw new Error('Recovery failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setForgotStatus('Failed to send recovery email');
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h1 style={styles.header}>Student Login</h1>  {/* ✅ fixed header */}
        {isForgotPassword ? (
          <div>
            <h3 style={styles.subHeader}>Forgot Password</h3>
            <input
              type="email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
            />
            <button onClick={handleForgotPassword} style={styles.button}>
              Send Recovery Email
            </button>
            {forgotStatus && <p style={styles.statusText}>{forgotStatus}</p>}
            <button
              onClick={() => setIsForgotPassword(false)}
              style={styles.secondaryButton}
            >
              Back to Login
            </button>
          </div>
        ) : (
          <div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div>
            <button onClick={handleLogin} style={styles.button}>
              Login
            </button>
            {loginStatus && <p style={styles.statusText}>{loginStatus}</p>}
            <p
              onClick={() => setIsForgotPassword(true)}
              style={styles.forgotPasswordLink}
            >
              Forgot Password?
            </p>
          </div>
        )}
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

export default StuLogin;
