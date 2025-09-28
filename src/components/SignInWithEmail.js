import React, { useState } from 'react';
import axios from 'axios';

const SignInWithEmail = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      setRegistrationMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post(
        'https://paloma-nonmicroscopic-marleigh.ngrok-free.app/register.php',
        { name, email, password, retypePassword }
      );
      console.log(response.data);
      setRegistrationMessage('Registration successful!');
      setName('');
      setEmail('');
      setPassword('');
      setRetypePassword('');
    } catch (error) {
      console.error(error);
      setRegistrationMessage('Registration failed!');
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <h2 style={styles.header}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        {registrationMessage && (
          <p
            style={{
              marginTop: '12px',
              color: registrationMessage.includes('successful')
                ? '#00ff9d'
                : '#ff9d9d',
              fontSize: '14px',
            }}
          >
            {registrationMessage}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div>
          <a href="https://www.facebook.com/sirajummonir.monir.5" target="_blank" rel="noopener noreferrer">
            <img src="/fb1.png" alt="Facebook" style={styles.icon} />
          </a>
          <a href="https://twitter.com/ayon_chayo33456" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.jpeg" alt="Twitter" style={styles.icon} />
          </a>
          <a href="https://www.instagram.com/monir_chayon/" target="_blank" rel="noopener noreferrer">
            <img src="/insta.jpeg" alt="Instagram" style={styles.icon} />
          </a>
          <a href="https://github.com/monir235" target="_blank" rel="noopener noreferrer">
            <img src="/git.png" alt="GitHub" style={styles.icon} />
          </a>
          <a href="https://web.cu.ac.bd/v2/" target="_blank" rel="noopener noreferrer">
            <img src="/Culogo.jpeg" alt="CU" style={styles.icon} />
          </a>
        </div>
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
          © 2024 Sirajum Monir | University of Chittagong
        </div>
      </footer>
    </div>
  );
};

const styles = {
  pageBackground: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
  },
  card: {
    width: '90%', // take most of screen on mobile
    maxWidth: '400px', // limit width on larger screens
    margin: 'auto',
    padding: '25px',
    borderRadius: '18px',
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(18px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    marginBottom: '20px',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    marginBottom: '15px',
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
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  footer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '12px',
    marginTop: '30px',
    fontSize: '14px',
  },
  icon: {
    width: '26px',
    margin: '0 8px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
};

export default SignInWithEmail;
