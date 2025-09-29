import React, { useState, useEffect } from 'react';

const Profile = ({ onPageChange }) => {
  const [userData, setUserData] = useState({
    name: 'Sirajum Monir',
    id: '21701005',
    location: 'chandgaon, chittagong',
    paymentStatus: 'paid',
    paymentOption: '',
    profilePicture: localStorage.getItem('profilePicture') || '',
    workingAt: '',
    status: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userDataFromBackend = {
        name: 'Sirajum Monir',
        id: '21701005',
        location: 'Chandgaon, Chittagong',
        paymentStatus: 'paid',
        paymentOption: '',
        workingAt: 'University of Chittagong',
        status: 'Admin'
      };
      setUserData(userDataFromBackend);
    };

    fetchUserData();
  }, []);

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleLogout = () => {
    onPageChange('TutorLogin');
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.header}>Profile</h2>
        <div style={styles.profilePicContainer}>
          <img 
            src={process.env.PUBLIC_URL + '/Monir.jpg'} 
            alt="Profile" 
            style={styles.profilePic} 
          />
        </div>

        <div style={styles.info}>
          <label>Name:</label>
          <input type="text" value={userData.name} onChange={(e) => handleChange('name', e.target.value)} style={styles.input} />

          <label>ID:</label>
          <input type="text" value={userData.id} readOnly style={styles.input} />

          <label>Location:</label>
          <input type="text" value={userData.location} onChange={(e) => handleChange('location', e.target.value)} style={styles.input} />

          <label>Payment Status:</label>
          <input type="text" value={userData.paymentStatus} readOnly style={styles.input} />

          <label>Payment Option:</label>
          <select value={userData.paymentOption} onChange={(e) => handleChange('paymentOption', e.target.value)} style={styles.input}>
            <option value="">Select an option</option>
            <option value="Bikash">Bikash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
          </select>

          <label>Working At:</label>
          <input type="text" value={userData.workingAt} onChange={(e) => handleChange('workingAt', e.target.value)} style={styles.input} />

          <label>Status:</label>
          <input type="text" value={userData.status} onChange={(e) => handleChange('status', e.target.value)} style={styles.input} />
        </div>

        <button onClick={handleLogout} style={styles.button}>Logouts</button>
      </div>
    </div>
  );
};

const styles = {
  background: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px'
  },
  card: {
    width: '600px',  // Increased width for better visibility
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    color: '#fff',
    textAlign: 'center'
  },
  header: {
    marginBottom: '25px',
    fontSize: '2rem'
  },
  profilePicContainer: {
    marginBottom: '25px'
  },
  profilePic: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #fff'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    marginBottom: '25px'
  },
  input: {
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    fontSize: '1.1rem',
    width: '100%'
  },
  button: {
    padding: '14px 30px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(90deg, #ff512f, #dd2476)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'all 0.3s',
  }
};

export default Profile;
