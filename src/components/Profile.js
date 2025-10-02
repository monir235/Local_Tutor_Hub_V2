import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profilePic, setProfilePic] = useState('');

  // Fetch current profile picture on load
  useEffect(() => {
    axios.get('https://sirajum.alwaysdata.net/localtutorhub/get_Profile.php')
      .then(res => {
        if (res.data.image_url) {
          setProfilePic(res.data.image_url.startsWith('http') 
            ? res.data.image_url 
            : 'https://sirajum.alwaysdata.net/localtutorhub/' + res.data.image_url);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profilePicture', file);

    try {
      const res = await axios.post(
        'https://sirajum.alwaysdata.net/localtutorhub/updateProfile.php',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (res.data.status === 'success') {
        setProfilePic(res.data.profile.image_url.startsWith('http') 
          ? res.data.profile.image_url 
          : 'https://sirajum.alwaysdata.net/localtutorhub/' + res.data.profile.image_url);
        alert('Profile picture updated!');
      } else {
        alert('Error updating profile picture');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.header}>Profile</h2>
        <div style={styles.profilePicContainer}>
          <img 
            src={profilePic || process.env.PUBLIC_URL + '/Monir.jpg'} 
            alt="Profile" 
            style={styles.profilePic} 
          />
        </div>
        <input type="file" onChange={handleFileChange} style={{ marginBottom: '20px' }} />

        <div style={styles.info}>
          <label>Name:</label>
          <input type="text" value="Sirajum Monir" readOnly style={styles.input} />

          <label>ID:</label>
          <input type="text" value="21701005" readOnly style={styles.input} />

          <label>Location:</label>
          <input type="text" value="Chandgaon, Chittagong" readOnly style={styles.input} />

          <label>Payment Status:</label>
          <input type="text" value="Paid" readOnly style={styles.input} />

          <label>Payment Option:</label>
          <input type="text" value="" readOnly style={styles.input} />

          <label>Working At:</label>
          <input type="text" value="University of Chittagong" readOnly style={styles.input} />

          <label>Status:</label>
          <input type="text" value="Admin" readOnly style={styles.input} />
        </div>
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
    width: '600px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    color: '#fff',
    textAlign: 'center'
  },
  header: { marginBottom: '25px', fontSize: '2rem' },
  profilePicContainer: { marginBottom: '25px' },
  profilePic: { width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff' },
  info: { display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '25px' },
  input: { padding: '12px', borderRadius: '12px', border: 'none', outline: 'none', backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: '1.1rem', width: '100%' }
};

export default Profile;
