import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ onPageChange }) => {
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState(null);

  // Fetch profile from backend
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("https://sirajum.alwaysdata.net/localtutorhub/get_Profile.php");
      setUserData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });
    if (file) {
      formData.append("profilePicture", file);
    }

    try {
      const res = await axios.post(
        "https://sirajum.alwaysdata.net/localtutorhub/updateProfile.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "success") {
        alert("Profile updated successfully!");
        setUserData(res.data.updatedProfile); // reload latest data
        setFile(null);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    if (onPageChange) onPageChange("TutorLogin");
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.header}>Profile</h2>

        {/* Profile Picture */}
        <div style={styles.profilePicContainer}>
          <img
            src={
              userData.image_url
                ? `https://sirajum.alwaysdata.net/localtutorhub/${userData.image_url}`
                : process.env.PUBLIC_URL + "/default.png"
            }
            alt="Profile"
            style={styles.profilePic}
          />
          <input type="file" onChange={handleFileChange} style={{ marginTop: "15px" }} />
        </div>

        {/* Profile Info */}
        <div style={styles.info}>
          <label>Name:</label>
          <input
            type="text"
            value={userData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            style={styles.input}
          />

          <label>ID:</label>
          <input
            type="text"
            value={userData.student_id || ""}
            readOnly
            style={styles.input}
          />

          <label>Location:</label>
          <input
            type="text"
            value={userData.location || ""}
            onChange={(e) => handleChange("location", e.target.value)}
            style={styles.input}
          />

          <label>Payment Status:</label>
          <input
            type="text"
            value={userData.payment_status || ""}
            readOnly
            style={styles.input}
          />

          <label>Payment Option:</label>
          <select
            value={userData.payment_option || ""}
            onChange={(e) => handleChange("payment_option", e.target.value)}
            style={styles.input}
          >
            <option value="">Select an option</option>
            <option value="Bikash">Bikash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
          </select>

          <label>Working At:</label>
          <input
            type="text"
            value={userData.working_at || ""}
            onChange={(e) => handleChange("working_at", e.target.value)}
            style={styles.input}
          />

          <label>Status:</label>
          <input
            type="text"
            value={userData.status || ""}
            onChange={(e) => handleChange("status", e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Buttons */}
        <button onClick={handleSubmit} style={styles.saveBtn}>Save</button>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  background: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  },
  card: {
    width: "600px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    color: "#fff",
    textAlign: "center",
  },
  header: {
    marginBottom: "25px",
    fontSize: "2rem",
  },
  profilePicContainer: {
    marginBottom: "25px",
  },
  profilePic: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #fff",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginBottom: "25px",
    textAlign: "left",
  },
  input: {
    padding: "12px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    fontSize: "1.1rem",
    width: "100%",
  },
  saveBtn: {
    padding: "14px 30px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.1rem",
    transition: "all 0.3s",
    marginRight: "15px",
  },
  logoutBtn: {
    padding: "14px 30px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg, #ff512f, #dd2476)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.1rem",
    transition: "all 0.3s",
  },
};

export default Profile;
