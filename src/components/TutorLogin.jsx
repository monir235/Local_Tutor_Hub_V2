import React, { useState } from 'react';

const TutorLogin = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotStatus, setForgotStatus] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://sirajum.alwaysdata.net/localtutorhub/tutorprofile.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        setLoginStatus(data.message);
        if (data.success) {
  if (data.tutorExists) {
    onPageChange('Tinfo'); // go directly to Tinfo page
  } else {
    onPageChange('Tutor'); // go to form page
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
      const response = await fetch('/api/forgotpassword', {
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
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <h1 style={styles.header}>Tutor Login</h1>
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
  pageBackground: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
  },
  card: {
    width: '420px',
    padding: '40px',
    borderRadius: '18px',
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    marginBottom: '25px',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  subHeader: {
    marginBottom: '20px',
    fontSize: '1.3rem',
    fontWeight: '500',
  },
  inputGroup: {
    textAlign: 'left',
    marginBottom: '18px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '6px',
    display: 'block',
    color: '#eee',
  },
  input: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    transition: 'all 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(90deg, #ff512f, #dd2476)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '12px',
  },
  secondaryButton: {
    width: '100%',
    padding: '14px',
    background: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '12px',
    transition: '0.3s',
  },
  statusText: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#ffb3b3',
  },
  forgotPasswordLink: {
    marginTop: '18px',
    fontSize: '14px',
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'underline',
    opacity: 0.9,
  },
};

export default TutorLogin;
